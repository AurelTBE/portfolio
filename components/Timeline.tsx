import React from 'react'
import { TimeLineData } from '../constants/timelinedata';
import { MdWork, MdSchool } from "react-icons/md"

interface Props {
    
}

const Timeline = (props: Props) => {
    const iconSelect = (icon: string) => {
        switch (icon) {
            case "work":
                return <MdWork />
            case "school":
                return <MdSchool />
            default:
                return <MdWork />
        }        
    } 

    return (
        <section id="apropos" className="mx-10 lg:mx-20 antialiased">
            <div className="">
                <h3 className="text-3xl text-white">
                    A propos de moi
                </h3>
                <div className='relative container mx-auto px-6 my-6 flex flex-col space-y-8'>
                    <div 
                        className="absolute z-0 w-2 h-full bg-white shadow-md left-17 inset-0 md:mx-auto md:left-0 md:right-0"
                    ></div>
                    {TimeLineData.map(element => (
                        <div className='relative z-10'>
                            <div className='relative pt-12 xs:absolute'>
                                <div className='absolute flex left-6 inset-0 items-center justify-center text-3xl text-white bg-pink-800 w-12 h-12 rounded-full border-2 border-white shadow-xl'>
                                    {iconSelect(element.icon)}
                                </div>
                            </div>
                            <div className='relative pt-2 xs:pl-20 xs:pt-0'>
                                <div 
                                    aria-hidden="true" 
                                    className='absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-4 xs:left-19'
                                ></div>
                                <div className='bg-white p-6 rounded-md shadow-md'>
                                    <h4 className='text-lg font-semibold'>{element.title}</h4>
                                    <div>{element.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
