import React from 'react'
import { HeroSection } from './components/HeroSection'
import DetailSection from './components/DetailSection'
import BrandLogos from './components/BrandLogos'
import Services from './components/Services'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import News from './components/News'
import Collections from './components/Collections'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <nav className='px-5 bg-[#2B2B2B] text-white flex h-10 items-center justify-between'>
        <div className='text-lg font-bold'>
          Logo
        </div>
        <div>
          <img src='../public/menu_icon.svg'/>
        </div>
      </nav>

      <HeroSection />
      <DetailSection />
      <BrandLogos />
      <Services />
      <Features />
      <Testimonials />
      {/* <Story /> */}
      <News />
      <Collections />
      <Footer />
    </div>
  )
}

export default App