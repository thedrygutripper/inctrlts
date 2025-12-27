import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'See Everything. Anytime. Anywhere.',
    subtitle: 'Professional CCTV installation with secure remote viewing — protect your business 24/7.',
    cta: 'Get a Free Security Assessment'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Turn Screens Into Sales.',
    subtitle: 'High-impact digital signage solutions that attract attention and drive engagement.',
    cta: 'Upgrade Your Displays'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'The Backbone of Your Technology.',
    subtitle: 'Clean, reliable, future-proof structured cabling for data, voice, and security systems.',
    cta: 'Build It Right the First Time'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Expert Hands. On-Site. On-Demand.',
    subtitle: 'Certified IT field engineers ready to deploy, troubleshoot, and support your infrastructure.',
    cta: 'Request IT Support'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrent(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-12 overflow-hidden">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
            {slides[current].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
            {slides[current].subtitle}
          </p>
          <button className="btn-primary text-lg hover:shadow-lg hover:glow-effect transition-all animate-fade-in-up animation-delay-400">
            {slides[current].cta}
          </button>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-brand-lime w-8'
                : 'bg-white/50 w-3 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        <span className="text-white text-lg font-semibold">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
