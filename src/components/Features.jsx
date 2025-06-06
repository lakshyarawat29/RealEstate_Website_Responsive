import React from 'react';

const Features = () => {
  return (
    <section className="p-5">
    <div className='h-1 w-[90px] blue-grad' />
      <div className="flex flex-col gap-2 px-[19px] mt-5 md:flex-row md:gap-[40px]">
        <h2 className="text-2xl font-semibold">
          What Makes us <br />
          Different?
        </h2>
        <p className="text-[#C4C4C4] text-lg">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </div>


      <div className="flex flex-col mt-5 px-[64px] gap-8 md:flex-row mx-auto">
        <div className="flex flex-col items-center gap-3 max-w-[263px]">
          <img src="src/assets/features/1.png" className="w-[94px] h-[94px]" />
          <h3 className="text-xl font-bold">Experienced</h3>
          <p className="text-center text-[#C4C4C4] text-lg">
            Our experience of 25 years of building and making achievements in
            the world of development
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src="src/assets/features/2.png" className="w-[94px] h-[94px]" />
          <h3 className="text-xl font-bold">Competitive Price</h3>
          <p className="text-center text-[#C4C4C4] text-lg">
            The prices we offer you are very competitive without reducing the quality of the company's work in the slightest
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src="src/assets/features/3.png" className="w-[94px] h-[94px]" />
          <h3 className="text-xl font-bold">Best Materials</h3>
          <p className="text-center text-[#C4C4C4] text-lg">
            The material determines the building itself so we recommend that you use the best & quality materials in its class.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src="src/assets/features/4.png" className="w-[94px] h-[94px]" />
          <h3 className="text-xl font-bold">On Time</h3>
          <p className="text-center text-[#C4C4C4] text-lg">
            We prioritize the quality of our work and finish it on time
          </p>
        </div>        
      </div>
    </section>
  );
};

export default Features;
