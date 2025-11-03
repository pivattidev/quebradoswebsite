import { useState, useEffect } from 'react';
import { NewsCard } from './NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const mockNews = [
  {
    id: 'mock-1',
    title: 'Preparação Intensiva Para o Próximo Confronto',
    excerpt: 'Elenco treina forte durante a semana para encarar adversário direto na luta pela liderança.',
    category: 'Treinos',
    author: 'João Silva',
    date: '15 Jan 2024',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
  },
  {
    id: 'mock-2',
    title: 'Entrevista Exclusiva com o Capitão do Time',
    excerpt: 'Em conversa com a imprensa, capitão fala sobre momento do time e expectativas para a temporada.',
    category: 'Entrevistas',
    author: 'Maria Santos',
    date: '14 Jan 2024',
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800',
  },
  {
    id: 'mock-3',
    title: 'Jovem Promessa se Destaca nas Categorias de Base',
    excerpt: 'Atleta de apenas 17 anos impressiona comissão técnica e pode ganhar oportunidade no time principal.',
    category: 'Base',
    author: 'Pedro Costa',
    date: '13 Jan 2024',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
  },
];

export const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/news`);
      if (response.data && response.data.length > 0) {
        // Get up to 6 latest news
        setNewsData(response.data.slice(0, 6));
      } else {
        setNewsData(mockNews);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setNewsData(mockNews);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Últimas <span className="text-primary">Notícias</span>
            </h2>
            <p className="text-muted-foreground">Fique por dentro de tudo que acontece no clube</p>
          </div>
          <Link to="/noticias" className="hidden md:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Ver Todas
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        )}

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link to="/noticias">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-glow">
              Ver Todas as Notícias
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};