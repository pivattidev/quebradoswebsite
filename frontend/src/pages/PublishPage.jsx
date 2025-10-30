import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImagePlus, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const categories = [
  'Resultados',
  'Transferências',
  'Treinos',
  'Entrevistas',
  'Base',
  'Clube',
  'Saúde',
  'Social',
  'Torcida',
];

export const PublishPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newsData = {
        ...formData,
        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
        image: formData.image || 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
      };

      await axios.post(`${BACKEND_URL}/api/news`, newsData);
      toast.success('Notícia publicada com sucesso!');
      setTimeout(() => navigate('/noticias'), 1500);
    } catch (error) {
      console.error('Error publishing news:', error);
      toast.error('Erro ao publicar notícia. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Publicar <span className="text-primary">Notícia</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Compartilhe novidades sobre o Quebrados FC com toda a torcida
          </p>
        </div>

        {/* Form */}
        <Card className="border-primary/30 shadow-gold">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-foreground">
                  Título da Notícia *
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Digite um título chamativo..."
                  className="mt-2 border-border focus:border-primary"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Category & Author */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category" className="text-foreground">
                    Categoria *
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    required
                  >
                    <SelectTrigger className="mt-2 border-border focus:border-primary">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="author" className="text-foreground">
                    Autor *
                  </Label>
                  <Input
                    id="author"
                    type="text"
                    placeholder="Seu nome"
                    className="mt-2 border-border focus:border-primary"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt" className="text-foreground">
                  Resumo *
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Escreva um breve resumo da notícia (máximo 200 caracteres)..."
                  className="mt-2 border-border focus:border-primary"
                  maxLength={200}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.excerpt.length}/200 caracteres
                </p>
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content" className="text-foreground">
                  Conteúdo Completo *
                </Label>
                <Textarea
                  id="content"
                  placeholder="Escreva o conteúdo completo da notícia..."
                  className="mt-2 border-border focus:border-primary min-h-[300px]"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <Label htmlFor="image" className="text-foreground">
                  Imagem de Destaque
                </Label>
                <div className="mt-2">
                  <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <ImagePlus className="h-12 w-12 text-muted-foreground mb-3" />
                        <p className="text-sm text-muted-foreground">Clique para adicionar uma imagem</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG ou WEBP (máx. 5MB)
                        </p>
                      </div>
                    )}
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-border hover:bg-muted"
                  onClick={() => navigate('/noticias')}
                  disabled={loading}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Publicando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Publicar Notícia
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};