"use client"
import React, { useState } from 'react'
import Discussion from './Discussion'
import MarketStories from './MarketStories'


const Change = () => {

    const [view, setView] = useState(false)
    return (
        <div>
            <div className='bg-gray-800 h-12 text-white flex items-center justify-evenly w-screen '>
                <div className={` ${view ? "  " : ""}`}>
                    <button onClick={() => setView(true)} className=''>
                        Disscussion Fourm
                    </button>
                </div>
                <div onClick={() => setView(false)} className={`${view ? "" : ""}`}>
                    Market Stories
                </div>
            </div>
            <div>
                {
                    view ? <Discussion /> : <MarketStories />
                }
            </div>
        </div>
    )
}

export default Change
