import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { LatestNews } from '@/components/LatestNews';
import { TeamShowcase } from '@/components/TeamShowcase';
import { CommunitySection } from '@/components/CommunitySection';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSection />
      <LatestNews />
      <TeamShowcase />
      <CommunitySection />
    </div>
  );
};