import { Camera, Tv, Monitor, Cable, Volume2, Laptop, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation & Remote Viewing Setup',
    description: '4K cameras, IP systems, and secure remote access'
  },
  {
    icon: Tv,
    title: 'Commercial & Residential TV Installation',
    description: 'Professional mounting, hiding cables, perfect placement'
  },
  {
    icon: Monitor,
    title: 'Digital Signage Installation',
    description: 'Menu boards, video walls, kiosks, and interactive displays'
  },
  {
    icon: Cable,
    title: 'Structured Cabling',
    description: 'CAT6, Fiber, Data Runs, and complete network infrastructure'
  },
  {
    icon: Volume2,
    title: 'Audio-Visual Integration',
    description: 'Conference rooms, speakers, PA systems, and sound solutions'
  },
  {
    icon: Laptop,
    title: 'IT Field Engineers',
    description: 'Nationwide dispatch-ready tech support and deployment'
  },
  {
    icon: Wrench,
    title: 'Troubleshooting, Repairs & Upgrades',
    description: 'Fast diagnostics and expert repairs for all systems'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Your All-In-One Tech Installation Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Most Complete Installation & Field Service Team in Central Florida
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto">
            Unlike most competitors that only offer CCTV or only do AV, we provide{' '}
            <span className="font-semibold text-cyan-600">everything under one roof</span> — saving you time, money, and headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
