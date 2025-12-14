import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>InCTRL Technology Services | CCTV, IT & AV Solutions</title>
        <meta
          name="description"
          content="Professional CCTV installation, structured cabling, digital signage, AV, and IT field services across Florida and beyond."
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Secure, Connect & Upgrade Your Business with InCTRL
          </h1>
          <p className="text-xl mb-8">
            Expert CCTV, structured cabling, AV, digital signage, and IT services. Covering 200+ miles with multi-state expansion plans.
          </p>
          <CTAButton text="Request a Free Quote" link="#contact" />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Trusted by Businesses Across Florida</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/logos/client1.png" alt="Client 1" className="h-16" />
            <img src="/logos/client2.png" alt="Client 2" className="h-16" />
            <img src="/logos/client3.png" alt="Client 3" className="h-16" />
            <img src="/logos/client4.png" alt="Client 4" className="h-16" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">CCTV Installation</h3>
            <p className="mb-4">Protect your business with professional CCTV installation tailored to your needs.</p>
            <CTAButton text="Learn More" link="/services/cctv-installation" />
          </div>
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Structured Cabling</h3>
            <p className="mb-4">Reliable cabling solutions for seamless network and AV performance.</p>
            <CTAButton text="Learn More" link="/services/structured-cabling" />
          </div>
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Digital Signage & AV</h3>
            <p className="mb-4">High-quality digital signage and AV solutions for engaging experiences.</p>
            <CTAButton text="Learn More" link="/services/digital-signage" />
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-3xl font-semibold text-center mb-8">Request Your Free Quote</h2>
          <form className="bg-white shadow p-6 rounded-lg space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
