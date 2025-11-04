import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LastDancePage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Image */}
        <div className="relative mb-12 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/jiqoejm5_af050955-c7b0-47bc-8cab-bed4aa68389f%20%282%29.jpg"
            alt="The Last Dance"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-8 left-8 flex gap-3">
            <Badge className="bg-destructive text-destructive-foreground px-4 py-2 text-base">
              <Flame className="h-4 w-4 mr-2" />
              CONFRONTO DEFINITIVO
            </Badge>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            THE LAST <span className="text-primary">DANCE</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-6">
            O Confronto Final Entre Rivais Históricos
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="font-semibold">13 de Dezembro de 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-semibold">Estádio Antônio Soares de Oliveira</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-12 border-primary/30 shadow-gold">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              A Batalha que Definirá uma Era
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Em 13 de dezembro de 2025, o mundo do futebol testemunhará o confronto mais esperado
                da história recente: <strong className="text-primary">Quebrados FC vs Ricos FC</strong> - The Last Dance.
              </p>
              
              <p className="leading-relaxed">
                Esta não é apenas mais uma partida. É o capítulo final de uma rivalidade épica que
                dividiu torcidas, quebrou recordes e escreveu páginas inesquecíveis no livro do
                futebol brasileiro. Após anos de batalhas intensas, confrontos memoráveis e uma
                rivalidade que transcendeu o campo, chegou a hora do acerto de contas definitivo.
              </p>

              <p className="leading-relaxed">
                O Quebrados FC, com sua garra característica e espírito guerreiro, construiu uma
                trajetória vitoriosa contra o rival milionário. Cinco vitórias consecutivas nos
                últimos confrontos provaram que determinação e união valem mais que qualquer fortuna.
                Mas agora, no palco do Estádio Antônio Soares de Oliveira, sob as luzes do crepúsculo,
                a história será escrita pela última vez.
              </p>

              <p className="leading-relaxed">
                Este confronto marca o fim de uma era e o início de um novo capítulo. Seja qual for
                o resultado, uma coisa é certa: a paixão, a emoção e a intensidade desta rivalidade
                histórica permanecerão para sempre na memória de todos que amam o futebol.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mt-8 border-l-4 border-primary">
                <p className="text-foreground font-semibold text-xl italic">
                  "Não é sobre quanto dinheiro você tem. É sobre quanto coração você coloca em campo.
                  E nós, do Quebrados FC, sempre jogamos com o coração."
                </p>
                <p className="text-muted-foreground mt-2">- Matheus, Fundador do Quebrados FC</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/30 shadow-gold text-center">
            <CardContent className="p-8">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">5</h3>
              <p className="text-muted-foreground">Vitórias Consecutivas do Quebrados</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/30 shadow-gold text-center">
            <CardContent className="p-8">
              <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">18-6</h3>
              <p className="text-muted-foreground">Saldo de Gols nos Confrontos</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/30 shadow-gold text-center">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">∞</h3>
              <p className="text-muted-foreground">Uma Rivalidade Eterna</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-secondary to-secondary/80 border-primary/30 shadow-gold">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              Não Perca Este Momento Histórico
            </h3>
            <p className="text-secondary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
              Acompanhe todas as novidades, análises e cobertura especial do confronto mais
              esperado do ano. The Last Dance será inesquecível.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/noticias">
                <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold text-lg px-8 py-6">
                  Ver Cobertura Especial
                </Button>
              </Link>
              <Link to="/resultados">
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
                >
                  Histórico dos Confrontos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};