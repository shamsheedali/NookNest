import React from 'react';

function Pagination() {
  return (
    <nav className="flex absolute top-[1278px] left-[39%] self-center mt-20 max-w-full text-base font-bold text-black whitespace-nowrap w-[318px] max-md:mt-10" aria-label="Pagination">
      <button className="px-6 py-4 border-2 border-black border-solid max-md:px-5" aria-label="Previous page">&lt;</button>
      <button className="px-7 py-4 border-2 border-black border-solid max-md:px-5">1</button>
      <button className="px-7 py-4 border-2 border-black border-solid max-md:px-5">2</button>
      <button className="px-7 py-4 border-2 border-black border-solid max-md:px-5">3</button>
      <button className="px-7 py-4 border-2 border-black border-solid max-md:px-5" aria-label="Next page">&gt;</button>
    </nav>
  );
}

export default Pagination;