"use client"

import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { BiCommentDetail, BiSolidDollarCircle } from "react-icons/bi";
import { FaCaretRight } from "react-icons/fa";

const SideBar = ({ isOpen, toggleSidebar }: any) => {

    return (
        <>
            <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 z-20' : '-translate-x-full'}`}>
                <div className="p-4 space-x-3 flex items-center">
                    <FaUser />
                    <p>Hello ,User</p>
                    <FaBell />
                </div>

                <hr />

                <div className="list-none p-4 space-y-5">
                    <li className='flex items-center space-x-2 '>
                        <BiCommentDetail />
                        <p>
                            Disscussion Fourm
                        </p>
                    </li>
                    <li className='flex items-center space-x-2'> <BiSolidDollarCircle />
                        <p>
                            Market Stories
                        </p>
                    </li>
                    <li>Sentiment</li>
                    <li>Market</li>
                    <li>Sector</li>
                    <li>Watchlist</li>
                    <li>Events</li>
                    <li>News/Interview</li>
                </div>
            </div>
            <button className={` bg-gray-800  text-white absolute top-72  w-4 h-26  p-4 ${isOpen ? 'pl-64 w-6' : ''} `} onClick={toggleSidebar}>
                <FaCaretRight />
            </button>
        </>
    )
}

export default SideBar;
