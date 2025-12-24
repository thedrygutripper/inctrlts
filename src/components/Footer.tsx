import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Tech Solutions Pro</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for CCTV, AV, Cabling, and IT Field Services across Central Florida.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-cyan-500 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-cyan-500 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-cyan-500 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-cyan-500 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">CCTV Installation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">TV Installation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Digital Signage</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Structured Cabling</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Audio Visual</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">IT Field Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Orlando</li>
              <li>Tampa</li>
              <li>Daytona Beach</li>
              <li>Lakeland</li>
              <li>Melbourne</li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300">View All Areas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Orlando, Florida<br />Serving 200+ Mile Radius</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-cyan-400 transition-colors">
                  info@example.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Careers</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="bg-white/5 px-3 py-1 rounded-full">Licensed & Insured</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">Background-Checked Technicians</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">Warranty on All Work</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">Serving Central FL Since 2013</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tech Solutions Pro. All rights reserved. Professional CCTV, Digital Signage, TV Mounting, AV Integration, Structured Cabling, and IT Field Services throughout Orlando and Central Florida.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
