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
    <section className="relative section-padding bg-gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-lime rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-brand-lime rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose InnERAL
          </h2>
          <p className="text-xl text-brand-lime" data-aos="fade-up" data-aos-delay="100">
            Excellence • Innovation • Reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-brand-lime/50 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="bg-brand-lime/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:glow-effect transition-all group-hover:scale-110">
                <reason.icon className="w-7 h-7 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-lime transition-colors">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-dark text-brand-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl hover:glow-effect"
          >
            Request a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
