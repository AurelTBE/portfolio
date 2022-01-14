import React from 'react'
import { projects } from '../constants/projects';

interface Props {
    
}

const Projects = (props: Props) => {
    return (
        <section id="projets">
            <div className="text-white grid grid-cols-3 gap-4">
                {projects.map(project => (
                    <div className="grid items-center justify-center">
                        <h2>
                            {project.title}
                        </h2>
                        <div>
                            {project.description}
                        </div>
                        Coucou
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
