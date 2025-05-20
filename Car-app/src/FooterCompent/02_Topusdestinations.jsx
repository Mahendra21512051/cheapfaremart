import React from 'react'
import { FaAngleRight,FaAngleDoubleRight } from 'react-icons/fa';
const middleLeftLinks = [
  "Flights to New York",
  "Flights to San Francisco",
  "Flights to Orlando",

];

const middleRightLinks = [
  "Flights to Los Angeles",
  "Flights to Las Vegas",
  "Flights to  Miami",
];

const TopUSDestinations_02 = () => {
  return (
    <div className="space-y-3" >
      <h1 className="fontstyle1 leading-snug text-[15px]">
       Search airfare deals, compare fares and flight time, and book your cheap flight ticket now
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
           <li className='flex items-center font-semibold gap-1'>
            <FaAngleRight className="text-white" /> Discover More<FaAngleDoubleRight/>
          </li>
        </ul>
        
        {/* Right column with arrow icons */}
        <ul className="space-y-2 font-sans text-[13px] sm:ml-[10%]">
          {middleRightLinks.map((item, index) => (
            <li key={index} className="flex items-center gap-1 fontstyle">
              <FaAngleRight className="text-white" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopUSDestinations_02
