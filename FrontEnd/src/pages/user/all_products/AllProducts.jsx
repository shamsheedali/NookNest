import React from 'react';
import Sidebar from '../../../components/user_components/all_products/filter_sidebar/Sidebar';
import ProductGrid from '../../../components/user_components/all_products/product_grid/ProductGrid';
import Pagination from '../../../components/shared_components/pagination/Pagination';
import Navbar from '../../../components/user_components/user_navbar/Navbar';
import Footer from '../../../components/user_components/user_footer/Footer';

function ProductPage() {
  return (
    <div className="flex overflow-hidden flex-col px-10 py-12 bg-zinc-50 bg-opacity-90 max-md:px-5">
      <Navbar />
      <main className="flex flex-wrap gap-9 mt-16 w-full max-w-[1236px] max-md:mt-10 max-md:max-w-full">
        <Sidebar />
        <div className="shrink-0 self-start w-0.5 border-2 border-black border-solid h-[1170px]" />
        <ProductGrid />
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;