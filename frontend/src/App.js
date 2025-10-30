import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { NewsPage } from '@/pages/NewsPage';
import { NewsDetailPage } from '@/pages/NewsDetailPage';
import { RosterPage } from '@/pages/RosterPage';
import { ResultsPage } from '@/pages/ResultsPage';
import { TitlesPage } from '@/pages/TitlesPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { CalendarPage } from '@/pages/CalendarPage';
import { PublishPage } from '@/pages/PublishPage';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/noticia/:id" element={<NewsDetailPage />} />
            <Route path="/elenco" element={<RosterPage />} />
            <Route path="/resultados" element={<ResultsPage />} />
            <Route path="/titulos" element={<TitlesPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/calendario" element={<CalendarPage />} />
            <Route path="/publicar" element={<PublishPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;