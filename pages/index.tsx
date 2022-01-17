import React, { useEffect, useContext} from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { State } from '../context/State';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';

const Home: NextPage = () => {
  const { handleActivePage }: {handleActivePage:(page:string) => void} = useContext(State)
  
  useEffect(() => {
    handleActivePage("Accueil")
  }, [])

  return (
    <div>
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
    </div>
  )
}

export default Home
