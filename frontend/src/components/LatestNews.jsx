import { NewsCard } from './NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const newsData = [
  {
    id: 1,
    title: 'Preparação Intensiva Para o Próximo Confronto',
    excerpt: 'Elenco treina forte durante a semana para encarar adversário direto na luta pela liderança.',
    category: 'Treinos',
    author: 'Vinicius Gomes',
    date: '15 Jan 2024',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
  },
  {
    id: 2,
    title: 'Entrevista Exclusiva com o Capitão do Time',
    excerpt: 'Em conversa com a imprensa, capitão fala sobre momento do time e expectativas para a temporada.',
    category: 'Entrevistas',
    author: 'Vinicius Gomes',
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

export const LatestNews = () => {
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
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todas
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button className="bg-primary text-primary-foreground hover:bg-primary-glow">
            Ver Todas as Notícias
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};