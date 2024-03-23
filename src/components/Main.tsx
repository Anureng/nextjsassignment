// "use client"
// import React, { useState } from 'react'
// import SideBar from './SideBar'
// import Discussion from './Discussion'
// import MarketStories from './MarketStories'

// const Main = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <>
//             <div className="flex">
//                 <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
//                 <div className={`flex-grow transition-all duration-300 ease-in-out ${isOpen ? 'pl-64' : ''}`}>
//                     <div className="flex justify-between">
//                         <Discussion />
//                         <MarketStories />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Main


"use client"

import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Discussion from './Discussion';
import MarketStories from './MarketStories';
import Change from './Change';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);



    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Change 768 to your desired breakpoint
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex">
                <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div className={`flex-grow transition-all duration-300 ease-in-out ${isOpen && !isMobile ? 'pl-64' : ''}`}>
                    <div className="flex justify-between">
                        {isMobile ? (
                            <>
                                <Change />
                            </>
                        ) : (
                            <>
                                <Discussion />
                                <MarketStories />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;

