import React from 'react'
import data from "../lib/Data.json"
import { CiHeart, CiShare2 } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { GoComment } from "react-icons/go";

const Discussion = () => {

    return (
        <div className='p-4'>
            <div className='text-red-500 font-bold bg-gray-200 w-fit  p-1 sm:text-xl'> Discussion Fourm</div>
            <div className=' h-scree sm:w-4/5 w-min-xs '>
                {
                    data.map((el) => (
                        <div key={el.id} className="py-4">

                            <div className='flex items-center sm:justify-between  rounded-xl shadow-xl p-4'>

                                <div className='flex space-x-2  sm:space-x-4 '>

                                    <div className='flex  '>
                                        <img className='  sm:h-10 sm:w-12 h-5 w-8 rounded-full' src={el.image} alt="" />
                                    </div>

                                    <div className='space-y-2'>
                                        <div className='flex space-x-4'>
                                            <p className='text-xs sm:text-lg'>{el.name}</p>
                                            <p className='bg-blue-600 text-white px-3 py-1 rounded-xl w-fit sm:text-sm text-xs  '>Sector 3</p>
                                        </div>
                                        <div>
                                            <div className='flex items-center justify-center text-xs sm:text-sm '>{el.description}</div>
                                        </div>

                                        <div className='flex items-center space-x-3 sm:space-x-12'>
                                            <div className='flex items-center text-xs sm:text-lg'>
                                                <CiHeart />
                                                <p>{el.likes}</p>
                                            </div>

                                            <div className='flex items-center text-xs sm:text-lg'>
                                                <IoMdEye />
                                                <p>{el.views}</p>
                                            </div>

                                            <div className='flex items-center text-xs sm:text-lg'>
                                                <GoComment />
                                                <p>{el.comments} Comment</p>
                                            </div>

                                            <div className='flex items-center text-xs sm:text-lg'>
                                                <CiShare2 />
                                                <p>Share</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='text-xs  sm:text-lg'>
                                    2 min ago
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Discussion
