import { useState, useEffect } from 'react';
import { NewsCard } from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const categories = ['Todas', 'Resultados', 'Transferências', 'Treinos', 'Entrevistas', 'Base', 'Clube', 'Saúde', 'Social', 'Torcida'];

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Todas') {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, news]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/news`);
      setNews(response.data);
      setFilteredNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
      // Fallback to mock data if API fails
      setNews(mockNews);
      setFilteredNews(mockNews);
    } finally {
      setLoading(false);
    }
  };

  const mockNews = [
    {
      id: 1,
      title: 'Preparação Intensiva Para o Próximo Confronto',
      excerpt: 'Elenco treina forte durante a semana para encarar adversário direto na luta pela liderança.',
      category: 'Treinos',
      author: 'João Silva',
      date: '15 Jan 2024',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
    },
    {
      id: 2,
      title: 'Entrevista Exclusiva com o Capitão do Time',
      excerpt: 'Em conversa com a imprensa, capitão fala sobre momento do time e expectativas para a temporada.',
      category: 'Entrevistas',
      author: 'Maria Santos',
      date: '14 Jan 2024',
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800',
    },
    {
      id: 3,
      title: 'Jovem Promessa se Destaca nas Categorias de Base',
      excerpt: 'Atleta de apenas 17 anos impressiona comissão técnica e pode ganhar oportunidade no time principal.',
      category: 'Base',
      author: 'Pedro Costa',
      date: '13 Jan 2024',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    },
    {
      id: 4,
      title: 'Nova Parceria Traz Benefícios aos Torcedores',
      excerpt: 'Quebrados FC anuncia acordo que garante descontos em produtos e serviços para sócios.',
      category: 'Clube',
      author: 'Ana Lima',
      date: '12 Jan 2024',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
    },
    {
      id: 5,
      title: 'Departamento Médico Atualiza Situação dos Lesionados',
      excerpt: 'Dois jogadores importantes estão próximos de retornar aos treinos com o grupo.',
      category: 'Saúde',
      author: 'Carlos Oliveira',
      date: '11 Jan 2024',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    },
    {
      id: 6,
      title: 'Ação Social Leva Alegria a Crianças da Comunidade',
      excerpt: 'Jogadores visitam instituto e distribuem materiais esportivos para jovens carentes.',
      category: 'Social',
      author: 'Fernanda Rocha',
      date: '10 Jan 2024',
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Todas as <span className="text-primary">Notícias</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Acompanhe todas as novidades do Quebrados FC
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground hover:bg-primary-glow'
                  : 'border-primary/30 text-foreground hover:bg-primary/10'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Nenhuma notícia encontrada nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};