import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const featuredNews = [
  {
    id: 1,
    title: 'Quebrados FC Conquista Vitória Histórica no Clássico Local',
    excerpt: 'Em partida emocionante, o Quebrados FC venceu o rival por 3 a 1 e lidera o campeonato com autoridade.',
    category: 'Resultados',
    date: '15 Jan 2024',
    image: 'https://images.unsplash.com/photo-1657957746418-6a38df9e1ea7',
    trending: true,
  },
  {
    id: 2,
    title: 'Novo Reforço: Atacante Revelação Assina Contrato de 3 Anos',
    excerpt: 'Quebrados FC anuncia a contratação de um dos maiores talentos da temporada para reforçar o ataque.',
    category: 'Transferências',
    date: '14 Jan 2024',
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9',
    trending: true,
  },
  {
    id: 3,
    title: 'Estádio Lotado: Torcida Bate Recorde de Público',
    excerpt: 'Mais de 15 mil torcedores compareceram ao estádio para apoiar o Quebrados FC na última partida.',
    category: 'Torcida',
    date: '13 Jan 2024',
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7',
    trending: false,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const currentNews = featuredNews[currentSlide];

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {featuredNews.map((news, index) => (
          <div
            key={news.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end pb-20">
        <div className="w-full max-w-4xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary text-primary-foreground hover:bg-primary-glow font-semibold px-4 py-1">
              {currentNews.category}
            </Badge>
            {currentNews.trending && (
              <Badge variant="outline" className="border-primary text-primary">
                <TrendingUp className="h-3 w-3 mr-1" />
                Em Alta
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4 leading-tight">
            {currentNews.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-secondary-foreground/90 mb-6 max-w-2xl">
            {currentNews.excerpt}
          </p>

          {/* Meta & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-secondary-foreground/80">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{currentNews.date}</span>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold px-8">
              Ler Notícia Completa
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-4 md:right-8 flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="bg-secondary/80 border-primary/30 hover:bg-primary hover:border-primary backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dots */}
        <div className="flex gap-2">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-secondary-foreground/40'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="bg-secondary/80 border-primary/30 hover:bg-primary hover:border-primary backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};