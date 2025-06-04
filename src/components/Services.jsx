import React from 'react';

const Services = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-semibold text-xl text-black-dark">
          Our Excellent Services
        </h2>
        <p className=" text-[#C4C4C4] mt-[3px] text-base ">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </div>

      <div className="flex overflow-x-auto gap-5 mb-5">
        <div className="flex flex-col mt-4 gap-2 ">
          <div>
            <img
              src="src/assets/services/1.png"
              className="h-[200px] min-w-[256.5px]"
            />
          </div>
          <h3 className="font-bold text-xl px-2">Industrial</h3>
          <p className="text-[#C4C4C4] text-sm px-2">
            Industrial development is our main line of business. We do Factory
            Construction, Warehouse and others
          </p>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <img
            src="src/assets/services/2.png"
            className="h-[200px] min-w-[256.5px]"
          />
          <h3 className="font-bold text-xl px-2">Commercial</h3>
          <p className="text-[#C4C4C4] text-sm px-2">
            Our experience building in the Commercial field includes Showrooms,
            Supermalls and Office Buildings
          </p>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <img
            src="src/assets/services/3.png"
            className="h-[200px] min-w-[256.5px]"
          />
          <h3 className="font-bold text-xl px-2">Residential</h3>
          <p className="text-[#C4C4C4] text-sm px-2">
            Residential development is the beginning that has shaped us to this
            day. Our development includes Houses & Apartments
          </p>
        </div>
      </div>

    </section>
  );
};

export default Services;
