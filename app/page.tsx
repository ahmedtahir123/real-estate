import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSection from '@/components/AboutSection';
import QuickSearch from '@/components/QuickSearch';

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickSearch />
      <FeaturedProperties />
      <AboutSection />
    </div>
  );
}