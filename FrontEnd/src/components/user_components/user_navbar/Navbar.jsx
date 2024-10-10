import React from "react";
import NookNestLogo from "../../../assets/images/logos/NookNest logo.svg";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between items-center w-full max-md:mr-1.5 max-md:max-w-full">
        {/* logo */}
        <div className="flex gap-1.5 self-stretch text-xl font-bold whitespace-nowrap">
          <img src={NookNestLogo} alt="NookNestLogo" />
        </div>
        {/* nav--1 */}
        <div className="flex relative left-20 gap-10 self-stretch my-auto text-sm font-semibold text-black">
          <div>All Products</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className="flex gap-5  self-stretch my-auto">
        {/* search--bar */}
          <div className="flex w-56 gap-1 p-2 text-xs font-medium text-black border-2 border-black border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c151d8da77e8c1ff40106d1b16d509a1f4f61b48764971bec53079f59deff7?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
              className="object-contain shrink-0 w-5 aspect-[1.05]"
            />
            <div className="my-auto basis-auto">Search for products...</div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbc393cf97be554f0841941ec2fdfec7275c718f5d4940d7edc17cef4dfe44cb?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
            className="object-contain shrink-0 aspect-[1.19] w-[37px]"
          />
          <div className="">
            <IoCartOutline className="text-4xl text-black" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b3a83fe02d7adabefc226cf7713d8ecb9fbcf8962a1a576dc05a55b1eb084cf?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
            className="object-contain shrink-0 aspect-[1.07] w-[35px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
