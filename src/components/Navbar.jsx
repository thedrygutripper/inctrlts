export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-extrabold tracking-wide text-white">
          InCTRL
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <span className="hover:text-green-400 cursor-pointer">Home</span>
          <span className="hover:text-green-400 cursor-pointer">Services</span>
          <span className="hover:text-green-400 cursor-pointer">Contact</span>
        </nav>
      </div>
    </header>
  );
}
