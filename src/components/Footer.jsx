import React from 'react';

const Footer = () => {
  return (
    <section className="max-h-[300px]">
      <div className="black-grad text-white pt-10 px-[22px] flex flex-col gap-5 h-[600px] md:flex-row md:gap-[136px] md:px-[120px] md:py-[100px]">
        <div className='flex flex-col gap-5 max-w-[547px]'>
          <h1 className="text-2xl font-semibold">Logo</h1>
          <p className="text-lg/relaxed">
            is a general contractor company based in Jakarta. More than 25 years
            of experience in building and carving out Indonesia's development.
          </p>

          <div className="flex gap-2 mt-3 mb-4">
            <img src="src/assets/logos/1.svg" className="max-w-10" />
            <img src="src/assets/logos/2.svg" className="max-w-10" />
            <img src="src/assets/logos/3.svg" className="max-w-10" />
            <img src="src/assets/logos/4.svg" className="max-w-10" />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Company</h2>
            <h3 className="hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">
              About
            </h3>
            <h3 className="hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">
              How it Works
            </h3>
            <h3 className="hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">
              Terms
            </h3>
            <h3 className="hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">
              Privacy Policy
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">More</h2>
            <h3 className="hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">
              Documentation
            </h3>
            <h3 className="hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">
              License
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
