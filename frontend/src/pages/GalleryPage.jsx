import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const galleryImages = [
  {
    id: 1,
    url: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2i4sp7je_Screenshot%202025-10-30%2009.49.11.png',
    title: 'Elenco Quebrados FC',
    category: 'Time',
  },
  {
    id: 2,
    url: 'https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/ywpbppk3_CAMISA%20QUEBRADOS%20BLACK.png',
    title: 'Uniforme Oficial 2024',
    category: 'Uniforme',
  }
];

const categories = ['Todas', 'Time', 'Partidas', 'Torcida', 'Estádio', 'Uniforme', 'Conquistas'];

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'Todas'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Galeria de <span className="text-primary">Fotos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Momentos inesquecíveis do Quebrados FC
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground hover:bg-primary-glow'
                  : 'border-primary/30 text-foreground hover:bg-primary/10'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="bg-primary text-primary-foreground mb-2">
                    {image.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-secondary-foreground">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <div className="space-y-4">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div>
                  <Badge className="bg-primary text-primary-foreground mb-2">
                    {selectedImage.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground">{selectedImage.title}</h2>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};