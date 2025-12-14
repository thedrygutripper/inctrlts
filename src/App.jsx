import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          InCTRL Technology Services
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Security • Cabling • Digital Signage • AV • IT Field Services
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="px-8 py-4 rounded-xl bg-green-400 text-black font-bold text-lg hover:scale-105 transition"
          >
            Get a Free Quote
          </a>

          <a
            href="#"
            className="px-8 py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-105 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
