import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-extrabold text-green-400">InCTRL Technology Services</h1>
        <p className="text-gray-400 mt-2">
          CCTV • Structured Cabling • Digital Signage • AV • IT Field Services
        </p>
      </header>

      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Central Florida Technology Installers
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg">
          Professional CCTV, low-voltage cabling, digital signage, AV systems, and IT field services.
          Covering a 200+ mile radius from Orlando.
        </p>
        <button className="bg-green-400 text-black px-10 py-4 rounded-xl text-xl font-bold hover:scale-105 transition">
          Get a Free Quote
        </button>
      </section>

      <section className="py-20 bg-gray-900 px-6">
        <h3 className="text-4xl font-bold text-center mb-16">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "CCTV & Surveillance",
            "Structured Cabling",
            "Digital Signage",
            "TV Mounting",
            "Audio Visual Systems",
            "IT Field Services",
          ].map(service => (
            <div key={service} className="bg-black p-8 rounded-xl border border-gray-800">
              <h4 className="text-xl font-bold mb-3">{service}</h4>
              <p className="text-gray-400 text-sm">
                Professional installation and support services for commercial and residential clients.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} InCTRL Technology Services
      </footer>
    </div>
  );
}
