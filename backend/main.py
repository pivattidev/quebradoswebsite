from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from bson import ObjectId
import os

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017/')
client = MongoClient(MONGO_URL)
db = client['quebrados_fc_db']
news_collection = db['news']
subscribers_collection = db['subscribers']

# Models
class NewsItem(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    author: str
    date: str
    image: Optional[str] = None

class Subscriber(BaseModel):
    email: str

class NewsResponse(BaseModel):
    id: str
    title: str
    excerpt: str
    content: str
    category: str
    author: str
    date: str
    image: str

# Routes
@app.get("/api/")
async def root():
    return {"message": "Quebrados FC News API - Backend running!"}

@app.post("/api/news")
async def create_news(news: NewsItem):
    try:
        news_dict = news.dict()
        news_dict['created_at'] = datetime.now()
        result = news_collection.insert_one(news_dict)
        return {"message": "News created successfully", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/news")
async def get_all_news():
    try:
        news_list = []
        for news in news_collection.find().sort("created_at", -1):
            news_list.append({
                "id": str(news["_id"]),
                "title": news["title"],
                "excerpt": news["excerpt"],
                "content": news["content"],
                "category": news["category"],
                "author": news["author"],
                "date": news["date"],
                "image": news.get("image", "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800")
            })
        return news_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/news/{news_id}")
async def get_news_by_id(news_id: str):
    try:
        news = news_collection.find_one({"_id": ObjectId(news_id)})
        if not news:
            raise HTTPException(status_code=404, detail="News not found")
        
        return {
            "id": str(news["_id"]),
            "title": news["title"],
            "excerpt": news["excerpt"],
            "content": news["content"],
            "category": news["category"],
            "author": news["author"],
            "date": news["date"],
            "image": news.get("image", "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/subscribe")
async def subscribe_newsletter(subscriber: Subscriber):
    try:
        # Check if email already exists
        existing = subscribers_collection.find_one({"email": subscriber.email})
        if existing:
            return {"message": "Email already subscribed"}
        
        subscriber_dict = subscriber.dict()
        subscriber_dict['subscribed_at'] = datetime.now()
        subscribers_collection.insert_one(subscriber_dict)
        return {"message": "Successfully subscribed to newsletter"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/subscribers")
async def get_subscribers():
    try:
        subscribers = []
        for sub in subscribers_collection.find():
            subscribers.append({
                "email": sub["email"],
                "subscribed_at": sub["subscribed_at"]
            })
        return subscribers
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)