
import React from "react";
import { useState } from 'react';

const Header = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
const [selectedCountry, setSelectedCountry] = useState({
  name: 'UAE',
  image: '/images/uae.png',
});

const handleSelect = (country) => {
  setSelectedCountry(country);
  setDropdownOpen(false);
};
  const openLiveChat = () => {
    window.open(
      "https://v2.zopim.com/widget/livechat.html?api_calls=%5B%5D&hostname=www.cheapfaremart.com&key=RBC8QRCFscg6SH52xhQ8W82v0xOUlc9u&lang=en",
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="w-full px-[15px] mx-auto text-[#212529] text-base font-normal leading-6 text-left font-sans flex items-center justify-between  py-3 flex-wrap lg:flex-nowrap">
        {/* Logo */}
        <a
  href="#"
  className="inline-block mr-4 p-0 text-left text-[1.25rem] font-normal leading-none whitespace-nowrap text-[rgba(0,0,0,0.9)] bg-transparent no-underline box-border"
>
  <img src="/images/logous.jpg" alt="Logo" className="h-11" />
</a>


        {/* Call Button (Mobile) */}
        <div className="block lg:hidden">
          <a href="tel:+1-888-497-1354" className="flex items-center space-x-2 text-sm text-blue-600">
            <i className="fa fa-phone"></i>
            <span>Call</span>
          </a>
        </div>

        {/* Toggle Button (Mobile Nav) */}
        <button
          className="lg:hidden text-gray-700 text-xl"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          ☰
        </button>

        {/* Menu Items */}
        <div id="mobile-menu" className="w-full md:flex md:items-center md:w-auto hidden">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <li><a className="block text-gray-700  font-semibold" href="#">Home</a></li>
            <li><a className="block text-gray-700  text-[13px] font-semibold" href="#">Flights</a></li>
            <li><a className="block text-gray-700  text-[13px] font-semibold" href="#">About Us</a></li>
            <li><a className="block text-gray-700  text-[13px] font-semibold" href="#">Contact Us</a></li>
            <li><a className="block text-gray-700  text-[13px] font-semibold" href="#">Blog</a></li>

            {/* Live Chat Button */}
            <li>
              <button
                onClick={openLiveChat}
                className="bg-orange-500 text-white px-3 py-1 rounded text-sm mt-2 lg:mt-0 flex items-center"
              >
                <i className="fa fa-comments mr-1"></i> Live Chat
              </button>
            </li>

            {/* Country Selector */}
            <li className="relative ml-5 text-sm">
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center px-2 py-1 border border-gray-300 rounded cursor-pointer no-underline focus:outline-none bg-white"
      >
        <img
          src={selectedCountry.image}
          alt={selectedCountry.name}
          className="w-8 h-auto object-cover mr-2 -mt-[2px]"
        />
        <span>{selectedCountry.name}</span>
        <svg
          className="w-3 h-3 ml-1 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute z-10 bg-white shadow-md mt-1 rounded border border-gray-200 min-w-[140px]">
          <button
            onClick={() =>
              handleSelect({
                name: 'USA',
                image: '/images/usa.png',
              })
            }
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center no-underline"
          >
            <img
              src="/images/usa.png"
              alt="USA"
              className="w-8 h-auto mr-2 object-cover -mt-[3px]"
            />
            USA
          </button>
        </div>
      )}
    </li>
          </ul>

          {/* Toll-Free Info (Desktop Only) */}
          <div className="hidden lg:flex items-center ml-10 gap-2 relative z-[9] text-left text-[#212529] text-base font-normal">
  <div className="text-right mr-3">
    <p className="text-[12px] leading-[1.5] text-end font-normal text-[#333] m-0 p-0">
      Book online or call us now
    </p>
    <a
      href="tel:+1-844-869-5222"
      className="text-[#f60] font-semibold text-[20px] leading-6 bg-transparent no-underline text-left"
    >
      +1-844-869-5222
    </a>
  </div>
<div className="">
  <div className=" border-white border-[1px] rounded-full bg-green-500 absolute w-3 h-3 right-0"></div>
<img
    src="/images/support.png"
    alt="Support"
    className="w-[45px] h-[45px] aspect-[1] bg-[rgba(198,39,128,0.22)] rounded-full align-middle border-0"
  />

</div>

</div>


        </div>
      </div>
    </nav>
  );
};

export default Header;
