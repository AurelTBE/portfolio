import React from 'react'
import { TimeLineData } from '../constants/timelinedata';
import { MdWork, MdSchool } from "react-icons/md"

interface Props {
    
}

const Timeline = (props: Props) => {
    return (
        <section id="apropos" className="mx-10 lg:mx-20 antialiased">
            <div className="">
                <h3 className="text-3xl text-white">
                    A propos de moi
                </h3>
                <div className='relative container mx-auto px-6'>
                    <div className="absolute w-2 h-full bg-white shadow-md">

                    </div>
                    <div>
                        <div className='flex items-center justify-center text-3xl text-white bg-pink-800 w-12 h-12 rounded-full border-2 border-white shadow-xl'>
                            <MdWork />
                        </div>
                        <div className='relative pt-2'>
                            <div 
                                aria-hidden="true" 
                                className='absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white'></div>
                            <div className='bg-white p-6 rounded-md shadow-md'>
                                Timeline
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
