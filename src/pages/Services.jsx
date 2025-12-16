export default function Services() {
  const services = [
    "CCTV & Surveillance Systems",
    "Digital Signage & Menu Boards",
    "TV Mounting & Display Installation",
    "Structured Cabling (CAT6 / Fiber)",
    "Audio Visual Systems",
    "IT Field Engineering Services",
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        Our Services
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-green-400/40 transition"
          >
            <h3 className="text-xl font-bold mb-2">{service}</h3>
            <p className="text-gray-400 text-sm">
              Professional installation, clean workmanship, enterprise-grade
              standards.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
