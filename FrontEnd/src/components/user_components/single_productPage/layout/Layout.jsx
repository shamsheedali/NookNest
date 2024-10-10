import React from 'react'
import Navbar from '../../../user_components/user_navbar/Navbar'
import Footer from '../../../user_components/user_footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="flex overflow-hidden flex-col  px-16 pt-12 pb-8 bg-zinc-50 bg-opacity-90 max-md:px-5">
      <Navbar />
      <main className="mt-20 w-full max-w-[1188px] max-md:mt-10 max-md:max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
