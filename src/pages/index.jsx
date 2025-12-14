import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import CTA from "../components/CTA";

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

      {/* Hero Section */}
      <Hero
        title="Secure, Connect & Upgrade Your Business with InCTRL"
        subtitle="Expert CCTV, structured cabling, AV, digital signage, and IT services. Covering 200+ miles with multi-state expansion plans."
        ctaText="Request a Free Quote"
        ctaLink="#contact"
      />

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

      {/* Services / Projects Preview */}
      <Projects
        projects={[
          {
            title: "CCTV Installation",
            description: "Protect your business with professional CCTV installation tailored to your needs.",
            link: "/services/cctv-installation",
          },
          {
            title: "Structured Cabling",
            description: "Reliable cabling solutions for seamless network and AV performance.",
            link: "/services/structured-cabling",
          },
          {
            title: "Digital Signage & AV",
            description: "High-quality digital signage and AV solutions for engaging experiences.",
            link: "/services/digital-signage",
          },
        ]}
      />

      {/* Lead Capture Form */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-3xl font-semibold text-center mb-8">Request Your Free Quote</h2>
          <CTA />
        </div>
      </section>
    </>
  );
}
