import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {title: 'Retail CCTV Upgrade', img: '../../assets/project1.png', desc: 'Full IP camera upgrade with remote access for a multi-location retail chain.'},
  {title: 'Corporate Conference AV', img: '../../assets/project2.png', desc: 'Dual-display Zoom Room install with ceiling speakers and wireless presentation.'},
  {title: 'Restaurant Digital Menu Boards', img: '../../assets/project3.png', desc: 'Six-networked signage displays with cloud CMS and clean cable management.'},
  {title: 'Warehouse Fiber & Cabling', img: '../../assets/project4.png', desc: '500ft fiber run + CAT6A infrastructure for a logistics distribution center.'},
  {title: 'Hotel TV Mounting Rollout', img: '../../assets/project5.png', desc: 'Over 90 guest rooms upgraded with mounted smart TVs and HDMI distribution.'},
  {title: 'Medical Clinic Security System', img: '../../assets/project6.png', desc: 'HIPAA-compliant CCTV deployment with NDAA-approved hardware.'}
];

export default function Projects(){
  return (
    <section className="py-20 px-6 bg-[linear-gradient(180deg,#0b0b0b,rgba(11,11,11,0.9))]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(p=> (
            <motion.div key={p.title} whileHover={{scale:1.03}} transition={{type:'spring', stiffness:150}} className="bg-gray-950 p-6 rounded-2xl border border-gray-800 shadow">
              <img src={p.img} alt={p.title} className="h-44 w-full object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
