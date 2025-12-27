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
    <section className="relative section-padding bg-brand-gray-lighter overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-lime rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-lime rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center gap-1 mb-4" data-aos="zoom-in" data-aos-delay="100">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-brand-lime text-brand-lime" />
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-brand-charcoal-lighter" data-aos="fade-up" data-aos-delay="200">
            Trusted by hundreds of businesses and homeowners across Central Florida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <Quote className="w-10 h-10 text-brand-lime/20 absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-lime text-brand-lime" />
                ))}
              </div>
              <p className="text-brand-charcoal mb-4 leading-relaxed italic group-hover:text-brand-lime transition-colors">
                "{review.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-brand-charcoal group-hover:text-brand-lime transition-colors">{review.name}</p>
                <p className="text-sm text-brand-charcoal-lighter">{review.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 text-brand-lime hover:text-brand-lime-dark font-semibold text-lg group"
          >
            See All Reviews
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-12 bg-gradient-lime rounded-2xl p-8 text-white text-center" data-aos="zoom-in" data-aos-delay="700">
          <h3 className="text-2xl font-bold mb-2">Join Our Satisfied Customers</h3>
          <p className="text-lg mb-6">Experience the difference professional installation makes</p>
          <a
            href="#quote"
            className="inline-block bg-white text-brand-lime px-8 py-3 rounded-lg font-semibold hover:bg-brand-gray-lighter transition-all hover:shadow-lg"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}
