import React from 'react'
import { useRouter } from 'next/router'

interface Props {
    
}

const Hero = (props: Props) => {
    const router = useRouter()

    return (
        <section className='flex flex-row'>
            <div className="">
                <h1 className='text-4xl text-white'>
                    Bienvenu sur<br />
                    Mon portfolio
                </h1>
                <div className='mb-8 text-white'>
                    Mon objectif est de vous rendre inoubliable !
                </div>
                <div>
                    <a href="https://www.google.com" className="btngrad text-white px-8 py-4 my-4 rounded-full shadow-lg">
                        Bouton
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Hero
