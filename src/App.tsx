import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSlider from './components/HeroSlider';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out-cubic'
    });

    document.title = 'InnERAL Technology Services - Innovation & Excellence';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'InnERAL Technology Services delivers cutting-edge technology solutions with innovation and excellence. Transform your business today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'InnERAL Technology Services delivers cutting-edge technology solutions with innovation and excellence. Transform your business today.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'technology services, innovation, software solutions, IT services, digital transformation, technology consulting';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSlider />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <Projects />
      <Reviews />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
