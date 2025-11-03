import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Share2, Loader2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

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

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(`${BACKEND_URL}/api/news/${id}`);
      toast.success('Notícia excluída com sucesso!');
      navigate('/noticias');
    } catch (error) {
      console.error('Error deleting news:', error);
      toast.error('Erro ao excluir notícia');
    } finally {
      setDeleting(false);
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
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-primary/10"
            onClick={() => navigate('/noticias')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Notícias
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Excluir
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. A notícia será permanentemente excluída do
                  sistema.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  disabled={deleting}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {deleting ? 'Excluindo...' : 'Excluir Notícia'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Article */}
        <article>
          {/* Header */}
          <div className="mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4 text-sm px-4 py-1">
              {news.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{news.author}</p>
                    <div className="flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{news.date}</span>
                    </div>
                  </div>
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
          <Card className="mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
            <CardContent className="p-8">
              <p className="text-xl text-foreground leading-relaxed font-semibold">
                {news.excerpt}
              </p>
            </CardContent>
          </Card>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap space-y-4">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary/30 text-primary">
                Quebrados FC
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                {news.category}
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                Futebol
              </Badge>
            </div>
          </div>

          {/* Share Section */}
          <Card className="bg-gradient-to-br from-secondary to-secondary/80 border-primary/30 shadow-gold">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Gostou desta notícia?
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Compartilhe com outros torcedores do Quebrados FC!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleShare}
                  className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar Notícia
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/noticias')}
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  Ver Mais Notícias
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
};