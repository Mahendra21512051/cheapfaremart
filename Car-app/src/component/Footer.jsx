import React, { useState } from 'react';
import TopFlight_01 from '../FooterComponent/01_TopFlight';
import TopUSDestinations_02 from '../FooterComponent/02_Topusdestinations';
import TopUsRoutes_03 from '../FooterComponent/03_TopUsRoutes';
import TopInternationalDesti_04 from '../FooterComponent/04_TopInternationalDesti';
import TopCountryToVisit_05 from '../FooterComponent/05_TopCountryToVisit';
import TopAirlines_06 from '../FooterComponent/06_TopAirlines';
import Airports_07 from '../FooterComponent/07_Aiports'
import StayConnected_08 from '../FooterComponent/08_StayConnected'
import Events_09 from '../FooterComponent/09_Events'
import BookFlights_10 from '../FooterComponent/10_BookFlights'
import BookCars_11 from '../FooterComponent/11_BookCars'
import Sitemap_12 from '../FooterComponent/12_Sitemap';
import AboutCheapfaremart from '../FooterComponent/AboutCheapfaremart';

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPinterest
} from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const leftLinks = [
    "About Cheapfaremart",
    "Top Flight Deals",
    "Top U.S.Destinations",
    "Top U.S. Routes",
    "Top International Destinations",
    "Top Countries to Visit",
    "Top Airlines",
    "Airports",
    "Stay Connected",
    "Events",
    "Book Flights",
    "Book Cars",
    "Sitemap"
];


const Footer = () => {
    const [selectedLink, setSelectedLink] = useState('About Cheapfaremart');
    return (
        <>
            <div style={{ backgroundColor: '#20595e' }} className="flex flex-col md:flex-row justify-between px-6 py-8 text-white gap-8">
                {/* Left part */}
                <div className="space-y-2 w-full md:w-[25%]">
                    <h1 className="text-[15px] fontstyle1">Easy Access</h1>
                    <hr className="mt-2 border-white" />
                    <ul className="space-y-2 text-[13px] font-semibold">
                        {leftLinks.map((item, index) => (
                            <li key={index}
                                onClick={() => setSelectedLink(item)}
                                className="cursor-pointer hover:text-orange-400"
                            >{item}
                                {selectedLink === item && (
                                    <hr className="border border-orange-400 mt-1" />
                                )}</li>
                        ))}
                    </ul>
                </div>

                {/* Middle part */}
                <div className="w-[60%]">
                    <div>
                        {selectedLink === "About Cheapfaremart" &&
                            <AboutCheapfaremart />
                        }
                        {selectedLink === "Top Flight Deals" &&
                            <TopFlight_01 />
                        }
                        {selectedLink === "Top U.S.Destinations" &&
                            <TopUSDestinations_02 />
                        }
                         {selectedLink === "Top U.S. Routes" &&
                            <TopUsRoutes_03 />
                        }
                         {selectedLink === "Top International Destinations" &&
                            <TopInternationalDesti_04 />
                        }
                         {selectedLink === "Top Countries to Visit" &&
                            <TopCountryToVisit_05 />
                        }
                         {selectedLink === "Top Airlines" &&
                            < TopAirlines_06 />
                        }
                         {selectedLink === "Airports" &&
                            <Airports_07 />
                        }
                         {selectedLink === "Stay Connected" &&
                            <StayConnected_08 />
                        }
                         {selectedLink === "Events" &&
                            <Events_09 />
                        }
                         {selectedLink === "Book Flights" &&
                            <BookFlights_10 />
                        }
                        {selectedLink === "Book Cars" &&
                            <BookCars_11 />
                        }
                        {selectedLink === "Book Sitemap" &&
                            < Sitemap_12 />
                        }
                        
                        {!selectedLink && <TopFlight_01 />}

                    </div>
                </div>

                {/* Right Part */}
                <div className="space-y-2 font-sans w-full md:w-[25%]">
                    <h1 className="fontstyle1 text-[15px]">Contact Info</h1>
                    <hr className="mt-2 border-white" />
                    {/* contact info  */}
                    <p className='flex items-center gap-2 text-[13px] fontstyle'>
                        <span className='flex justify-center items-center border-[1px] rounded p-1 border-[#ff8004]'>
                            <FaPhoneAlt size={12} color='#ff8004' />
                        </span>
                        +1 844 869 5222
                    </p>
                    <p className='flex items-center gap-2 text-[13px] fontstyle'>
                        <span className='flex justify-center items-center border-[1px] rounded p-1 border-[#ff8004]'>
                            <FaEnvelope size={12} color='#ff8004' />
                        </span>
                        help@Cheapfaremart.com
                    </p>
                    <p className='flex items-center  gap-2 text-[13px] fontstyle '>
                        <span className='flex justify-center items-center border-[1px] rounded p-1  border-[#ff8004]'>
                            <FaMapMarkerAlt size={12} color='#ff8004' />
                        </span>
                        771 S Kirkman Rd, Suite 112, Orlando,FL 32811
                    </p>
                </div>
            </div>

            {/* footer next second section */}
            <div style={{ backgroundColor: '#13484c' }} className='flex flex-col md:flex-row items-center justify-between gap-4 p-3'>
                {/* Star div */}
                <div className='flex justify-center md:ml-16'>
                    <div className='flex gap-3 py-1 px-3 text-white border-[1px] border-white rounded'>
                        Excellent
                        <div className='flex gap-0.5 py-1'>
                            <img src="images/singlestar.png" className='w-[20px] h-[20px]' />
                            <img src="images/singlestar.png" className='w-[20px] h-[20px]' />
                            <img src="images/singlestar.png" className='w-[20px] h-[20px]' />
                            <img src="images/singlestar.png" className='w-[20px] h-[20px]' />
                            <img src="images/haffstar.png" className='w-[20px] h-[20px]' />
                        </div>
                    </div>
                </div>

                {/* Payment Icon */}
                <div className='flex gap-2 flex-wrap justify-center'>
                    <img src="images/Sectigo.png" className='h-[30px]' />
                    <img src='images/itan.png' className='h-[30px]' />
                    <img src='images/ASTALogo.jpg' className='h-[30px]' />
                    <img src='images/arc_accredited_teal_150.jpg' className='h-[30px]' />
                    <img src="images/caed.png" className='h-[30px]' />
                </div>

                {/* Social Icon */}
                <div className='flex gap-2 justify-center'>
                    <FaFacebook size={36} color='white' className='bg-[#1877F2] rounded p-1' />
                    <RiTwitterXLine size={36} color='white' className='bg-black rounded p-1' />
                    <FaLinkedin size={36} color='white' className='bg-[#0A66C2] rounded p-1' />
                    <FaPinterest size={36} color='white' className='bg-red-600 rounded p-1' />
                    <div
                        className='rounded p-1'
                        style={{
                            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                        }}
                    >
                        <FaInstagram size={28} color="white" />
                    </div>
                </div>
            </div>

            <div className='bg-black flex justify-center items-center p-2 text-white text-[12px] text-center'>
                <p>Copyright © 2015 - 2025 Cheapfaremart LLC. All Rights Reserved.| Florida : ST40942</p>
            </div>
        </>
    );
};

export default Footer;


