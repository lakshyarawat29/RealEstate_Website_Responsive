import React from 'react'

const BrandLogos = () => {
  return (
    <section className='flex gap-12 h-[100px] items-center overflow-x-auto'>
      <div className='h-20 min-w-[6rem] grid place-content-center'>
        <img src="src/assets/brands/brand1.png"/>
      </div>

      <div className='h-20 min-w-[6rem] grid place-content-center'>
        <img src="src/assets/brands/brand2.png"/>
      </div>

      <div className='h-20 min-w-[6rem] grid place-content-center'>
        <img src="src/assets/brands/brand3.png"/>
      </div>

      <div className='h-20 min-w-[6rem] grid place-content-center'>
        <img src="src/assets/brands/brand4.png"/>
      </div>

      <div className='h-20 min-w-[6rem] grid place-content-center'>
        <img src="src/assets/brands/brand5.png"/>
      </div>
    </section>
  )
}

export default BrandLogos