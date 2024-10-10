import React from 'react';
import ProductCard from '../../../shared_components/product_card/ProductCard';

function RelatedProducts() {
  const products = [
    { name: 'Fabric Chair', price: '₹1999', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a8bcf00526909f7891d0fe828ccec3d0dde0f49331dd5d527629e09618cae?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4' },
    { name: 'Sofa', price: '₹1999', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/72bfc15412b821682d5735fcd5b3ff771c78e294915f376c9f5814a860c1e6bd?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4' },
    { name: 'Fabric Chair', price: '₹1999', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3c1a8bcf00526909f7891d0fe828ccec3d0dde0f49331dd5d527629e09618cae?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4' },
    { name: 'Sofa', price: '₹1999', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/72bfc15412b821682d5735fcd5b3ff771c78e294915f376c9f5814a860c1e6bd?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4' },
  ];

  return (
    <section>
      <h2 className="mt-14 ml-3 text-2xl font-bold text-black max-md:mt-10 max-md:ml-2.5">You might also like</h2>
      <div className="mt-12 ml-3.5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;