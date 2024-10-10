import React from 'react';

function ReviewForm() {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow px-5 py-5 font-bold border-2 border-black border-solid max-md:pr-5 max-md:mt-7">
        <label htmlFor="reviewText" className="sr-only">Add your review</label>
        <textarea
          id="reviewText"
          className="self-start text-sm text-black bg-transparent border-none resize-none"
          placeholder="Add your reviews here..."
        />
        <button type="submit" className="self-end px-3.5 py-1.5 mt-24 text-xs text-center text-white bg-black max-md:mt-10">
          ADD REVIEW
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;