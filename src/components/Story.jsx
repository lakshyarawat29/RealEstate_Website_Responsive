import React from 'react';

const Story = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex items-center justify-center '>
        <img src='src/assets/story/1.png' className='min-w-[350px] h-[263px] shadow-xl/40'/>
      </div>

      <div className='flex flex-col p-10 gap-4'>
        <h2 className='font-bold text-3xl'>Our Story<br /> Who we are</h2>
        <p className='text-[#C4C4C4]'>
          Established in 1992, PT. Wahana Cipta operates as a General
          Contracting company with a footprint that we have planted throughout
          Indonesia. Initially, we focused on construction in the field of
          residential housing development in Jakarta. As the company grows, now
          we are present as a reliable...
        </p>
        <button className="mt-1 blue-grad-2 h-[33px] w-[112px] text-white font-semibold text-sm shadow-xl/30 cursor-pointer">
            See More
          </button>
      </div>
    </section>
  );
};

export default Story;
