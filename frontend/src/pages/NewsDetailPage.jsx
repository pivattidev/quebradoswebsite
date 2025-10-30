import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Share2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/news/${id}`);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
      toast.error('Notícia não encontrada');
      navigate('/noticias');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copiado para a área de transferência!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!news) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 text-primary hover:text-primary hover:bg-primary/10"
          onClick={() => navigate('/noticias')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Notícias
        </Button>

        {/* Article */}
        <article>
          {/* Header */}
          <div className="mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4">{news.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{news.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{news.date}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <Card className="mb-8 overflow-hidden border-primary/30 shadow-gold">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </Card>

          {/* Excerpt */}
          <Card className="mb-8 bg-muted/30 border-primary/20">
            <CardContent className="p-6">
              <p className="text-lg text-foreground leading-relaxed font-medium">{news.excerpt}</p>
            </CardContent>
          </Card>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {news.content}
            </div>
          </div>

          {/* Share Section */}
          <Card className="mt-12 bg-gradient-to-br from-secondary to-secondary/80 border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Gostou desta notícia?
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Compartilhe com outros torcedores do Quebrados FC!
              </p>
              <Button
                onClick={handleShare}
                className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar Notícia
              </Button>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
};