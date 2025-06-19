import { FaCalendarCheck, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BookAppointment from "../components/BookAppointment ";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookOpen, setBookOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    // { label: "Assessment", path: "/assessment" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
  ];

  const therapyCategories = [
    "Autism Therapy",
    "Occupational Therapy",
    "Speech Therapy",
    "Psychological",
    "Parent and Caregiver Training",
    "Social Skills Training",
  ];

  const dropdownLinks = ["what", "assessment", "procedure", "services"];

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const formatPath = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <header className="w-full shadow-md bg-white border-b-2 relative z-50">
      <div className="flex justify-around max-md:justify-between items-center px-4 md:px-8 py-3">
        <Link to="/">
          <img
            src={logo}
            alt="Javika Therapy Logo"
            className="h-16 w-full sm:h-24 md:h-32"
          />
        </Link>

        {/* Mobile menu toggle */}
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
              className={`hover:text-purple-600 transition tracking-wide ${
                currentPath === path
                  ? "border-b-2 border-purple-800 font-bold"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop book appointment button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setBookOpen(true)}
            className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition"
          >
            <FaCalendarCheck />
            Book Appointment
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
              setBookOpen(true);
              setMobileMenuOpen(false);
            }}
            className="flex justify-center items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full w-full text-sm font-semibold hover:bg-blue-800"
          >
            <FaCalendarCheck />
            Book Appointment
          </button>
        </div>
      )}

      {/* Dropdown Menus (click-based, responsive) */}
      <div className="w-full bg-gray-100 py-2 px-4 border-t text-purple-800 text-sm font-semibold flex flex-wrap justify-center lg:justify-evenly items-center">
        {therapyCategories.map((category, index) => {
          const slug = formatPath(category);
          return (
            <div key={index} className="relative text-center my-2">
              <button
                onClick={() => toggleDropdown(slug)}
                className="flex items-center gap-1 uppercase px-3 py-1 hover:text-purple-600"
              >
                {category}
                <span className="text-purple-500">❯</span>
              </button>

              {openDropdown === slug && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md border rounded-md z-50 p-4 w-64 sm:w-96 grid grid-cols-2 gap-2">
                  {dropdownLinks.map((page, i) => {
                    const isDirectPage = page === "services";
                    const path = isDirectPage
                      ? `/${page}`
                      : `/therapy/${slug}/${page}`;

                    return (
                      <Link
                        key={i}
                        to={path}
                        onClick={() => setOpenDropdown(null)}
                        className="text-purple-800 hover:text-purple-600 text-sm"
                      >
                        {page.replace(/-/g, " ").toUpperCase()}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Book Appointment Modal */}
      {isBookOpen && <BookAppointment onClose={() => setBookOpen(false)} />}
    </header>
  );
}
