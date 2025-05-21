import React from 'react';
import { useState } from 'react';
import { FaPlane, FaCar } from 'react-icons/fa'

const MyBooking = () => {
  const [selectedTab, setSelectedTab] = useState('car');
  return (
    <div className="py-12 gap-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Image Block */}
          <div className=" hidden md:block md:w-1/2">
            <div
              className="rounded-lg h-[447px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/Red-EyeFlight.webp')" }}
            ></div>
          </div>

          {/* Right Booking Form */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8">
            <div className="space-y-6 ">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold">My Bookings</h2>
                <h6 className="text-gray-600">Information about your trip</h6>
              </div>


              {/* Tabs */}
              <div className="flex bg-[#20595e]">
                {/* Flights Tab */}
                <button
                  onClick={() => setSelectedTab('flight')}
                  className={`flex items-center gap-2 px-4 py-2 w-1/4 justify-center transition-all duration-200
          ${selectedTab === 'flight'
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-200'
                    }
        `}
                  role="tab"
                  aria-selected={selectedTab === 'flight'}
                >
                  <FaPlane className="text-lg" />
                  FLIGHTS
                </button>

                {/* Car Rental Tab */}
                <button
                  onClick={() => setSelectedTab('car')}
                  className={`flex items-center gap-2 px-4 py-2 w-1/4 justify-center transition-all duration-200
          ${selectedTab === 'car'
                      ? 'bg-orange-600 text-white '
                      : 'text-gray-200'
                    }
        `}
                  role="tab"
                  aria-selected={selectedTab === 'car'}
                >
                  <FaCar className="text-lg" />
                  CAR
                </button>
              </div>

              {/* Booking No. Input */}
              <div>
                <label htmlFor="txtBookingID" className="block text-sm  text-gray-700">
                  Cheapfaremart Booking No.
                </label>
                <input
                  type="text"
                  id="txtBookingID"
                  maxLength="20"
                  placeholder="Booking No."
                  className="w-full mt-1 p-2 border border-[#333] hover:bg:border-[#333]"




                />
                <span id="error_booking_msg" className="text-red-500 text-sm"></span>
              </div>

              {/* Email Address Input */}
              <div>
                <label htmlFor="txtEmailID" className="block text-sm  text-gray-700">
                  Email Address
                </label>
                <input
                  type="text"
                  id="txtEmailID"
                  maxLength="80"
                  placeholder="Email ID"
                  className="w-full mt-1 p-2 border border-[#333] hover:bg:border-[#333]"
                />
                <span id="error_email_msg" className="text-red-500 text-sm"></span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  id="btnFindBooking"
                  onClick={() => console.log('Find my booking')}
                  className="bg-orange-500 w-full hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-all duration-200"
                >
                  Find my booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
