import React, { useEffect, useContext} from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { State } from '../context/State';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  const { handleActivePage }: any = useContext(State)
  
  useEffect(() => {
    handleActivePage("Accueil")
  }, [])

  return (
    <div>
      <Hero />
      <Projects />
    </div>
  )
}

export default Home
