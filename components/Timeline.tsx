import React from 'react'
import { TimeLineData } from '../constants/projects';

interface Props {
    
}

const Timeline = (props: Props) => {
    return (
        <section id="apropos" className="mx-10 lg:mx-20">
            <div className="text-white">
                <h3 className="text-3xl">
                    A propos de moi
                </h3>
                <div>
                    Timeline content
                </div>
            </div>
        </section>
    )
}

export default Timeline
