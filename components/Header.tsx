import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import { State } from '../context/State';

interface Props {
    
}

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
                Header
            </div>
        </>


    )
}

export default Header