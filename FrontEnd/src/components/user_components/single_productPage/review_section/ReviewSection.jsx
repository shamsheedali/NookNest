import React from 'react';
import ReviewForm from '../review_form/ReviewForm';
import ReviewCard from '../review_card/ReviewCard';

function ReviewSection() {
  const reviews = [
    { author: 'Shamsheed', rating: 4, content: 'The Hiroshima Armchair blends sleek modern design with exceptional comfort, making it a perfect addition to any space. Its minimalist style and premium craftsmanship provide both elegance and durability.' },
    { author: 'Shamsheed', rating: 4, content: 'The Hiroshima Armchair blends sleek modern design with exceptional comfort, making it a perfect addition to any space. Its minimalist style and premium craftsmanship provide both elegance and durability.' },
    { author: 'Shamsheed', rating: 4, content: 'The Hiroshima Armchair blends sleek modern design with exceptional comfort, making it a perfect addition to any space. Its minimalist style and premium craftsmanship provide both elegance and durability.' },
  ];

  return (
    <section>
      <h2 className="mt-28 ml-3 text-2xl font-bold text-black max-md:mt-10 max-md:ml-2.5">Ratings & Reviews</h2>
      <div className="self-stretch mt-7 ml-3 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ReviewForm />
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;