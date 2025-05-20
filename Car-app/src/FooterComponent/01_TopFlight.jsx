import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const middleLeftLinks = [
    "Flights Under $29",
    "Flights Under $49",
    "Flights Under $99",

];

const middleRightLinks = [
   "Flights Under $39",
    "Flights Under $69",
];


const TopFlight_01 = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default TopFlight_01

