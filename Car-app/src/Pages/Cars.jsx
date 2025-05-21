<<<<<<< HEAD
import React from 'react'
import SearchCar from '../component/Car-Component/SearchCar'
=======
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { features, categories, faqs } from '../CarData'
>>>>>>> 8fba8eb2fab5c8ec3b761f2918cca10d97a4d907

const Cars = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <div>
<<<<<<< HEAD
      <SearchCar/>
      <div>Cars</div>

    </div>
    
=======
      <div className='p-4'>
        <h1 className='fontstyle1 text-[24px]'>Book Cheap Car Rentals</h1>
        <p className='font-family'>Rent a car online to explore your destination at your own pace.
          Book cheap car rentals for solo travel, family vacations, a business trip,
          or a spontaneous weekend getaway after comparing car rental deals.
          Check rates from top car rental agencies in the USA
          (For example, Dollar, Thrifty, Hertz, and Sixt) at Cheapfaremart and make a better choice.
          Explore your destination confidently with affordable car rental deals.</p>
      </div>
      {/* cards */}
      <div className="flex flex-wrap gap-6 p-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 w-full sm:w-[32%] bg-white rounded-lg mt-6"
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[60px] h-[60px] object-contain mt-1"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 fontstyle1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Categories List */}
      <div className='p-4'>
        <h1 className='fontstyle1 text-[24px] mt-12 mb-4'>Popular Categories of Rental Cars</h1>
        <ul className="list-disc pl-6 space-y-1 text-sm font-family">
          {categories.map((cat, index) => (
            <li key={index}>
              <span className="font-family font-bold text-[1rem]">{cat.title}</span>:
              <span className="ml-1 text-[1rem]">{cat.description}</span>
            </li>
          ))}
        </ul>
        {/* Why Hire a Car */}
        <div className='px-4'>
          <h1 className='font-family font-semibold text-[1.25rem] mt-4'>Why Hire a Car with Cheapfaremart?</h1>
          <ul className="list-disc pl-6 space-y-1 text-[1rem] font-family " >
            <li>Affordable Rates: Check car rental rates from top brands for a reliable and affordable trip.</li>
            <li>24-Hour Free Cancellation: Cancel within 24 hours with no penalty.</li>
            <li>Wide Range of Vehicles: Choose from economy to luxury cars.</li>
            <li>Trusted Partners: Work only with reputable car rental companies.</li>
            <li>Easy Online Booking: Simple booking process online.</li>
            <li>No Hidden Fees: Transparent pricing with no surprise charges.</li>
          </ul>
        </div>
        {/* Tips for Saving Money on Car Rentals */}
        <div className='px-4'>
          <h1 className='font-family font-semibold text-[1.25rem] mt-4'>Tips for Saving Money on Car Rentals </h1>
          <ul className="list-disc pl-6 space-y-1 text-[1rem] font-family " >
            <li>Book in advance for lower rates.</li>
            <li>Compare prices across multiple providers.</li>
            <li>Avoid renting from airports to save on fees.</li>
            <li>Choose the right vehicle size to avoid paying for empty seats.</li>
            <li>Opt for unlimited mileage for long-distance driving.</li>
            <li>Travel during off-peak times for better rates.</li>
          </ul>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className=' shadow-lg p-5 '>
        <h1 className='fontstyle1 text-[24px] mt-4'>Frequently Asked Questions</h1>

        {faqs.map((faq, index) => (
          <div key={index} className="border border-l-2 rounded-md mb-4 mt-2 border-l-green-950">
            <div
              className="flex items-center justify-between p-2 cursor-pointer bg-[#edf2fa]"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-[16px] font-family font-[400] text-[#20595e]">
                {faq.question}
              </h3>
              <FaAngleDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 text-[14px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Rental car booking terms & condition */}
      <div className='px-5 py-6 mb-6 mt-3 font-family shadow-lg'>
        <h1 className='fontstyle1 text-[24px]'>Rental Car Booking Terms and Conditions</h1>
        <p className='font-family text-[#555]'>The daily car rental prices shown reflect the lowest available rates at the time of booking from various car rental suppliers. Please note that these rates are subject to change without notice and may vary depending on availability. Quoted daily rates do not include additional fees, taxes, or surcharges unless otherwise specified.</p>
        <p className='font-family mt-1.5 text-[#555]'>All prices, dates, and booking details provided at the time of publication were accurate. However, some information may have changed since then.</p>

        <h1 className='fontstyle1 text-[24px] mt-6'>Discounts</h1>
        <p className='text-[#555] font-family'>Discounts are calculated by reducing certain percentage from the regular daily or weekly fare of major car rental providers. The actual rental price may vary based on factors such as:</p>
        <ul className='list-disc px-4 mt-3 text-[#555]'>
          <li>Vehicle availability</li>
          <li>Advance booking time</li>
          <li>Length of rental</li>
          <li>Rental location</li>
          <li>Travel dates</li>
          <li>Applicable blackout dates</li>
        </ul>
        <p className='text-[#555] font-family'>Certain discounted rates may apply only to prepaid "Buy Now" offers, which may be subject to cancellation penalties or restrictions on specific vehicle types.</p>

        <h1 className='fontstyle1 text-[24px] mt-6'>Fare Disclosures</h1>
        <ul  className='list-disc px-4 mt-3 text-[#555]'>
          <li><b>Taxes and Surcharges:</b> Customers will be responsible for taxes and surcharges imposed by the car rental company, generally collected at the time of vehicle drop-off. Additional surcharges may apply for renters under the age of 25.</li>
          <li><b>Vehicle Availability:</b> The type of vehicle reserved is subject to availability and will be determined by the rental car company at the time of pick-up.</li>
          <li><b>Rental Company Policies:</b>Customers must comply with all rules, policies, terms, and conditions set by the car rental company, which may vary by provider and location.</li>
          <li><b>Fees and Taxes:</b>Taxes, concession recovery fees, customer facility charges, and any optional extras will be determined by the rental company and are the customer’s responsibility.</li>
          <li><b>Reservation Changes and Cancellations:</b> Any changes to your reservation or cancellations may result in a processing fee.</li>
          <li><b>Payment Methods:</b>It is the customer’s responsibility to present an accepted credit or charge card at the time of payment to the car rental company. Not all car rental companies accept debit cards or certain credit cards.</li>
          <li><b>Car Rental Affinity Programs:</b>Cheapfaremart does not accept car rental loyalty or affinity program cards. Customers should contact the rental car company directly for inquiries about discounts.</li>
        </ul>
      </div>
    </div >
>>>>>>> 8fba8eb2fab5c8ec3b761f2918cca10d97a4d907
  )
}

export default Cars