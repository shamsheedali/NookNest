import React from 'react';

function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-col grow items-start px-6 pt-8 pb-5 w-full text-sm font-bold text-center text-white bg-black max-md:px-5 max-md:mt-10">
      <img loading="lazy" src={image} className="object-contain ml-5 aspect-[1.08] w-[185px] max-md:ml-2.5" alt={name} />
      <div>{name}</div>
      <div className="mt-1.5">₹{price}</div>
    </div>
  );
}

export default ProductCard;