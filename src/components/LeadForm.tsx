import { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Upload, Send } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-lime opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-brand-lime opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal mb-6">
              Get a Free Quote in Minutes
            </h2>
            <p className="text-xl text-brand-charcoal-lighter mb-8">
              Tell us about your project and we'll get back to you with a detailed quote. No obligation, no pressure.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                <div className="bg-brand-lime/20 rounded-lg p-3 group-hover:glow-effect transition-all group-hover:scale-110">
                  <Phone className="w-6 h-6 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal mb-1 group-hover:text-brand-lime transition-colors">Instant Response</h3>
                  <p className="text-brand-charcoal-lighter">Most quotes delivered within 1-2 hours during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                <div className="bg-brand-lime/20 rounded-lg p-3 group-hover:glow-effect transition-all group-hover:scale-110">
                  <Mail className="w-6 h-6 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal mb-1 group-hover:text-brand-lime transition-colors">No Spam, Ever</h3>
                  <p className="text-brand-charcoal-lighter">We respect your privacy and never share your information</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                <div className="bg-brand-lime/20 rounded-lg p-3 group-hover:glow-effect transition-all group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal mb-1 group-hover:text-brand-lime transition-colors">Free Site Visits</h3>
                  <p className="text-brand-charcoal-lighter">We'll come to your location for detailed assessment</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gradient-dark rounded-xl p-6 text-white hover:shadow-2xl hover:glow-effect transition-all" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-2">Prefer to Talk?</h3>
              <p className="text-gray-300 mb-4">Call us now for immediate assistance</p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-dark text-brand-charcoal px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                (123) 456-7890
              </a>
              <p className="text-sm text-gray-400 mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="bg-brand-gray-lighter rounded-2xl shadow-2xl p-8 border border-brand-gray-light" data-aos="fade-left" data-aos-duration="1000">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="cctv">CCTV Installation</option>
                  <option value="tv">TV Installation</option>
                  <option value="signage">Digital Signage</option>
                  <option value="cabling">Structured Cabling</option>
                  <option value="av">Audio Visual</option>
                  <option value="it">IT Field Services</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Location / Address *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  placeholder="City or full address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Preferred Date / Time
                </label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  placeholder="e.g., Next week, ASAP, specific date"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Upload Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-brand-gray-light rounded-lg p-6 text-center hover:border-brand-lime transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-brand-gray mx-auto mb-2" />
                  <p className="text-sm text-brand-charcoal-lighter">Click to upload or drag and drop</p>
                  <p className="text-xs text-brand-gray mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-lime hover:bg-brand-lime-dark text-brand-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Get My Free Quote
              </button>

              <p className="text-xs text-brand-charcoal-lighter text-center">
                By submitting this form, you agree to be contacted about your project.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
