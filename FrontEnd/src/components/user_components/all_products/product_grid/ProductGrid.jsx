import React from 'react';
import ProductCard from '../../../shared_components/product_card/ProductCard';

function ProductGrid() {
  const products = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a8bcf00526909f7891d0fe828ccec3d0dde0f49331dd5d527629e09618cae?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4", name: "Fabric Chair", price: 1999 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/72bfc15412b821682d5735fcd5b3ff771c78e294915f376c9f5814a860c1e6bd?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4", name: "Sofa", price: 1999 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a8bcf00526909f7891d0fe828ccec3d0dde0f49331dd5d527629e09618cae?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4", name: "Fabric Chair", price: 1999 },
    // Repeat the above 3 items 3 more times to have a total of 12 items
  ].flatMap(item => [item, item, item, item]);

  return (
    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
      {[0, 1, 2, 3].map((rowIndex) => (
        <div key={rowIndex} className={`mt-${rowIndex === 0 ? '0' : '10'} max-md:mr-1 max-md:max-w-full`}>
          <div className="flex gap-5 max-md:flex-col">
            {[0, 1, 2].map((colIndex) => {
              const index = rowIndex * 3 + colIndex;
              const product = products[index];
              return (
                <div key={colIndex} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <ProductCard {...product} />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;