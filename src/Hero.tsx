import { Phone, CheckCircle2, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional CCTV, AV, Cabling & IT Field Services Across{' '}
            <span className="text-cyan-400">Orlando & Central Florida</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed">
            Reliable, fast, and expert low-voltage + tech installation for businesses and homes.
          </p>

          <p className="text-lg text-cyan-400 mb-10">
            Covering up to 200 miles from Orlando — and rapidly expanding nationwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#quote"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Free Quote (Instant Response)
            </a>
            <a
              href="tel:+1234567890"
              className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now (24/7 Available)
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4">
              <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Background-Checked</span>
            </div>
            <div className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4">
              <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4">
              <Users className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
