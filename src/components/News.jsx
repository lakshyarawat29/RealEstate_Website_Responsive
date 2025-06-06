import React from 'react';

const News = () => {
  return (
    <section>
      <div className="p-5 mx-auto ">
        <h2 className="text-2xl font-bold mb-3">News & Update</h2>
        <div className="flex gap-5 overflow-x-auto md:flex md:justify-center">
          <div className="md:max-w-[368px]">
            <div className="min-w-[250px] flex flex-col">
              <div className="mb-2 bg-amber-500 flex items-center justify-center">
                <img
                  src="src/assets/News/1.png"
                  className="w-full h-auto shadow-lg/05"
                />
              </div>

              <div className="flex justify-between px-3 items-center">
                <div className="flex flex-col gap-0 items-center">
                  <h1 className="font-bold text-4xl">12</h1>
                  <h2 className="font-semibold">Jan</h2>
                </div>
                <h3 className="font-semibold">
                  Elements of content in
                  <br /> Epoxy Paint
                </h3>
              </div>
            </div>

            <p className="text-[#C4C4C4] mt-3 px-3">
              Epoxy paint and epoxy floor contractor. Have you heard the two
              terms? And what does that have to do with the construction of
              existing buildings? Epoxy itself is included in the type o f
              resin...
              <a className="text-blue-500">Read more</a>
            </p>
          </div>

          <div className="md:max-w-[368px]">
            <div className="min-w-[250px] flex flex-col">
              <div className="mb-2 flex items-center justify-center">
                <img
                  src="src/assets/News/1.png"
                  className="w-full h-auto shadow-lg/05"
                />
              </div>

              <div className="flex justify-between px-3 items-center">
                <div className="flex flex-col gap-0 items-center">
                  <h1 className="font-bold text-4xl">12</h1>
                  <h2 className="font-semibold">Jan</h2>
                </div>
                <h3 className="font-semibold">
                  Elements of content in
                  <br /> Epoxy Paint
                </h3>
              </div>
            </div>

            <p className="text-[#C4C4C4] mt-3 px-3">
              Epoxy paint and epoxy floor contractor. Have you heard the two
              terms? And what does that have to do with the construction of
              existing buildings? Epoxy itself is included in the type o f
              resin...
              <a className="text-blue-500">Read more</a>
            </p>
          </div>

          <div className="md:max-w-[368px]">
            <div className="min-w-[250px] flex flex-col">
              <div className="mb-2  flex items-center justify-center">
                <img
                  src="src/assets/News/1.png"
                  className="w-full h-auto shadow-lg/05"
                />
              </div>

              <div className="flex justify-between px-3 items-center">
                <div className="flex flex-col gap-0 items-center">
                  <h1 className="font-bold text-4xl">12</h1>
                  <h2 className="font-semibold">Jan</h2>
                </div>
                <h3 className="font-semibold">
                  Elements of content in
                  <br /> Epoxy Paint
                </h3>
              </div>
            </div>

            <p className="text-[#C4C4C4] mt-3 px-3">
              Epoxy paint and epoxy floor contractor. Have you heard the two
              terms? And what does that have to do with the construction of
              existing buildings? Epoxy itself is included in the type o f
              resin...
              <a className="text-blue-500">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
