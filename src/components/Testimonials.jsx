import React from 'react';

const Testimonials = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col md:flex-row-reverse md:gap-[80px] md:justify-center">
        <div className="bg-[url('/src/assets/testimony/1.png')] h-[340px] bg-no-repeat bg-cover flex justify-center items-end mb-[82px]">
          <div className="flex flex-col items-center gap-1 text-white black-grad h-[280px] w-[250px] relative top-20">
            <div className="px-[75.58px] mt-[24px] mb-[11.5px]">
              <img
                src="src/assets/testimony/2.png"
                className="h-[70.91px] w-[70.91px]"
              />
            </div>
            <h3 className="font-semibold text-xl">Dianne Russel</h3>
            <p className="text-[#C4C4C4] px-3 py-2 text-center">
              More than 20 years of experience in the fieldarchitecture and has
              worked on project up to 100+
            </p>
          </div>
        </div>

        <div className="mt-30 flex flex-col gap-5 p-5 max-w-[493px]">
          <h2 className="font-bold text-3xl">
            Meet and talk with <br />
            our best architecture
          </h2>
          <p className="text-[#C4C4C4] text-base">
            All our teams are professional and competent in their fields and
            will help you realize your dream building with the excellent result.
          </p>

          <div className="flex justify-between mb-10">
            <button className="blue-grad-2 h-[33px] min-w-[112px] text-white font-semibold text-sm shadow-xl/30 cursor-pointer">
              see all team
            </button>
            <button className="font-semibold p">
              How it works
              <img src="src/assets/extras/1.svg" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
