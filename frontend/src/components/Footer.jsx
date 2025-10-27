import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const quickLinks = [
    { name: 'Sobre o Clube', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
    { name: 'Elenco', path: '/elenco' },
    { name: 'Calendário', path: '/calendario' },
  ];

  const newsCategories = [
    { name: 'Últimas Notícias', path: '/noticias' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Entrevistas', path: '/entrevistas' },
    { name: 'Galeria', path: '/galeria' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/gge94svi_logo%20quebrados.png"
                alt="Quebrados FC"
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">QUEBRADOS FC</h3>
                <p className="text-xs text-muted-foreground uppercase">News</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Fique por dentro de todas as notícias do Quebrados FC. O portal onde cada torcedor pode
              compartilhar sua paixão pelo clube.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:bg-primary hover:border-primary transition-all"
                  >
                    <social.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Notícias</h4>
            <ul className="space-y-2">
              {newsCategories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba as últimas notícias direto no seu email.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Seu email"
                className="bg-background/5 border-primary/30 focus:border-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary-glow w-full">
                <Mail className="h-4 w-4 mr-2" />
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Quebrados FC News. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary">
                Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary">
                Termos
              </Link>
              <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};