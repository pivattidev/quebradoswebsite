import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const jerseys = [
  {
    id: 1,
    name: 'Camisa Quebrados FC - Versão Torcedor',
    price: 67.00,
    image: 'https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/ywpbppk3_CAMISA%20QUEBRADOS%20BLACK.png',
    version: 'Torcedor',
    features: [
      'Material 100% Poliéster',
      'Tecnologia Dry-Fit',
      'Logo bordado',
      'Tamanhos: P, M, G, GG',
    ],
  },
  {
    id: 2,
    name: 'Camisa Quebrados FC - Versão Jogador',
    price: 199.90,
    image: 'https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/ywpbppk3_CAMISA%20QUEBRADOS%20BLACK.png',
    version: 'Jogador',
    features: [
      'Material Premium',
      'Tecnologia Anti-Transpirante',
      'Corte anatômico profissional',
      'Logo e detalhes premium',
      'Tamanhos: P, M, G, GG',
    ],
    popular: true,
  },
];

export const StorePage = () => {
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const handleAddToCart = (jersey) => {
    toast.success(`${jersey.name} adicionado ao carrinho!`);
  };

  const applyCoupon = () => {
    setAppliedCoupon(true);
    toast.success('Cupom QUEBRADOS10 aplicado! 10% de desconto em todos os produtos!');
  };

  const calculatePrice = (price) => {
    if (appliedCoupon) {
      return price * 0.9;
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Loja <span className="text-primary">Oficial</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vista as cores do Quebrados FC com orgulho!
          </p>
        </div>

        {/* Coupon Banner */}
        <Card className="mb-12 bg-gradient-to-br from-primary to-primary-glow border-primary shadow-gold">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">
              🎉 Desconto Especial para Newsletter!
            </h3>
            <p className="text-primary-foreground/90 mb-4">
              Use o cupom <strong className="text-2xl">QUEBRADOS10</strong> e ganhe 10% de desconto
            </p>
            {!appliedCoupon && (
              <Button
                onClick={applyCoupon}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Aplicar Cupom
              </Button>
            )}
            {appliedCoupon && (
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-base">
                <Check className="h-4 w-4 mr-2" />
                Cupom Aplicado!
              </Badge>
            )}
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {jerseys.map((jersey) => (
            <Card
              key={jersey.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-gold ${
                jersey.popular ? 'border-primary/50 relative' : 'border-border'
              }`}
            >
              {jersey.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2">
                    Mais Vendido
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative h-96 bg-gradient-to-br from-secondary to-secondary/80 p-8 flex items-center justify-center">
                <img
                  src={jersey.image}
                  alt={jersey.name}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -top-4 -right-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <CardContent className="p-8">
                <Badge className="bg-primary/20 text-primary mb-3">{jersey.version}</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">{jersey.name}</h3>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {jersey.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  {appliedCoupon && (
                    <p className="text-sm text-muted-foreground line-through mb-1">
                      R$ {jersey.price.toFixed(2)}
                    </p>
                  )}
                  <p className="text-4xl font-bold text-primary">
                    R$ {calculatePrice(jersey.price).toFixed(2)}
                  </p>
                  {appliedCoupon && (
                    <Badge variant="outline" className="border-primary text-primary mt-2">
                      Economize R$ {(jersey.price * 0.1).toFixed(2)}
                    </Badge>
                  )}
                </div>

                {/* CTA */}
                <Button
                  onClick={() => handleAddToCart(jersey)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold text-lg py-6"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-12 max-w-4xl mx-auto bg-muted/30">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Informações de Entrega</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Frete</h4>
                <p>Frete grátis para compras acima de R$ 150,00</p>
                <p>Prazo de entrega: 7 a 15 dias úteis</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Trocas e Devoluções</h4>
                <p>30 dias para trocas</p>
                <p>Produto deve estar sem uso e com etiqueta</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};