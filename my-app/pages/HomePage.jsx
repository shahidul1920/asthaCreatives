import DemoScreen from '@/components/DemoScreen'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ServicesSection />
        <DemoScreen />
    </div>
  )
}

export default HomePage