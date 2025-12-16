export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} InCTRL Technology Services</p>
      <p className="mt-2">
        Security • Cabling • Digital Signage • AV • IT Field Services
      </p>
      <p className="mt-2 text-gray-500">
        info@incontrolts.com • (407) 683-1398
      </p>
    </footer>
  );
}
