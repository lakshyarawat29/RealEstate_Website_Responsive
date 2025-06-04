import React from 'react';

const Footer = () => {
  return (
    <section>
      <div className='black-grad text-white pt-10 px-[22px] flex flex-col gap-5 h-[600px]'>
        <h1 className='text-lg font-semibold'>Logo</h1>
        <p className='text-lg/relaxed'>
          is a general contractor company based in Jakarta. More than 25 years
          of experience in building and carving out Indonesia's development.
        </p>

        <div className='flex gap-2 mt-3 mb-4'>
          <img src='src/assets/logos/1.svg'/>
          <img src='src/assets/logos/2.svg'/>
          <img src='src/assets/logos/3.svg'/>
          <img src='src/assets/logos/4.svg'/>
        </div>

        <div className='flex gap-10'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-lg'>Company</h2>
            <h3>About</h3>
            <h3>How it Works</h3>
            <h3>Terms</h3>
            <h3>Privacy Policy</h3>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-lg'>More</h2>
            <h3>Documentation</h3>
            <h3>License</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
