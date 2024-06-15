import React from 'react'
import './services.scss'
import Image from 'next/image'
import Link from 'next/link'
const Services = () => {
  return (
    <section className='px-2 md:px-10 py-2 md:py-28 pt-10  ' id='services'>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4  gap-3 md:gap-10">

        <div className="md:col-span-2 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">
          <h1 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold ">
            Explore unique <br /><strong className="text-pink-600"> digital agency </strong> service
          </h1>
          <p className="mt-4">Unlock your digital potential with our freelance website development services. We blend innovation, strategy, and expertise to craft captivating online experiences that drive connections and ensure your success.</p>
        </div>
        <div className=" px-1 py-1 md:px-3 md:my-3 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="bg-white cursor-pointer select-none relative rounded-3xl shadow-2xl border-3 overflow-hidden transform transition-transform hover:scale-100 md:hover:scale-105 hover:border-r-4 hover:border-l-4 md:hover:border-r-8 hover:border-r-amber-400 md:hover:border-l-8 hover:border-l-amber-400 ">

            <Link href='/website-design-and-development'>

              <div className="p-2 ">
                <div className="flex md:items-center md:justify-around items-center justify-center flex-col md:flex-row mb-2 md:my-4">
                  <Image width={70} height={70} src="/gif/web-designing.gif" alt="Web Designing" className="w-20  md:w-24 md:h-24" />
                  <div>
                    <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-2 font-space text-center md:text-start xl:text-start  lg:text-start hover:text-amber-400">Web Designing <br /> and Development</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
        <div className=" px-1 py-1 md:px-3 md:my-3 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="bg-white cursor-pointer select-none relative rounded-3xl shadow-2xl border-3 overflow-hidden transform transition-transform hover:scale-100 md:hover:scale-105 hover:border-r-4 hover:border-l-4 md:hover:border-r-8 hover:border-r-amber-400 md:hover:border-l-8 hover:border-l-amber-400 ">
            <Link href='/search-engine-optimization'>

              <div className="p-2 ">
                <div className="flex md:items-center md:justify-around items-center justify-center flex-col md:flex-row mb-2 md:my-4">
                  <Image width={70} height={70} src="/gif/page-optimization.gif" alt="Web Designing" className="w-20  md:w-24 md:h-24" />
                  <div>
                    <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-2 font-space text-center md:text-start xl:text-start  lg:text-start hover:text-amber-400">Search Engine <br />  Optimization</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" px-1 py-1 md:px-3 md:my-3 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="bg-white cursor-pointer select-none relative rounded-3xl shadow-2xl border-3 overflow-hidden transform transition-transform hover:scale-100 md:hover:scale-105 hover:border-r-4 hover:border-l-4 md:hover:border-r-8 hover:border-r-amber-400 md:hover:border-l-8 hover:border-l-amber-400  ">

            <div className="p-2 ">
              <div className="flex md:items-center md:justify-around items-center justify-center flex-col md:flex-row mb-2 md:my-4">
                <Image width={70} height={70} src="/gif/ecom.gif" alt="Web Designing" className="w-20  md:w-24 md:h-24" />
                <div>
                  <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-2 font-space text-center md:text-start xl:text-start  lg:text-start hover:text-amber-400">E-commerce  <br />  Solutions</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-1 py-1 md:px-3 md:my-3 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="bg-white cursor-pointer select-none relative rounded-3xl shadow-2xl border-3 overflow-hidden transform transition-transform hover:scale-100 md:hover:scale-105 hover:border-r-4 hover:border-l-4 md:hover:border-r-8 hover:border-r-amber-400 md:hover:border-l-8 hover:border-l-amber-400 ">

            <Link href='/online-food-ordering-system'>

              <div className="p-2 ">
                <div className="flex md:items-center md:justify-around items-center justify-center flex-col md:flex-row mb-2 md:my-4">
                  <Image width={70} height={70} src="/gif/online-food.gif" alt="Web Designing" className="w-20  md:w-24 md:h-24" />
                  <div>
                    <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-2 font-space text-center md:text-start xl:text-start  lg:text-start hover:text-amber-400">Online Food <br /> Ordering System</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" px-1 py-1 md:px-3 md:my-3 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="bg-white cursor-pointer select-none relative rounded-3xl shadow-2xl border-3 overflow-hidden transform transition-transform hover:scale-100 md:hover:scale-105 hover:border-r-4 hover:border-l-4 md:hover:border-r-8 hover:border-r-amber-400 md:hover:border-l-8 hover:border-l-amber-400 ">
            <Link href='/human-resource-management-system'>
              <div className="p-2 ">
                <div className="flex md:items-center md:justify-around items-center justify-center flex-col md:flex-row mb-2 md:my-4">
                  <Image width={70} height={70} src="/gif/hr.gif" alt="Web Designing" className="w-20  md:w-24 md:h-24" />
                  <div>
                    <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-2 font-space text-center md:text-start xl:text-start  lg:text-start hover:text-amber-400">Human Resource <br /> Management System</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" px-1 py-1 md:px-3 md:my-3 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <div className="bg-white cursor-pointer select-none relative rounded-3xl shadow-2xl border-3 overflow-hidden transform transition-transform hover:scale-100 md:hover:scale-105 hover:border-r-4 hover:border-l-4 md:hover:border-r-8 hover:border-r-amber-400 md:hover:border-l-8 hover:border-l-amber-400 ">
          <Link href='/portal-developement'>

            <div className="p-2 ">
              <div className="flex md:items-center md:justify-around items-center justify-center flex-col md:flex-row mb-2 md:my-4">
                <Image width={70} height={70} src="/gif/portal-development.gif" alt="Web Designing" className="w-20  md:w-24 md:h-24" />
                <div>
                  <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl font-bold mb-2 font-space text-center md:text-start xl:text-start  lg:text-start hover:text-amber-400">Custom <br /> Portal Development</h2>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services