import React from 'react'
import BackgroundSpiral from '../components/BackgroundSpiral'
import SpiralPage from '../components/SpiralPage'
import CloseLest from '../components/CloseLest'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import SupperMenu from '../components/SupperMenu'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div>
      <Header />
      <BackgroundSpiral />
      <HeroSection />
      <SpiralPage />
      <CloseLest />
      <Contact />
      <SupperMenu />
    </div>
  )
}

export default HomePage