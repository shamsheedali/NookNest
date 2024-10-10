import React from "react";
import Layout from "../../../components/user_components/single_productPage/layout/Layout";
import ProductDisplay from "../../../components/user_components/single_productPage/product_display/ProductDisplay";
import ReviewSection from "../../../components/user_components/single_productPage/review_section/ReviewSection";
import RelatedProducts from "../../../components/user_components/single_productPage/related_products/RelatedProducts";

const SingleProductPage = () => {
  return (
    <Layout>
      <ProductDisplay />
      <ReviewSection />
      <RelatedProducts />
    </Layout>
  );
};

export default SingleProductPage;
