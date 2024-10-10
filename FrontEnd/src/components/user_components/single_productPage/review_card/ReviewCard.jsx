import React from 'react';

function ReviewCard({ author, rating, content }) {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-5 py-4 w-full border-2 border-black border-solid max-md:mt-7">
        <div className="flex gap-10 w-full">
          <div className="text-sm font-bold text-black">{author}</div>
          <div className="flex flex-1 gap-2.5">
            {[...Array(rating)].map((_, i) => (
              <img key={i} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/037096513b7e383925d4bf8cb315615e06a80d99b36b72d24cd3de973a31d552?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4" className="object-contain shrink-0 aspect-[0.95] w-[18px]" alt="" />
            ))}
          </div>
        </div>
        <div className="mt-6 text-sm font-bold text-black max-md:mr-1.5">{content}</div>
      </div>
    </div>
  );
}

export default ReviewCard;