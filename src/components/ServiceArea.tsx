import { MapPin, ArrowRight } from 'lucide-react';

const cities = [
  'Orlando', 'Kissimmee', 'Winter Park', 'Clermont', 'Daytona Beach',
  'Lakeland', 'Melbourne', 'Sanford', 'Tampa', 'Ocala',
  'Deltona', 'Altamonte Springs', 'Apopka', 'Oviedo', 'Winter Garden'
];

export default function ServiceArea() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-lime opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-lime opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal mb-4">
            We Cover 200+ Miles Around Orlando
          </h2>
          <p className="text-xl text-brand-charcoal-lighter" data-aos="fade-up" data-aos-delay="100">
            Serving all of Central Florida with professional tech installation services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-gradient-dark rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:glow-effect transition-all">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-brand-lime float-animation" />
                <h3 className="text-2xl font-bold">Full Coverage Area</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300 hover:text-brand-lime transition-colors hover:translate-x-1 cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse"></div>
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mt-6 text-sm">
                ...and many more cities across Central Florida
              </p>
            </div>

            <div className="mt-6 bg-brand-lime/10 border border-brand-lime/30 rounded-xl p-6 hover:bg-brand-lime/20 transition-colors" data-aos="zoom-in" data-aos-delay="200">
              <h4 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                <span className="bg-brand-lime text-brand-charcoal px-3 py-1 rounded-full text-sm animate-pulse">New</span>
                Nationwide Expansion
              </h4>
              <p className="text-brand-charcoal-lighter">
                We're expanding our IT field services nationwide for corporate clients.
                Contact us to discuss nationwide deployment capabilities.
              </p>
            </div>
          </div>

          <div className="bg-brand-gray-lighter rounded-2xl p-8 h-full flex items-center justify-center min-h-[400px] hover:shadow-lg transition-all" data-aos="fade-left" data-aos-duration="1000">
            <div className="text-center">
              <MapPin className="w-24 h-24 text-brand-lime mx-auto mb-4 float-animation" />
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Your Location Covered?</h3>
              <p className="text-brand-charcoal-lighter mb-6">
                Even if you don't see your city listed, we likely service your area.
              </p>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-dark text-brand-charcoal px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Check Availability
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
