import Customers from '@/components/Customers'
import DemoScreen from '@/components/DemoScreen'
import HeroSection from '@/components/HeroSection'
import Portfolio from '@/components/Portfolio'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ServicesSection />
        <Portfolio />
        <Customers />

        {/* <DemoScreen /> */}
    </div>
  )
}

export default HomePage