import React from 'react'

const UserBanner = () => {
  return (
    <div className="mt-14 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto font-bold text-black max-md:mt-10">
              <div className="self-stretch text-6xl max-md:text-4xl fontShareFont_Clash-Grotes">
                Where Comfort
                <br />
                Meet Craft
              </div>
              <div className="mt-6 text-base font-medium">
                Discover stylish and affordable furniture with ease on our
                simple, user-friendly e-commerce site, offering quick delivery
                and excellent customer service.
              </div>
              <div className="px-12 py-3.5 mt-6 text-lg text-white bg-black max-md:px-5">
                All Products
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex relative left-24 flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f7a4f7acdd37b3b546182c223f593ebab9b87bef235cc55f87c86904bb11f35?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain shrink-0 mt-5 max-w-full aspect-[0.75] w-[172px] max-md:mt-10"
                  />
                </div>
                <div className="flex relative left-16 flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f72a76b4eed72798d8cf93a7d2ed34fa499c5e0a44355a245b221feaa8c6fd3e?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain grow shrink-0 mt-52 max-w-full aspect-[0.67] w-[153px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/19a5921eb6e40641a704ad0f60c7b4ecf55bc8cef503dcc071a5d8e49c0dd7f0?placeholderIfAbsent=true&apiKey=627019c5f34d4fc78ec9fb85979650f4"
                    className="object-contain shrink-0 max-w-full aspect-[0.75] w-[203px] max-md:mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserBanner
