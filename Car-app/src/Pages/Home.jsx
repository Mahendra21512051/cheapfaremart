import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center  fontfamily  py-10 mb-4 border-b-2'>
        <h3 className='text-[20px]'>Are you looking for a quick getaway?</h3>
        <h1 className='text-[30px] text-[#376d72] font-semibold'>Exclusive Unpublished Airfare Offers</h1>

        <div className='bg-[#174549] w-full text-white p-3 mt-2 '>
          ye mahedra bhai aap bnaige
        </div>
        <div className='bg-[#20595e] w-full text-white p-3 mb-2 h-[26vh] '>
          this is form
        </div>
      </div>

      {/* Cards Start */}
      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div><img src='images/exclusive.png' /></div>
          <h2 className="text-xl font-semibold mb-2 text-[#20595e]">Exclusive Deals</h2>
          <p className="text-gray-600 text-center text-[13px]">
            Access selected deals available with budget and full-service airlines.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div><img src='images/free-cancellation.png' /></div>
          <h2 className="text-xl font-semibold mb-2">Free Cancellation</h2>
          <p className="text-gray-600 text-center text-[13px]">
            Lock any airfare that sounds great. You don’t lose anything if you cancel it
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div><img src='images/24-hours-support.png' /></div>
          <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
          <p className="text-gray-600 text-center text-[13px]">
            Call us anytime for any assistance. We do not go into hibernation
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div><img src='images/access.png' /></div>
          <h2 className="text-xl font-semibold mb-2">Secure and Easy Booking</h2>
          <p className="text-gray-600 text-center text-[13px]">
            Your personal and financial information stays secure with us.
          </p>
        </div>
      </div>
      {/* Cards End */}

      <div>
        <h1>Best Deals on Flights Today</h1>
      </div>



    </div>
  )
}

export default Home