import React from 'react'
import Link from 'next/link'

export interface IProject {
    title:       string;
    description: string;
    image:       string;
    tags:        string[];
    source:      string;
    visit:       string;
    id:          number;
}


const ProjectCard = ({project}: {project:IProject}) => {
    const {title, image, description, tags, source, visit, id} = project
    return (
        <div className="claybg">
            <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
                <img
                    alt={title}
                    src={image}
                    className='absolute object-cover object-top w-full rounded-t-2xl shadow-lg h-80'
                />
            </div>
            <h3 className='mb-2 mx-4 font-semibold text-xl'>
                {title}
            </h3>
            <hr />
            <div className='mx-4'>
                {description}
            </div>
            <div className='mx-4'>
                <div className="flex justify-center mt-2">Techs :</div>
                <div className='flex justify-between'>
                    {tags.map((tag, i) => (
                        <span key={i}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex my-6 justify-around mx-2'>
                <Link href={visit}>
                    <a target='_blank' className="bg-teal-500 hover:bg-teal-700 text-white py-4 px-8 rounded-full shadow-xl font-semibold">
                        Code
                    </a>
                </Link>
                <Link href={source}>
                    <a target='_blank' className="bg-teal-500 hover:bg-teal-700 text-white py-4 px-8 rounded-full shadow-xl font-semibold">
                        Source
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
