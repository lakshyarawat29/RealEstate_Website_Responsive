import React from 'react';

const DetailSection = () => {
  return (
    <section className="bg-green-500 p-5 text-white gap-4 flex flex-col blue-grad-2">
      <div className="flex justify-between">
        <div>
          <div className="flex items-baseline">
            <h2 className="text-3xl font-bold">25</h2>
            <h2 className="font-medium text-lg ml-1">Years</h2>
          </div>

          <h3 className="text-xl font-semibold -mt-3">Operated</h3>
        </div>

        <div className="text-xl font-bold">Logo</div>
      </div>
      <p className="text-sm ">
        As a trusted general project that has been operating for 25 years, our
        commitment is always to prioritize our client satisfaction.
      </p>

      <div className="flex justify-between ">
        <div className='flex flex-col'>
          <h3 className='text-xl font-bold'>300+</h3>
          <p>Amazing<br/> Projects</p>
        </div>

        <div className='flex flex-col'>
          <h3 className='text-xl font-bold'>900+</h3>
          <p>Happy<br/> Client</p>
        </div>

        <div className='flex flex-col'>
          <h3 className='text-xl font-bold'>20</h3>
          <p>Amazing <br/>Award</p>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
