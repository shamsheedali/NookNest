import React from 'react';
import Variant from '../variant/Variant';
import ProductInfo from '../product_info/ProductInfo';

function ProductDisplay() {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="grow max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/808e3d188d11ca2ba313b05afd322740ec8bd4e278739d2c2faf16e7b093529f?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4" className="object-contain self-center max-w-full aspect-[0.96] w-[217px]" alt="Hiroshima Armchair" />
                <div className="flex gap-3 mt-16 max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bce10b4a18d2a40a0bdc0d1a2f0c3e6af0b4974a956698ea9954b8cfcb8e947f?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4" className="object-contain shrink-0 aspect-[1.15] w-[92px]" alt="Armchair view 1" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58779f5ddf19ab7563129aa638af2405949df6abfffa95cc38cd85ec1746474d?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4" className="object-contain shrink-0 aspect-[1.16] w-[93px]" alt="Armchair view 2" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bce10b4a18d2a40a0bdc0d1a2f0c3e6af0b4974a956698ea9954b8cfcb8e947f?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4" className="object-contain shrink-0 aspect-[1.15] w-[92px]" alt="Armchair view 3" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-11 w-full max-md:mt-10">
                <h1 className="text-4xl font-bold text-black">
                  Hiroshima <br /> Armchair
                </h1>
                <Variant />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductInfo />
    </section>
  );
}

export default ProductDisplay;