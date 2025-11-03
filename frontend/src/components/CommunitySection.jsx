import { useState, useEffect } from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const CommunitySection = () => {
  const [communityPosts, setCommunityPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDailyComments();
  }, []);

  const fetchDailyComments = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/comments/daily`);
      setCommunityPosts(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
      // Fallback to default comments if API fails
      setCommunityPosts([
        {
          author: 'Carlos Mendes',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
          time: '2 horas atrás',
          content: 'Que jogo incrível! O Quebrados mostrou muita raça hoje. Esse time tem tudo para conquistar o título! 🏆⚽',
          likes: 45,
          comments: 12,
          category: 'Opinião',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Voz da <span className="text-primary">Torcida</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O Quebrados FC News é feito pela torcida, para a torcida. Compartilhe sua opinião e
            faça parte da nossa comunidade.
          </p>
        </div>

        {/* Community Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {communityPosts.map((post, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{post.content}</p>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Heart className="h-4 w-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-secondary to-secondary/80 border-primary/30 shadow-gold inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-3">
                Faça Parte da Nossa Comunidade
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Publique notícias, compartilhe sua opinião e conecte-se com outros torcedores
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold">
                Publicar Minha Notícia
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};