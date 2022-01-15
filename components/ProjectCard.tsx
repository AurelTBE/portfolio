import React from 'react'

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
    return (
        <div className="">
            <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
                <img
                    alt={project.title}
                    src={project.image}
                    className='absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg'
                />
            </div>
            <h3 className='mb-2 font-semibold text-xl'>
                {project.title}
            </h3>
            <div>
                {project.description}
            </div>
        </div>
    )
}

export default ProjectCard
