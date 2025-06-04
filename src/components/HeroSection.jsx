import React from 'react';

export const HeroSection = () => {
  return (
    <div>
      <section className="black-grad text-white">
        <div className="flex flex-col pt-10 px-5 gap-2">
          <h1 className="font-medium text-xl">
            We Provide <br />
            Architectural Design
            <br />
            and Construction
          </h1>

          <p className="text-[#C4C4C4] font-base">
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different
          </p>

          <button
            className="self-start blue-grad text-base py-1.5 px-3 mt-2 text-white rounded"
          >
            Discover More
          </button>
        </div>

        <div className='flex justify-end -mt-32'>
          <img src='../public/hero-building.png'/>
        </div>
      </section>
    </div>
  );
};
