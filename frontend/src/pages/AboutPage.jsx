import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Heart, TrendingUp } from 'lucide-react';

const founders = [
  { name: 'Matheus', role: 'Fundador' },
  { name: 'Daido', role: 'Fundador' },
  { name: 'Rafael', role: 'Fundador' },
];

const members = [
  { name: 'Zuiani', role: 'Membro Sócio' },
  { name: 'Kauê', role: 'Membro Sócio' },
  { name: 'Pivatti', role: 'Membro Sócio' },
  { name: 'Eros', role: 'Membro Sócio' },
];

const influencers = [
  { name: 'Gustavão', role: 'Membro Influenciador' },
  { name: 'Vinicius Gomes', role: 'Membro Influenciador' },
  { name: 'Vinissão', role: 'Membro Influenciador' },
];

const publicist = { name: 'Kevin', role: 'Membro Publicitário' };

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Sobre o <span className="text-primary">Quebrados FC</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça a história e as pessoas que fazem parte do nosso clube
          </p>
        </div>

        {/* Club Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img
              src="https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/gge94svi_logo%20quebrados.png"
              alt="Quebrados FC"
              className="h-48 w-48 drop-shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -right-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* History Section */}
        <Card className="mb-12 border-primary/30 shadow-gold">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Nossa História</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fundado em julho de 2024, o Quebrados FC nasceu da paixão e determinação de três
              amigos: Matheus, Daido e Rafael. Unidos pelo amor ao futebol e o desejo de criar algo
              especial, eles estabeleceram as bases de um clube que rapidamente se tornaria
              referência no cenário esportivo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Logo após sua criação, o clube recebeu o apoio fundamental dos membros sócios Zuiani,
              Kauê, Pivatti e Eros, que contribuíram significativamente para o crescimento e
              estruturação do Quebrados FC. A força da torcida ganhou ainda mais expressão com a
              participação dos membros influenciadores Gustavão, Vinicius Gomes e Vinição, que
              ajudaram a ampliar o alcance e a visibilidade do clube.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Completando a estrutura organizacional, Kevin assumiu o papel de membro publicitário,
              responsável por gerenciar a imagem e comunicação do clube. Em apenas alguns meses de
              existência, o Quebrados FC já conquistou a histórica Divisão Elite em 2024,
              demonstrando que determinação, trabalho em equipe e paixão são ingredientes
              fundamentais para o sucesso.
            </p>
          </CardContent>
        </Card>

        {/* Team Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Founders */}
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Fundadores</h3>
              </div>
              <div className="space-y-4">
                {founders.map((founder, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <span className="text-lg font-semibold text-foreground">{founder.name}</span>
                    <Badge className="bg-primary text-primary-foreground">{founder.role}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Members */}
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Membros Sócios</h3>
              </div>
              <div className="space-y-4">
                {members.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <span className="text-lg font-semibold text-foreground">{member.name}</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {member.role}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Influencers */}
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Influenciadores</h3>
              </div>
              <div className="space-y-4">
                {influencers.map((influencer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <span className="text-lg font-semibold text-foreground">{influencer.name}</span>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {influencer.role}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publicist */}
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Comunicação</h3>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <span className="text-lg font-semibold text-foreground">{publicist.name}</span>
                <br />
                <Badge variant="outline" className="border-primary/50 text-primary mt-2">
                  {publicist.role}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card className="bg-gradient-to-br from-secondary to-secondary/80 border-primary/30 shadow-gold">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-6">Nossos Valores</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Determinação</h4>
                <p className="text-secondary-foreground/80">
                  Trabalhamos incansavelmente para alcançar nossos objetivos
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">União</h4>
                <p className="text-secondary-foreground/80">
                  Juntos somos mais fortes e conquistamos grandes vitórias
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Paixão</h4>
                <p className="text-secondary-foreground/80">
                  O amor pelo futebol move cada ação do nosso clube
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};