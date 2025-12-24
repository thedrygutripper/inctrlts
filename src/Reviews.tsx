import { Star, Quote, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: 'Michael Thompson',
    company: 'Thompson Retail Group',
    text: 'Outstanding service from start to finish. They installed a complete security system across our three locations in just two days. The quality of work and attention to detail exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Sarah Martinez',
    company: 'Downtown Bistro',
    text: 'Professional, fast, and extremely knowledgeable. Our digital menu boards look amazing and the installation was completed without disrupting our business hours. Highly recommend!',
    rating: 5
  },
  {
    name: 'David Chen',
    company: 'Central Florida Tech',
    text: 'We needed structured cabling for our new office building. The team was efficient, clean, and the documentation they provided was excellent. Best cabling job we\'ve seen.',
    rating: 5
  },
  {
    name: 'Jennifer Rodriguez',
    company: 'Orlando Medical Center',
    text: 'Reliable and trustworthy team. They handled our AV conference room setup with professionalism. Everything works perfectly and their support has been outstanding.',
    rating: 5
  },
  {
    name: 'Robert Williams',
    company: 'Williams Manufacturing',
    text: 'After trying two other companies that couldn\'t deliver, these guys came in and got it done right the first time. Their technicians are top-notch and know what they\'re doing.',
    rating: 5
  },
  {
    name: 'Lisa Anderson',
    company: 'Homeowner',
    text: 'Installed cameras and TV mounting in our home. Clean installation, no mess, and they explained everything clearly. Worth every penny for the peace of mind.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by hundreds of businesses and homeowners across Central Florida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative"
            >
              <Quote className="w-10 h-10 text-cyan-200 absolute top-4 right-4 opacity-50" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg group"
          >
            See All Reviews
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Join Our Satisfied Customers</h3>
          <p className="text-lg mb-6">Experience the difference professional installation makes</p>
          <a
            href="#quote"
            className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}
