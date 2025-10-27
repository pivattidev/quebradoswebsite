import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const TeamShowcase = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="bg-primary text-primary-foreground mb-4">Identidade do Clube</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Use o <span className="text-primary">Manto Sagrado</span> com Orgulho
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A camisa do Quebrados FC representa mais do que um uniforme. É um símbolo de garra,
              determinação e paixão que une todos os torcedores em torno de um único objetivo: a vitória.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">
                  Design moderno em preto e dourado, cores oficiais do clube
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">
                  Tecnologia de alta performance para máximo conforto
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">
                  Edição 2024 com o emblema oficial do clube
                </span>
              </li>
            </ul>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold">
              Conheça a Loja Oficial
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Right - Jersey Showcase */}
          <div className="relative">
            <Card className="border-primary/30 shadow-gold overflow-hidden bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8 md:p-12">
                <div className="relative">
                  <img
                    src="https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/ywpbppk3_CAMISA%20QUEBRADOS%20BLACK.png"
                    alt="Camisa Quebrados FC"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
                </div>
              </CardContent>
            </Card>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 z-20">
              <Card className="bg-primary border-primary shadow-gold">
                <CardContent className="p-4">
                  <p className="text-primary-foreground font-bold text-sm">Temporada</p>
                  <p className="text-primary-foreground text-2xl font-bold">2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};