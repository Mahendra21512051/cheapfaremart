
import React from "react";

const Header = () => {
  const openLiveChat = () => {
    window.open(
      "https://v2.zopim.com/widget/livechat.html?api_calls=%5B%5D&hostname=www.cheapfaremart.com&key=RBC8QRCFscg6SH52xhQ8W82v0xOUlc9u&lang=en",
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-3 flex-wrap">
        {/* Logo */}
        <a className="flex items-center" href="#">
          <img src="/images/logous.jpg" alt="Logo" className="h-8" />
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
        <div id="mobile-menu" className="w-full lg:flex lg:items-center lg:w-auto hidden ">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <li><a className="block text-gray-700 hover:text-blue-600" href="#">Home</a></li>
            <li><a className="block text-gray-700 hover:text-blue-600" href="#">Flights</a></li>
            <li><a className="block text-gray-700 hover:text-blue-600" href="#">About Us</a></li>
            <li><a className="block text-gray-700 hover:text-blue-600" href="#">Contact Us</a></li>
            <li><a className="block text-gray-700 hover:text-blue-600" href="#">Blog</a></li>

            {/* Live Chat Button (Mobile & Desktop) */}
            <li>
              <button
                onClick={openLiveChat}
                className="bg-orange-500 text-white px-3 py-1 rounded text-sm mt-2 lg:mt-0"
              >
                <i className="fa fa-comments mr-1"></i> Live Chat
              </button>
            </li>

            {/* Country Selector */}
            <li className="relative group ml-5 text-sm font-sans font-normal leading-6 text-[#212529] list-none box-border">
              {/* Toggle Button */}
              <a
                href="#"
                role="button"
                className="select_country_nm flex items-center px-2 py-1 border border-gray-300 rounded cursor-pointer no-underline focus:outline-none focus:ring-0 tap-highlight-transparent"
              >
                <img
                  src="/images/uae.png"
                  alt="UAE"
                  className="w-8 h-auto object-cover mr-2"
                  style={{ marginTop: '-2px' }}
                />
                <span>UAE</span>
                {/* Arrow Icon */}
                <svg
                  className="w-3 h-3 ml-1 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >

                </svg>
              </a>

              {/* Dropdown menu */}
              <div className="dropdown-menu cuntry_ua absolute z-10 bg-white shadow-md mt-1 rounded border border-gray-200 hidden group-hover:block min-w-[140px]">
                <a
                  href="#"
                  className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center no-underline"
                >
                  <img
                    src="/images/usa.png"
                    alt="USA"
                    className="w-8 h-auto mr-2 object-cover"
                    style={{ marginTop: '-3px' }}
                  />
                  USA
                </a>
              </div>
            </li>




          </ul>

          {/* Toll-Free Info (Desktop Only) */}
          <div
            className="hidden lg:flex items-center ml-10 gap-[6px] relative z-[9] box-border text-left font-sans text-base font-normal leading-6 text-[#212529] tap-highlight-transparent"
            style={{
              WebkitTextSizeAdjust: '100%',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <div className="text-right mr-3">
              <p className="text-xs">Book online or call us now</p>
              <a href="tel:+1-844-869-5222" className="text-[#007bff] font-semibold">
                +1-844-869-5222
              </a>
            </div>
            <img src="/images/support.png" alt="Support" className="w-5 h-5" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
