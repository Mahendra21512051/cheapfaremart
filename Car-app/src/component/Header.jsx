import React, { useState } from "react";
import {
  FaHome,
  FaPlane,
  FaCar,
  FaBook,
  FaBlog,
  FaComments,
  FaPhone,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  const countries = [
    { name: "USA", image: "/images/usa.png" },
    { name: "UAE", image: "/images/uae.png" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const openLiveChat = () => {
    // window.open(
    //   "https://v2.zopim.com/widget/livechat.html?api_calls=%5B%5D&hostname=www.cheapfaremart.com&key=RBC8QRCFscg6SH52xhQ8W82v0xOUlc9u&lang=en",
    //   "_blank",
    //   "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    // );
  };

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="w-full px-[15px] mx-auto text-[#212529] text-base font-normal leading-6 text-left font-sans flex items-center justify-between py-3 flex-wrap lg:flex-nowrap">
        {/* Logo */}
        <Link
          to="/"
          className="inline-block mr-4 text-[1.25rem] font-normal leading-none whitespace-nowrap bg-transparent no-underline"
        >
          <img src="/images/logo.svg" alt="Logo" className="h-11" />
        </Link>

        {/* Call Button (Mobile Only) */}
        <div className="block lg:hidden">
          <a
            href="tel:+1-888-497-1354"
            className="flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md shadow hover:bg-orange-600 transition-all duration-200"
          >
            <FaPhone className="mr-2 text-base transform -scale-x-100" />
            <span>Call</span>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-xl shadow-md z-50"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6 ml-auto">
          <ul className="flex items-center space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[13px] font-semibold pb-1 border-b-2 ${isActive
                    ? 'border-orange-500'
                    : 'border-transparent text-gray-700 hover:border-orange-500'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flights"
                className={({ isActive }) =>
                  `text-[13px] font-semibold pb-1 border-b-2 ${isActive
                    ? 'border-orange-500'
                    : 'border-transparent text-gray-700 hover:border-orange-500'
                  }`
                }
              >
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cars"
                className={({ isActive }) =>
                  `text-[13px] font-semibold pb-1 border-b-2 ${isActive
                    ? 'border-orange-500'
                    : 'border-transparent text-gray-700 hover:border-orange-500'
                  }`
                }
              >
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-booking"
                className={({ isActive }) =>
                  `text-[13px] font-semibold pb-1 border-b-2 ${isActive
                    ? 'border-orange-500 '
                    : 'border-transparent text-gray-700 hover:border-orange-500'
                  }`
                }
              >
                My Booking
              </NavLink>
            </li>
            <li>
              <NavLink

                to="/blogs"
                className={({ isActive }) =>
                  `text-[13px] font-semibold pb-1 border-b-2 ${isActive
                    ? 'border-orange-500 '
                    : 'border-transparent text-gray-700 hover:border-orange-500 '
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <button
                onClick={openLiveChat}
                className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold flex items-center"
              >
                <FaComments className="mr-2" />
                Live Chat
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center px-2 py-1 border border-gray-300 rounded bg-white text-sm"
              >
                <img
                  src={selectedCountry.image}
                  alt={selectedCountry.name}
                  className="w-8 h-auto object-cover mr-2 -mt-[2px]"
                />
                <span>{selectedCountry.name}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 bg-white shadow-md mt-1 rounded border border-gray-200 min-w-[140px]">
                  {countries
                    .filter((c) => c.name !== selectedCountry.name)
                    .map((country) => (
                      <button
                        key={country.name}
                        onClick={() => handleSelect(country)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-8 h-auto mr-2 object-cover -mt-[3px]"
                        />
                        {country.name}
                      </button>
                    ))}
                </div>
              )}
            </li>
          </ul>

          {/* Toll-Free (Desktop) */}
          <div className="ml-5  relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-orange-200 z-0 animate-expand-bg origin-center pointer-events-none rounded-3xl"></div>

            <div className="flex items-center justify-between h-full px-6 z-10 relative">
              <div className="text-right">
                <p className="text-[12px] leading-[1.5] text-[#333] m-0 p-0">
                  Book online or call us now
                </p>
                <a
                  href="tel:+1-844-869-5222"
                  className="text-[#f60] font-semibold text-[20px] leading-6"
                >
                  +1-844-869-5222
                </a>
              </div>
              <div className="relative">
                <div className="border-white border-[1px] rounded-full bg-green-500 absolute w-3 h-3 right-0 top-0"></div>
                <img
                  src="/images/support.png"
                  alt="Support"
                  className="w-[45px] h-[45px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[64px] right-0 w-full max-w-[400px] h-[calc(100vh-64px)] bg-white shadow-md z-50 transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-[13px] font-semibold flex items-center gap-2"
            >
              <span className="p-1.5 border border-[#376d72] rounded-sm text-[#376d72]">
                <FaHome />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/flights"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-[13px] font-semibold flex items-center gap-2"
            >
              <span className="p-1.5 border border-[#376d72] rounded-sm text-[#376d72]">
                <FaPlane />
              </span>
              Flights
            </Link>
          </li>
          <li>
            <Link
              to="/cars"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-[13px] font-semibold flex items-center gap-2"
            >
              <span className="p-1.5 border border-[#376d72] rounded-sm text-[#376d72]">
                <FaCar />
              </span>
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/my-booking"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-[13px] font-semibold flex items-center gap-2"
            >
              <span className="p-1.5 border border-[#376d72] rounded-sm text-[#376d72]">
                <FaBook />
              </span>
              My Booking
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-[13px] font-semibold flex items-center gap-2"
            >
              <span className="p-1.5 border border-[#376d72] rounded-sm text-[#376d72]">
                <FaBlog />
              </span>
              Blog
            </Link>
          </li>
        </ul>
      </div>


    </nav>
  );
};

export default Header;
