import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSection from '@/components/AboutSection';
import QuickSearch from '@/components/QuickSearch';
import FeaturedVideos from '@/components/FeaturedVideos';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <QuickSearch /> */}
      <FeaturedProperties />
      <FeaturedVideos />
      <AboutSection />
    </>
  );
}
