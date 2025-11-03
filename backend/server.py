from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from bson import ObjectId
import os
import random

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
comments_collection = db['comments']

# Models
class NewsItem(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    author: str
    image: Optional[str] = None

class Subscriber(BaseModel):
    email: str

class Comment(BaseModel):
    author: str
    content: str
    avatar: str

# Sample comments pool for daily rotation
COMMENTS_POOL = [
    {"author": "Carlos Mendes", "content": "Que jogo incrível! O Quebrados mostrou muita raça hoje. Esse time tem tudo para conquistar o título! 🏆⚽", "category": "Opinião"},
    {"author": "Mariana Silva", "content": "Alguém mais notou a evolução do meio-campo? A conexão entre os jogadores está cada vez melhor!", "category": "Análise"},
    {"author": "Roberto Alves", "content": "Orgulho de fazer parte dessa torcida! Independente do resultado, sempre com o Quebrados FC! 💛🖤", "category": "Torcida"},
    {"author": "Juliana Costa", "content": "A defesa está impecável! Nossos zagueiros são uma muralha!", "category": "Análise"},
    {"author": "Pedro Santos", "content": "Rafael é craque demais! Esse atacante vai longe no futebol!", "category": "Elogios"},
    {"author": "Amanda Oliveira", "content": "Que vitória importante! Continuem assim, guerreiros!", "category": "Torcida"},
    {"author": "Lucas Ferreira", "content": "O técnico está fazendo um trabalho excepcional com o time!", "category": "Opinião"},
    {"author": "Beatriz Lima", "content": "Estou impressionada com a união do elenco. Isso faz toda diferença!", "category": "Análise"},
    {"author": "Ricardo Martins", "content": "Quebrados FC é paixão pura! Vamos em busca de mais títulos!", "category": "Torcida"},
    {"author": "Fernanda Rocha", "content": "A torcida está de parabéns! Apoio incondicional ao time!", "category": "Torcida"},
]

# Routes
@app.get("/api/")
async def root():
    return {"message": "Quebrados FC News API - Backend running!"}

@app.post("/api/news")
async def create_news(news: NewsItem):
    try:
        current_date = datetime.now()
        news_dict = news.dict()
        news_dict['date'] = current_date.strftime('%d %b %Y')
        news_dict['created_at'] = current_date
        
        if not news_dict.get('image'):
            news_dict['image'] = 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800'
        
        result = news_collection.insert_one(news_dict)
        return {"message": "News created successfully", "id": str(result.inserted_id)}
    except Exception as e:
        print(f"Error creating news: {str(e)}")
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
        print(f"Error fetching news: {str(e)}")
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
        print(f"Error fetching news: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/api/news/{news_id}")
async def delete_news(news_id: str):
    try:
        result = news_collection.delete_one({"_id": ObjectId(news_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="News not found")
        return {"message": "News deleted successfully"}
    except Exception as e:
        print(f"Error deleting news: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/subscribe")
async def subscribe_newsletter(subscriber: Subscriber):
    try:
        existing = subscribers_collection.find_one({"email": subscriber.email})
        if existing:
            return {"message": "Email already subscribed"}
        
        subscriber_dict = subscriber.dict()
        subscriber_dict['subscribed_at'] = datetime.now()
        subscribers_collection.insert_one(subscriber_dict)
        return {"message": "Successfully subscribed to newsletter"}
    except Exception as e:
        print(f"Error subscribing: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/comments/daily")
async def get_daily_comments():
    try:
        # Get current day of year to ensure same comments for same day
        day_of_year = datetime.now().timetuple().tm_yday
        random.seed(day_of_year)
        
        # Select 3 random comments for today
        daily_comments = random.sample(COMMENTS_POOL, 3)
        
        # Add random likes and comment counts
        for i, comment in enumerate(daily_comments):
            random.seed(day_of_year + i)
            comment['likes'] = random.randint(20, 100)
            comment['comments'] = random.randint(5, 25)
            comment['time'] = f"{random.randint(1, 12)} horas atrás"
            comment['avatar'] = f"https://api.dicebear.com/7.x/avataaars/svg?seed={comment['author']}"
        
        return daily_comments
    except Exception as e:
        print(f"Error fetching comments: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)