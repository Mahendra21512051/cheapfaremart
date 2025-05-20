import React from 'react';
import { FaAngleRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const leftLinks = [
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

const middleLeftLinks = [
    "Blogs",
    "About Us",
    "Terms & condition",
    "Testimonials",
    "Disclaimer",
    "Cancellation and Refund Policy",
    "Cheapfaremart Promo Codes"
];

const middleRightLinks = [
    "FAQs",
    "Privacy policy",
    "Payment Acceptance policy",
    "Contact us",
    "Travel Advisory",
    "Cookies Policy",
    "Sitemap"
];

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#376d72' }} className="flex  md:flex-row gap-6 p-6 text-white">
                {/* Left part */}
                <div className="space-y-2 ">
                    <h1 className="font-sans font-semibold">Easy Access</h1>
                    <hr className="mt-2 border-white" />
                    <p>About Cheapfaremart</p>
                    <hr className="mt-2 border-orange-400" />
                    <ul className="space-y-1">
                        {leftLinks.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Middle part */}
                <div className="space-y-2 ">
                    <h1 className="font-sans font-semibold leading-snug">
                        Check who we are, how we work, and everything that constitutes our existence
                    </h1>
                    <hr className="mt-2 border-white" />
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        {/* Left column */}
                        <ul className="space-y-2 font-sans">
                            {middleLeftLinks.map((item, index) => (
                                <li key={index} className='flex items-center gap-1'>
                                    <FaAngleRight className="text-white" /> {item}
                                </li>
                            ))}
                        </ul>
                        {/* Right column with arrow icons */}
                        <ul className="space-y-2 font-sans">
                            {middleRightLinks.map((item, index) => (
                                <li key={index} className="flex items-center gap-1">
                                    <FaAngleRight className="text-white" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Part */}
                <div className=" space-y-2 font-sans">
                    <h1 className="font-sans font-semibold">Contact Info</h1>
                    <hr className="mt-2 border-white" />
                    {/* Yahan aap contact info add kar sakte ho */}
                    <p className='flex items-center gap-2'>
                        <div className='flex justify-center items-center border-1 rounded p-1 border-orange-400'>
                            <FaPhoneAlt size={12} color='orange' />
                        </div>
                        +1 844 869 5222
                    </p>


                    <p className='flex items-center gap-2'>
                        <div className='flex justify-center items-center border-1 rounded p-1 border-orange-400'>
                            <FaEnvelope size={12} color='orange' />
                        </div>
                        help@Cheapfaremart.com
                    </p>

                    <p className='flex items-center gap-2'>
                        <div className='flex justify-center items-center border-1 rounded p-1 border-orange-400'>
                            <FaMapMarkerAlt size={12} color='orange' />
                        </div>
                        771 S Kirkman Rd, Suite 112, Orlando,FL 32811
                    </p>
                </div>
            </div>

            {/* footer next second section */}
            <div style={{ backgroundColor: '#2c575d' }} className='flex py-2 gap-6'>

                {/* Star div */}
                <div>
                    <div className='flex gap-3 py-1 px-3 text-white border-[1px] border-white rounded ml-16'>
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
                <div>
                    <img src="images/caed.png"  />
                </div>
                <div></div>
            </div>

        </>
    );
};

export default Footer;

