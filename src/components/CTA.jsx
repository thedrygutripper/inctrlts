import React from "react";

export default function CTA(){
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready To Upgrade Your Technology?</h2>
        <p className="text-gray-300 mb-8">From advanced security systems to professional AV setups and IT field engineering — InCTRL delivers fast, reliable, and enterprise-grade solutions.</p>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="max-w-xl mx-auto bg-gray-800 p-6 rounded-2xl" aria-label="Request a quote">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="name" type="text" placeholder="Your name" className="p-3 rounded-lg bg-black/40 border border-gray-700 w-full" />
            <input name="email" type="email" placeholder="Email address" className="p-3 rounded-lg bg-black/40 border border-gray-700 w-full" />
          </div>
          <textarea name="message" placeholder="Tell us about your project..." className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 h-28 mb-4"></textarea>
          <div className="flex gap-4 justify-center">
            <button type="submit" className="bg-green-400 text-black px-6 py-2 rounded-xl font-bold">Request Service</button>
            <a href="tel:4070000000" className="bg-white text-black px-6 py-2 rounded-xl font-bold">Call Now</a>
          </div>
        </form>

        <p className="text-gray-400 mt-6 text-sm">Or connect via Zapier webhook to forward leads to email, Slack, CRM or SMS.</p>
      </div>
    </section>
  );
}
