import SiteHeader from '@/components/SiteHeader';
import HeroSlideshow from '@/components/HeroSlideshow';
import AboutSection from '@/components/sections/AboutSection';
import BusinessSection from '@/components/sections/BusinessSection';
import CollaborationsSection from '@/components/sections/CollaborationsSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-ivory-100">
      <SiteHeader />
      <main>
        <HeroSlideshow />
        <AboutSection />
        <BusinessSection />
        <CollaborationsSection />
        <MediaSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
