import React from 'react'
import Image from 'next/image'

interface Props {
    project: any
}

const ProjectCard = ({project}: Props) => {
    return (
        <div className="">
            <Image
                unoptimized
                alt={project.title}
                src={project.image}
                width={400}
                height={300}
            />
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
