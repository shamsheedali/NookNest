import React from 'react';

function ProductInfo() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start self-stretch my-auto w-full font-bold max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full text-base w-[375px]">
          <div className="flex flex-col whitespace-nowrap">
            <div className="text-stone-700 text-opacity-90">Brand</div>
            <div className="self-start mt-3.5 text-black">IKEA</div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <div className="self-start text-stone-700 text-opacity-90">Category</div>
              <div className="mt-3.5 text-black">Living Room</div>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="text-stone-700 text-opacity-90">Material</div>
              <div className="self-start mt-3.5 text-black">Fabric</div>
            </div>
          </div>
        </div>
        <p className="self-stretch mt-14 text-xl text-black max-md:mt-10 max-md:max-w-full">
          The Hiroshima Armchair features a sleek wooden frame and soft upholstery, offering both style and comfort. Perfect for modern spaces.
        </p>
        <div className="mt-9 text-2xl text-black">₹5999</div>
        <div className="flex gap-7 mt-10 text-lg text-white">
          <button className="px-11 py-3.5 bg-black max-md:px-5">ADD TO CART</button>
          <button aria-label="Add to favorites">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f8a6a771e82efd33f93cf8f8dba90143b41837004c8f7078ea18ac1579c916?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4" className="object-contain shrink-0 my-auto aspect-[1.1] w-[45px]" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;