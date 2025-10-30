import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const NewsCard = ({ news, variant = 'default' }) => {
  const isLarge = variant === 'large';

  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold flex flex-col h-full">
      {/* Image */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-72' : 'h-48'}`}>
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground hover:bg-primary-glow">
          {news.category}
        </Badge>
      </div>

      {/* Content */}
      <CardHeader>
        <h3
          className={`font-bold text-foreground group-hover:text-primary transition-colors ${
            isLarge ? 'text-2xl' : 'text-lg'
          }`}
        >
          {news.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm leading-relaxed">{news.excerpt}</p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-3 mt-auto">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{news.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{news.date}</span>
          </div>
        </div>
        <Link to={`/noticia/${news.id}`} className="w-full">
          <Button
            variant="ghost"
            className="w-full justify-between text-foreground hover:text-primary hover:bg-primary/10"
          >
            Ler Mais
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};