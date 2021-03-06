import React from 'react'
import { TimeLineData } from '../constants/timeline';
import { MdWork, MdSchool } from "react-icons/md"
import { motion, Variants } from "framer-motion"

interface Props {
    
}

const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        repeatType: 'reverse'
      }
    }
};

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

    function isEven(value:number){
        if (value%2 == 0)
            return true;
        else
            return false;
    }

    return (
        <section id="apropos" className="mx-10 lg:mx-20 antialiased">
            <div>
                <h3 className="text-3xl text-white">
                    A propos de moi
                </h3>
                <div className='relative container mx-auto px-6 my-6 flex flex-col space-y-8'>
                    <div 
                        className="absolute z-0 w-2 h-full bg-white shadow-md left-17 inset-0 md:mx-auto md:left-0 md:right-0"
                    ></div>
                    {TimeLineData.map(element => (
                        <motion.div 
                            className='relative z-10' 
                            key={element.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={cardVariants}>
                                <div className='relative pt-12 xs:absolute md:left-1/2 md:-translate-x-6'>
                                    <div className='absolute flex left-6 md:left-0 inset-0 items-center justify-center text-3xl text-white bg-pink-800 w-12 h-12 rounded-full border-2 border-white shadow-xl'>
                                        {iconSelect(element.icon)}
                                    </div>
                                </div>
                                <div className={`relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 ${isEven(element.id) ? "md:mr-auto md:pr-9 md:pl-0" : "md:ml-auto md:pl-9"}`}>
                                    <div 
                                        aria-hidden="true" 
                                        className={`absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-4 xs:left-19 ${isEven(element.id) ? "md:left-auto md:right-7" : "md:left-7"}`}
                                    ></div>
                                    <div className='bg-white p-6 rounded-md shadow-md'>
                                        <span className="text-sm font-semibold text-teal-700 tracking-wide">{element.date}</span>
                                        <h4 className='text-lg font-semibold pt-1'>{element.title}</h4>
                                        <p className='pt-1'>{element.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
