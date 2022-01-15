import React from 'react'
import { projects } from '../constants/projects';

interface Props {
    
}

const Projects = (props: Props) => {
    return (
        <section id="projets" className="mx-10 lg:mx-20">
            <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <div className="">
                        <h2 className='mb-2 font-semibold text-xl'>
                            {project.title}
                        </h2>
                        <div>
                            {project.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
