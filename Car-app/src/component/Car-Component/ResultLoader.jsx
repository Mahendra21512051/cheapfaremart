import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPhone } from 'react-icons/fa';

const pickUpData = [
    {
        pickairport: "Hartsfield Jackson Atlanta International Airport",
        pickupaddress: "Atlanta, United States",
        picktime: "May 31, 2025 5:30 AM",

        dropoffairport: "Hartsfield Jackson International Airport",
        dropoffaddress: "Atlanta, United States",
        droptime: "Jun 01, 2025 5:30 AM"
    }
];

const ResultLoader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(pickUpData);
    }, []);

    return (
        <div className=" fixed inset-0 z-50 flex bg-[url('/images/skyback.jpg')] bg-cover bg-center h-screen">
            <div className="flex flex-col items-center justify-center mt-10 m-auto bg-white drop-shadow-lg w-full max-w-[750px] px-4 py-6 rounded-xl">
                <h3 className="text-[#fd5003] font-bold text-[18px] text-center">
                    FINDING THE BEST FARE FOR CAR RENTAL
                </h3>

                {data.length > 0 && (
                    <>
                        <div className="flex flex-col sm:flex-row mt-4 p-2 justify-between gap-4 w-full">
                            {/* Pick Up Section */}
                            <div className="w-full sm:w-[350px] border p-4 flex flex-col items-center rounded-md">
                                <h4 className="text-[#fd5003] font-semibold mb-2">Pick UP</h4>
                                <p className="text-[#376d72] text-[20px] fontfamily font-medium text-center">
                                    {data[0].pickairport}
                                </p>
                                <p className="text-center">{data[0].pickupaddress}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src='images/transfer.svg' className='w-[20px]' />
                            </div>
                            {/* Drop Off Section */}
                            <div className="w-full sm:w-[350px] border p-4 flex flex-col items-center rounded-md">
                                <h4 className="text-[#fd5003] font-semibold mb-2">Drop OFF</h4>
                                <p className="text-[#376d72] text-[20px] fontfamily font-medium text-center">
                                    {data[0].dropoffairport}
                                </p>
                                <p className="text-center">{data[0].dropoffaddress}</p>
                            </div>
                        </div>
                        <div className='flex gap-36 fontstyle1 text-gray-700'>
                            <p>{data[0].picktime}</p>
                            <p>{data[0].droptime}</p>
                        </div>
                    </>

                )}
                <div class="loader-container">
                    <div class="loader-bar"></div>
                </div>

                {/* contact */}
                <div className='bg-[#ff7337] px-2 py-1 fontfamily font-bold text-white mt-6 rounded-md flex justify-center items-center gap-2'>
                    <div className="bg-[#db7c54] text-white rounded-full p-2 transform -scale-x-100">
                        <FaPhone />
                    </div>
                    <span> CALL NOW 1-844-869-5222</span>
                </div>

                <div>
                    <p className='text-[13px] fontfamily font-light text-black mt-5'> * Note All displayed prices are based on the searches done in the last 24 hours. fares are not guaranteed unless ticketed. </p>
                </div>

            </div>

        </div>
    );
};

export default ResultLoader;
