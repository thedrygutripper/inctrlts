import { Camera, Tv, Monitor, Cable, Volume2, Laptop, Wrench, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation & Remote Viewing',
    description: 'See Everything. Anytime. Anywhere. Professional CCTV installation with secure remote viewing — protect your business 24/7.'
  },
  {
    icon: Monitor,
    title: 'Digital Signage Installation',
    description: 'Turn Screens Into Sales. High-impact digital signage solutions that attract attention and drive engagement.'
  },
  {
    icon: Cable,
    title: 'Structured Cabling',
    description: 'The Backbone of Your Technology. Clean, reliable, future-proof structured cabling for data, voice, and security systems.'
  },
  {
    icon: Volume2,
    title: 'Audio-Visual Integration',
    description: 'Technology That Just Works. Seamless audio-visual systems for offices, conference rooms, and commercial spaces.'
  },
  {
    icon: Laptop,
    title: 'IT Field Engineers',
    description: 'Expert Hands. On-Site. On-Demand. Certified IT field engineers ready to deploy, troubleshoot, and support your infrastructure.'
  },
  {
    icon: Tv,
    title: 'TV & Display Installation',
    description: 'Professional mounting, cable management, and perfect placement for TVs, projectors, and display systems.'
  },
  {
    icon: Wrench,
    title: 'Troubleshooting & Repairs',
    description: 'Fast diagnostics and expert repairs for all your technology systems — uptime guaranteed.'
  }
];

export default function Services() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-lime opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-lime opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16 pb-12 border-b-4 border-brand-lime/30" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-xl text-brand-charcoal-lighter">
            Complete technology solutions for installation, integration & support
          </p>
        </div>

        <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl font-bold text-brand-charcoal mb-4">
            Professional CCTV, AV, Cabling & IT Field Services
          </h3>
          <p className="text-lg text-brand-charcoal-lighter max-w-3xl mb-3">
            Reliable, fast, and expert low-voltage + tech installation for businesses and homes.
          </p>
          <p className="text-lg text-brand-charcoal-lighter max-w-4xl mb-6">
            Covering up to 200 miles from Orlando — and rapidly expanding nationwide.
          </p>
          <div className="flex flex-wrap gap-6 text-brand-charcoal text-sm md:text-base" data-aos="zoom-in" data-aos-delay="200">
            <span className="flex items-center gap-2">
              <span className="text-brand-lime font-bold">✓</span> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-lime font-bold">✓</span> Background-Checked
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-lime font-bold">✓</span> 10+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-lime font-bold">✓</span> 5-Star Rated
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={`${(index % 3) * 100}`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-lime to-brand-lime-dark opacity-0 group-hover:opacity-20 rounded-2xl blur transition duration-300 pointer-events-none"></div>
              <div className="relative bg-white border-2 border-brand-gray-lighter group-hover:border-brand-lime rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-lime opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity"></div>

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-brand-lime to-brand-lime-dark shadow-lg group-hover:shadow-2xl group-hover:glow-effect transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-lime transition-colors leading-tight pt-1">
                    {service.title}
                  </h3>
                </div>

                <p className="text-brand-charcoal-lighter leading-relaxed text-sm mb-4 relative z-10">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lime via-brand-lime-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-gray-lighter rounded-2xl p-8 md:p-12 text-center" data-aos="zoom-in" data-aos-delay="700">
          <p className="text-lg text-brand-charcoal mb-6">Ready to upgrade your technology infrastructure?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center justify-center gap-2 group hover:shadow-lg hover:glow-effect transition-all">
              Get a Free Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-white rounded-lg font-semibold transition-all duration-300">
              Call Now (24/7 Available)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
