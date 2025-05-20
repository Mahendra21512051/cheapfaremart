import React from 'react'
import { FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const middleLeftLinks = [
  "Flights from Atlanta to Orlando",
  "Flights from Atlanta to Dallas",
  "Flights from Atlanta to Honolulu",
  "Flights from NewYork to Seattle",
  "Flights from NewYork to Las Vegas",
  "Flights from NewYork to Lahore",
  "Flights from NewYork to San Francisco",
  "Flights from NewYork to Istanbul"

];

const middleRightLinks = [
  "Flights from Atlanta to Houston",
  "Flights from Atlanta to Phoenix",
  "Flights from Atlanta to London",
  "Flights from Houston to Fort-Lauderdale",
  "Flights from NewYork to Bangkok ",
  "Flights from NewYork to Chicago",
  "Flights from NewYork to Santiago"
];

const TopUsRoutes_03 = () => {
  return (
    <div className="space-y-3" >
      <h1 className="fontstyle1 leading-snug text-[15px]">
        Check who we are, how we work, and everything that constitutes our existence.
      </h1>
      <hr className="mt-2 border-white" />
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left column */}
        <ul className="space-y-2 font-sans text-[13px]">
          {middleLeftLinks.map((item, index) => (
            <li key={index} className='flex items-center gap-1 fontstyle'>
              <FaAngleRight className="text-white" /> {item}
            </li>
          ))}
        </ul>
        {/* Right column with arrow icons */}
        <ul className="space-y-2 font-sans text-[13px] sm:ml-[10%]">
          {middleRightLinks.map((item, index) => (
            <li key={index} className="flex items-center gap-1 fontstyle">
              <FaAngleRight className="text-white" />
              {item}
            </li>
          ))}
          <li className='flex items-center font-semibold gap-1'>
            <FaAngleRight className="text-white" /> Discover More<FaAngleDoubleRight />

          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopUsRoutes_03
