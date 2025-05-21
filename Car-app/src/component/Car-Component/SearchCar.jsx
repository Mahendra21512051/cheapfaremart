import React, { useState } from "react";
import { FaCheck, FaSearch, FaCalendarAlt, FaClock } from "react-icons/fa";

const generateTimeOptions = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
        const hour = h < 10 ? `0${h}` : `${h}`;
        times.push(`${hour}:00`, `${hour}:30`);
    }
    return times.map((time, index) => (
        <option key={index} value={time}>
            {time}
        </option>
    ));
};

const SearchCar = () => {
    const [isSameLocation, setIsSameLocation] = useState(true);
    const [isDriverOver25, setIsDriverOver25] = useState(true);
    const [driverAgeRange, setDriverAgeRange] = useState("18-20");

    const handleLocationCheckbox = () => {
        setIsSameLocation(!isSameLocation);
    };

    const handleDriverAgeCheckbox = () => {
        setIsDriverOver25(!isDriverOver25);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking submitted successfully!");
    };

    return (
        <div className="max-w-full mx-auto px-4 py-8 font-sans text-gray-900 bg-[url('/images/carrental.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Form Section */}
                <div className="flex-1 web-color p-6 rounded-lg shadow-md bg-opacity-90 bg-black/50">
                    <h1 className="text-2xl font-bold mb-2 text-white">
                        Car Rental – Search, Compare & Save
                    </h1>
                    <h2 className="text-lg mb-6 text-white">
                        Free cancellations on most bookings.
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Checkboxes */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <label className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isSameLocation}
                                    onChange={handleLocationCheckbox}
                                    className="h-[18px] w-[18px] border-2 border-white rounded-[2px] bg-transparent cursor-pointer outline-none opacity-50 appearance-none peer"
                                />
                                <span className="text-white">Drop-off location is the same</span>
                            </label>

                            <label className="inline-flex items-center space-x-2 cursor-pointer">
                            <input
  type="checkbox"
  checked={isDriverOver25}
  onChange={handleDriverAgeCheckbox}
  className="
    h-[18px] w-[18px] 
    border-2 border-white 
    rounded-[2px] 
    cursor-pointer 
    outline-none 
    bg-white
    checked:bg-white
    checked:accent-[#fd7e14]
    transition-all duration-200
  "
/>

                                <span className="text-white">Driver's age is 25 or over</span>
                            </label>

                            {!isDriverOver25 && (
                                <div className="flex gap-6">
                                    <label className="inline-flex items-center space-x-2 cursor-pointer text-white">
                                        <input
                                            type="radio"
                                            name="age"
                                            value="18-20"
                                            checked={driverAgeRange === "18-20"}
                                            onChange={() => setDriverAgeRange("18-20")}
                                            className="form-radio h-5 w-5"
                                        />
                                        <span>18-20</span>
                                    </label>

                                    <label className="inline-flex items-center space-x-2 cursor-pointer text-white">
                                        <input
                                            type="radio"
                                            name="age"
                                            value="21-24"
                                            checked={driverAgeRange === "21-24"}
                                            onChange={() => setDriverAgeRange("21-24")}
                                            className="form-radio h-5 w-5"
                                        />
                                        <span>21-24</span>
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Location Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {isSameLocation ? (
                                <div className="relative">
                                    <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                    <input
                                        type="text"
                                        placeholder="Pick-Up & Drop-Off Location"
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                                        required
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="relative">
                                        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                        <input
                                            type="text"
                                            placeholder="Pick-Up Location"
                                            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                        <input
                                            type="text"
                                            placeholder="Drop-Off Location"
                                            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                                            required
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Date & Time Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div className="relative">
                                <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                <input
                                    type="date"
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <FaClock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                <select
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                >
                                    <option value="">Pick-Up Time</option>
                                    {generateTimeOptions()}
                                </select>
                            </div>
                            <div className="relative">
                                <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                <input
                                    type="date"
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <FaClock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                                <select
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                >
                                    <option value="">Drop-Off Time</option>
                                    {generateTimeOptions()}
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full md:w-1/3 py-[14px] bg-[#ff6600] text-white text-[18px] font-semibold rounded-[2px] border-none hover:bg-orange-700 transition-colors duration-200 cursor-pointer"
                            >
                                Search
                            </button>
                        </div>

                    </form>
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-[600] text-[#20595e] mb-6">
                        Why use Cheapfaremart?
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                        {[
                            "4.7/5.0 customer rating",
                            "Exclusive car rental deals",
                            "No credit card required",
                            "24-hour free cancellation",
                            "24/7 customer support",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-base font-normal leading-tight">
                                <div className="w-[18px] h-[18px] bg-[#28a745] rounded-full flex items-center justify-center mt-[2px] mr-[6px]">
                                    <FaCheck className="text-white text-[12px]" />
                                </div>
                                <span>{item}</span>
                            </li>

                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default SearchCar;
