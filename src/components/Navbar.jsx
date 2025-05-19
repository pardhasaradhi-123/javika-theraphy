import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/pinnacle-logo9.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import DonateModal from "../components/DonateModal";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDonateOpen, setDonateOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full shadow-md bg-white border-b-2 relative">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        <Link to="/">
          <img src={logo} alt="Pinnacle Logo" className="h-14 md:h-20" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-purple-800 text-2xl lg:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex gap-6 text-violet-800 font-medium text-sm md:text-base">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`hover:text-purple-600 transition ${
                currentPath === path
                  ? "border-b-2 border-purple-800 font-bold"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop donate button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setDonateOpen(true)}
            className="flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-fuchsia-700 transition"
          >
            <FaHeart />
            DONATE
          </button>
        </div>
      </div>

      {/* Mobile menu content */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 px-4 bg-white lg:hidden">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-2 text-purple-800 hover:text-purple-600 ${
                currentPath === path ? "font-bold" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => {
              setDonateOpen(true);
              setMobileMenuOpen(false);
            }}
            className="flex justify-center items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full w-full text-sm font-semibold hover:bg-fuchsia-700"
          >
            <FaHeart />
            DONATE
          </button>
        </div>
      )}

      {/* Donate modal */}
      <DonateModal isOpen={isDonateOpen} onClose={() => setDonateOpen(false)} />
    </header>
  );
}
