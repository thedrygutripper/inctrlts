export default function Home() {
  return (
    <section className="pt-32 pb-24 px-6 text-center bg-black">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        InCTRL Technology Services
      </h1>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
        Professional CCTV, structured cabling, digital signage, audiovisual,
        and IT field services across Central Florida.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:info@incontrolts.com"
          className="bg-green-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Get a Free Quote
        </a>

        <a
          href="tel:4076831398"
          className="border border-gray-700 px-8 py-4 rounded-xl hover:bg-gray-900 transition"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
