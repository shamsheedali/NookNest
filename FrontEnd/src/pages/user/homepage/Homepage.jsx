import React from "react";
import UserBanner from '../../../components/user_components/homepage/user_banner/UserBanner';
import HomePageOfffers from '../../../components/user_components/homepage/home_page_offers/HomePageOffers';
import Footer from "../../../components/user_components/user_footer/Footer";
import Popular from "../../../components/user_components/homepage/popular/Popular";
import Navbar from "../../../components/user_components/user_navbar/Navbar";

const Homepage = () => {
  return (
    <div className="flex overflow-hidden flex-col px-14 py-12 bg-white bg-opacity-90 max-md:px-5">
      <Navbar />

      {/* Banner---Section */}
      <UserBanner />

      {/* Offers and New Arrivals section */}

      {/* OFFERS */}
      <div className="flex relative flex-col flex-wrap gap-10 px-16 py-12 mt-32 w-full min-h-[261px] max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
          className="object-cover absolute inset-0 w-full top-4"
        />
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 max-md:mt-10">
              <div className="text-2xl text-black z-10">
                Create the perfect living room with our stylish furniture—now at
                25% off!
              </div>
              <div className="self-start z-10 px-5 py-3.5 mt-11 text-sm font-bold text-white bg-black max-md:mt-10 max-md:ml-2.5">
                VIEW NEW OFFERS
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain grow w-full aspect-[1.83] max-md:mt-2.5 z-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain grow shrink-0 max-w-full aspect-[1.05] w-[174px] max-md:mt-2.5 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="flex relative bottom-28 flex-col flex-wrap gap-10 px-16 py-12 mt-32 w-full min-h-[261px] max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b02f3c72bd40ab5df5882d24d30cdc2140573e9f41e3a2a7c0e559f9a5d28a7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
          className="object-cover absolute inset-0 w-full top-4"
        />
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 max-md:mt-10">
              <div className="text-2xl text-black z-10">
                New arrivals are here—designed to inspire your space.
              </div>
              <div className="self-start z-10 px-5 py-3.5 mt-11 text-sm font-bold text-white bg-black max-md:mt-10 max-md:ml-2.5">
                VIEW NEW ARRIVALS
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd902f927f0484df6ac02d68ab8bf33b91c30b5583066bc391a18851793fe388?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain grow w-full aspect-[1.83] max-md:mt-2.5 z-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bf041c0b84557c3464b923146618f82e1d9bba09e77ad2b7858d682ede3cc3?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain grow shrink-0 max-w-full aspect-[1.05] w-[174px] max-md:mt-2.5 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR */}
      <Popular />
      {/* OFFERS */}
      <HomePageOfffers />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Homepage;
