import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-400/6 to-purple-500/8" />
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="relative z-10 max-w-5xl mx-auto px-6">
        <img src={Logo} alt="InCTRL Logo" className="mx-auto mb-8 w-52 drop-shadow-[0_0_35px_rgba(0,255,170,0.45)]" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Elevating Security, AV & Technology Installations</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">Modern, high-impact technology integration for businesses and homes across Central Florida. Structured cabling, CCTV, digital signage, AV, and IT field engineering — done right.</p>
        <div className="flex justify-center gap-6">
          <a href="#contact" className="bg-green-400 text-black px-8 py-3 rounded-2xl font-bold shadow hover:scale-105 transition">Get a Free Quote</a>
          <a href="tel:4070000000" className="bg-white text-black px-8 py-3 rounded-2xl font-bold shadow">Call Now</a>
        </div>
      </motion.div>
    </section>
  );
}
