import { MapPin, ArrowRight } from 'lucide-react';

const cities = [
  'Orlando', 'Kissimmee', 'Winter Park', 'Clermont', 'Daytona Beach',
  'Lakeland', 'Melbourne', 'Sanford', 'Tampa', 'Ocala',
  'Deltona', 'Altamonte Springs', 'Apopka', 'Oviedo', 'Winter Garden'
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            We Cover 200+ Miles Around Orlando
          </h2>
          <p className="text-xl text-gray-600">
            Serving all of Central Florida with professional tech installation services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold">Full Coverage Area</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mt-6 text-sm">
                ...and many more cities across Central Florida
              </p>
            </div>

            <div className="mt-6 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">New</span>
                Nationwide Expansion
              </h4>
              <p className="text-gray-700">
                We're expanding our IT field services nationwide for corporate clients.
                Contact us to discuss nationwide deployment capabilities.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 h-full flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <MapPin className="w-24 h-24 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Location Covered?</h3>
              <p className="text-gray-600 mb-6">
                Even if you don't see your city listed, we likely service your area.
              </p>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
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
