import React from 'react'
import NookNestLogo from '../../../assets/images/logos/NookNest logo.svg'

const Footer = () => {
  return (
    <div>
      <div className="shrink-0 mt-20 mr-3 ml-2.5 max-w-full h-px border border-black border-solid w-[1229px] max-md:mt-10 max-md:mr-2.5" />
        <div className="flex flex-wrap gap-5 justify-between mt-5 w-full max-w-[1188px] max-md:max-w-full">
          <div className="flex gap-2 my-auto font-bold whitespace-nowrap">

            <img src={NookNestLogo} alt="NookNestLogo" />
            
          <div className="flex flex-wrap gap-10 text-sm text-black max-md:max-w-full">
            <div className="flex flex-col self-start">
              <div className="self-start text-base font-bold">Shop</div>
              <div className="mt-5 max-md:mr-0.5">Living Room</div>
              <div className="mt-3.5">Dining Room</div>
              <div className="self-start mt-3.5">Bedroom</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="self-stretch text-base font-bold">
                Customer Support
              </div>
              <div className="mt-5">Help & FAQs</div>
              <div className="mt-3.5">Shipping & Delivery</div>
              <div className="mt-2.5">Returns & Refunds</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="self-stretch text-base font-bold">
                Stay Connected
              </div>
              <div className="mt-5">Instagram</div>
              <div className="mt-3.5">Facebook</div>
              <div className="mt-2.5">Pinterest</div>
            </div>
            <div className="flex flex-col">
              <div className="self-start text-base font-bold">Contact</div>
              <div className="self-start mt-5">9080092920</div>
              <div className="mt-2.5 max-md:mr-0.5">
                shamsheedhopz0786@gmail.com
              </div>
              <div className="mt-2.5">123 Furniture Street, Brooklyn, NY</div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
