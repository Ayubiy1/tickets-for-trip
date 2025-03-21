import React, { useState } from "react"

import "./style.css"
import { FaExchangeAlt } from "react-icons/fa";

const ChooseTicket = () => {
    const [from, setFrom] = useState("Uzbekistan (UZ)");
    const [to, setTo] = useState("Turkiya");
    const [depart, setDepart] = useState("2025-03-23");
    const [returnDate, setReturnDate] = useState("2025-03-30");
    const [passengers, setPassengers] = useState("1 adult, Economy");
    const [isFlipped, setIsFlipped] = useState(false);



    const replacementF = () => {
        setIsFlipped((prev) => !prev); // Oldingi holatini o'zgartiramiz

        let fromChanged = from
        setFrom(to)
        setTo(fromChanged)
    }

    return <>
        <div className="ticket p-10 flex justify-center items-center">
            <div className="ticket-div bg-[#05203c] p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-white">
                {/* Flight Type */}
                <div className="flex flex-wrap justify-center space-x-6 mb-4">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="trip" defaultChecked />
                        <span>Roundtrip</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="trip" />
                        <span>One way</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="trip" />
                        <span>Multi-city</span>
                    </label>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-12 gap-4">
                    {/* From */}
                    <div className="col-span-12 sm:col-span-5">
                        <label className="text-sm">From</label>
                        <input
                            type="text"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 text-white"
                        />
                    </div>

                    {/* Swap Button */}
                    <div className="col-span-12 sm:col-span-2 flex items-end justify-center">
                        <button
                            className={`swap-button ${isFlipped ? "rotate-back" : "rotate-forward"} p-2 bg-white text-[#05203c] rounded-full border cursor-pointer`}
                            onClick={() => {
                                replacementF()
                            }}
                        >
                            <FaExchangeAlt />
                        </button>
                    </div>

                    {/* To */}
                    <div className="col-span-12 sm:col-span-5 mt-[-25px] sm:mt-[0]">
                        <label className="text-sm">To</label>
                        <input
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 text-white"
                        />
                    </div>

                    {/* <div className="aaaaa"> */}
                    {/* Depart */}
                    <div className="col-span-6 sm:col-span-3">
                        <label className="text-sm">Depart</label>
                        <input
                            type="date"
                            value={depart}
                            onChange={(e) => setDepart(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 text-white"
                        />
                    </div>

                    {/* Return */}
                    <div className="col-span-6 sm:col-span-3">
                        <label className="text-sm">Return</label>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 text-white"
                        />
                    </div>

                    {/* Passengers */}
                    <div className="col-span-12 sm:col-span-4">
                        <label className="text-sm">Travelers and cabin class</label>
                        <input
                            type="text"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 text-white"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="col-span-12 sm:col-span-2 flex items-end">
                        <button className="bg-blue-500 w-full py-3 rounded-md text-white cursor-pointer">
                            Search
                        </button>
                    </div>
                    {/* </div> */}
                </div>

                {/* Checkboxes */}
                <div className="flex space-x-4 mt-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Add nearby airports</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Direct flights only</span>
                    </label>
                </div>
            </div>
        </div>
    </>
}

export default ChooseTicket