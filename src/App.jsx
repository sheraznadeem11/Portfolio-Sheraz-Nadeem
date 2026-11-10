import { useCallback, useEffect, useState } from 'react';
import AboutSection from './features/about/AboutSection.jsx';
import ContactSection from './features/contact/ContactSection.jsx';
import HomeSection from './features/home/HomeSection.jsx';
import ProcessSection from './features/process/ProcessSection.jsx';
import ProductsSection from './features/products/ProductsSection.jsx';
import ServicesSection from './features/services/ServicesSection.jsx';
import StatisticsSection from './features/statistics/StatisticsSection.jsx';
import TeamSection from './features/team/TeamSection.jsx';
import TestimonialsSection from './features/testimonials/TestimonialsSection.jsx';
import PageEffects from './components/effects/PageEffects.jsx';
import SiteFooter from './components/layout/SiteFooter.jsx';
import SiteHeader from './components/layout/SiteHeader.jsx';
import useCopyProtection from './hooks/useCopyProtection.js';
import useReducedMotion from './hooks/useReducedMotion.js';
import useScrollReveal from './hooks/useScrollReveal.js';

function App() {
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useCopyProtection();
  useScrollReveal(reducedMotion);

  useEffect(() => {
    document.title = 'Sheraz Nadeem | AI Expert & Entrepreneur';
  }, []);

  return (
    <div className="content-protected relative isolate min-h-screen overflow-x-hidden text-ink">
      <PageEffects
        loading={loading}
        onLoadingFinished={finishLoading}
        reducedMotion={reducedMotion}
      />
      <div className="relative z-[1]">
        <SiteHeader />
        <main id="top">
          <HomeSection />
          <StatisticsSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <ProductsSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
