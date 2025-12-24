import { Camera, Monitor, Users, Cable, Tv, ArrowRight } from 'lucide-react';

const projects = [
  {
    icon: Camera,
    title: 'Retail CCTV Upgrade',
    description: '32-camera 4K system with remote viewing for multi-location retail chain',
    tags: ['Security', 'Retail', 'IP Cameras']
  },
  {
    icon: Monitor,
    title: 'Restaurant Menu Board Installation',
    description: 'Digital menu board system with dynamic content management',
    tags: ['Digital Signage', 'Hospitality', 'Menu Boards']
  },
  {
    icon: Users,
    title: 'Office Conference Room AV Setup',
    description: 'Complete audio-visual integration for Fortune 500 conference facility',
    tags: ['AV Integration', 'Corporate', 'Conference']
  },
  {
    icon: Cable,
    title: 'Fiber Cabling in Commercial Building',
    description: 'Structured cabling and fiber optic backbone for 5-story office building',
    tags: ['Structured Cabling', 'Fiber Optic', 'Commercial']
  },
  {
    icon: Tv,
    title: 'Large TV Video-Wall Installation',
    description: '3x3 video wall for corporate lobby with centralized control',
    tags: ['Video Wall', 'Corporate', 'Displays']
  },
  {
    icon: Camera,
    title: 'Warehouse Security System',
    description: 'Comprehensive security with access control and monitoring',
    tags: ['Security', 'Industrial', 'Access Control']
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-cyan-400">
            Real installations from satisfied customers across Central Florida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="bg-cyan-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <project.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            See Full Portfolio
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
