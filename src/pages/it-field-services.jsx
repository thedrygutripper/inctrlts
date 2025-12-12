import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">IT Field Services</h1>
          <p className="text-gray-300 mb-6">On-site IT technicians for deployments, troubleshooting, POS setups, network equipment installations, and managed service support.</p>
          <section className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">Why choose InCTRL for IT Field Services</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Local coverage across Central Florida (200+ mile radius from Orlando)</li>
              <li>Enterprise-grade equipment and best-practice installations</li>
              <li>Fully insured, background-checked technicians</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
      <script type="application/ld+json">{
        "@context":"https://schema.org",
        "@type":"Service",
        "name":"IT Field Services",
        "description":"On-site IT technicians for deployments, troubleshooting, POS setups, network equipment installations, and managed service support.",
        "provider": {"@type":"Organization","name":"InCTRL Technology Services","url":"https://yourdomain.com"}
      }</script>
    </div>
  );
}
