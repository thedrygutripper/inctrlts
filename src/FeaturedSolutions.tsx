import { Camera, Monitor, Cable, Volume2 } from 'lucide-react';

const solutions = [
  {
    icon: Camera,
    title: 'Security & Surveillance',
    items: [
      '4K cameras, IP systems, NVRs',
      'Smart alerts & remote access',
      'Home, retail, office & warehouse solutions',
      'Advanced motion detection & analytics'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Monitor,
    title: 'Digital Signage & Displays',
    items: [
      'Menu boards',
      'Interactive kiosks',
      'Large-format displays',
      'Video walls'
    ],
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Cable,
    title: 'Structured Cabling',
    items: [
      'CAT5e, CAT6, CAT6a',
      'Fiber optic installation & testing',
      'Rack mounting, patch panels, labeling',
      'Complete network infrastructure'
    ],
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Volume2,
    title: 'Audio Visual',
    items: [
      'Conference rooms',
      'Commercial speaker systems',
      'PA systems',
      'TV mounting & projector setups'
    ],
    color: 'from-sky-500 to-blue-500'
  }
];

export default function FeaturedSolutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${solution.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="bg-cyan-100 rounded-full p-1 mt-0.5">
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center">
              <Cable className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-900 text-lg">IT Field Services</h4>
              <p className="text-gray-600">On-site tech support • Nationwide dispatch • Device deployment • Troubleshooting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
