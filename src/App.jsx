import { useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedSolutions from './components/FeaturedSolutions';
import ServiceArea from './components/ServiceArea';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'CCTV, AV, Cabling & IT Services Orlando | Central Florida Tech Installation';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional CCTV installation, digital signage, TV mounting, AV integration, structured cabling, and IT field services across Orlando and Central Florida. Licensed, insured, 10+ years experience. Free quotes.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional CCTV installation, digital signage, TV mounting, AV integration, structured cabling, and IT field services across Orlando and Central Florida. Licensed, insured, 10+ years experience. Free quotes.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'CCTV installation Orlando, security cameras Central Florida, digital signage installation, TV mounting Orlando, structured cabling, AV integration, IT field services, commercial security systems, residential CCTV, video surveillance Orlando';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedSolutions />
      <ServiceArea />
      <Projects />
      <Reviews />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
