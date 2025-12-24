import { Clock, MapPin, Building2, Sparkles, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'Same-day and next-day service available for urgent needs'
  },
  {
    icon: MapPin,
    title: 'Cover 200-Mile Radius',
    description: 'Orlando, Tampa, Daytona, Lakeland, Melbourne & more'
  },
  {
    icon: Building2,
    title: 'Enterprise & Small Business Experts',
    description: 'Trusted by Fortune 500s and local businesses alike'
  },
  {
    icon: Sparkles,
    title: 'Clean, Professional Installations',
    description: 'Attention to detail that exceeds industry standards'
  },
  {
    icon: UserCheck,
    title: 'No Subcontractors',
    description: 'Only trained, background-checked technicians'
  },
  {
    icon: ShieldCheck,
    title: 'Warranty on All Labor & Equipment',
    description: 'Guaranteed workmanship and quality parts'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Customers Choose Us Over Everyone Else
          </h2>
          <p className="text-xl text-cyan-400">
            Better Technology • Better Installations • Better Support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="bg-cyan-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
