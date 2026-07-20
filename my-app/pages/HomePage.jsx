import Customers from '@/components/Customers'
import DemoScreen from '@/components/DemoScreen'
import HeroSection from '@/components/HeroSection'
import Portfolio from '@/components/Portfolio'
import ServicesSection from '@/components/ServicesSection'
import Team from '@/components/Team'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ServicesSection />
        <Portfolio />
        <Customers />
        <Team />

        {/* <DemoScreen /> */}
    </div>
  )
}

export default HomePage