import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import { State } from '../context/State';

const Header = () => {
    const { activePage }: {activePage:string} = useContext(State)

    return (
        <>        
            <Head>
                <title>Portfolio{activePage && ` - ${activePage}`}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full bg-slate-600'>
                <div className="flex justify-between items-center text-white text-2xl px-8 py-5">
                    <Link href="/#">
                        <div className="flex items-center cursor-pointer">
                            <DiCssdeck />
                            <span className='ml-2'>Portfolio</span>
                        </div>
                    </Link>
                    <div className='flex'>
                        <Link href="/#projets">
                            <a className='text-lg cursor-pointer px-2'>
                                Projets
                            </a>
                        </Link>
                        <Link href="/#technos">
                            <a className='text-lg cursor-pointer px-2'>
                                Technos
                            </a>
                        </Link>
                        <Link href="/#apropos">
                            <a className='text-lg cursor-pointer px-2'>
                                A propos
                            </a>
                        </Link>
                    </div>
                    <div className='flex'>
                        <Link href="https://github.com/AurelTBE">
                            <a target="_blank" className="cursor-pointer px-2">
                                <AiFillGithub size="3rem" />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/aurelientrouble/">
                            <a target="_blank" className="cursor-pointer px-2">
                                <AiFillLinkedin size="3rem" />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <a target="_blank" className="cursor-pointer px-2">
                                <AiFillInstagram size="3rem" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Header