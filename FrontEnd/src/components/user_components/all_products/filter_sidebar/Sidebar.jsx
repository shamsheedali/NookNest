import React from 'react';

function Sidebar() {
  const categories = ['Living Room', 'Dining Room', 'Bedroom', 'Office', 'Outdoor'];
  const brands = ['IKEA', 'Herman Miller', 'West elm', 'Ashley Furniture', 'Crate & Barrel'];
  const materials = ['Wood', 'Metal', 'Leather', 'Fabric'];

  return (
    <aside className="flex flex-col items-start self-start mt-5 text-sm font-bold text-left text-black">
      <div className="text-xl text-stone-700">Sort</div>
      <div className="self-stretch mt-4 max-md:mr-0.5">Price : Lowest to Highest</div>
      <div className="self-stretch mt-3.5 max-md:mr-0.5">Price : Highest to Lowest</div>
      
      <div className="mt-6 text-xl text-stone-700">Category</div>
      {categories.map((category, index) => (
        <div key={index} className="mt-3.5">{category}</div>
      ))}
      
      <div className="mt-7 text-xl text-stone-700">Price</div>
      <div className="flex gap-5 self-stretch mt-4 whitespace-nowrap">
        <div className="flex flex-col flex-1 w-20">
          <label htmlFor="minPrice" className="self-start">₹Min</label>
          <input id="minPrice" type="number" className="shrink-0 mt-1.5 h-px border border-black border-solid" />
        </div>
        <div className="flex flex-col flex-1 w-20">
          <label htmlFor="maxPrice" className="self-start">₹Max</label>
          <input id="maxPrice" type="number" className="shrink-0 mt-1.5 h-px border border-black border-solid" />
        </div>
      </div>
      
      <div className="mt-7 text-xl text-stone-700">Brand</div>
      {brands.map((brand, index) => (
        <div key={index} className="mt-3">{brand}</div>
      ))}
      
      <div className="mt-10 text-xl text-stone-700 max-md:mt-10">Material</div>
      {materials.map((material, index) => (
        <div key={index} className="mt-3">{material}</div>
      ))}
    </aside>
  );
}

export default Sidebar;