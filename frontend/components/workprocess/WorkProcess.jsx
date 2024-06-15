import React, { useEffect, useRef, useState } from 'react'
import ContactAnimated from '../button/ContactAnimated'

import Link from 'next/link';

const WorkProcess = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <section className='px-2 md:px-10 py-2 md:py-28 pt-10  '>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2  gap-3 md:gap-10">
        <div className="md:col-span-1 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">

          <h4 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold text animatertext " >
            The work process of  <br /><strong className="text-pink-500"> our company </strong>
          </h4>

          <p className="mt-4 mb-10">Empowering your online journey with captivating digital experiences that not only captivate audiences but also forge meaningful connections. Our digital company seamlessly blends innovation, strategic prowess, and expert craftsmanship to propel your success in the virtual realm.</p>


          <div className="flex justify-center m-auto w-full h-full mt-4 md:mt-14">
            <ContactAnimated text=' #1 Website Service' charclassName='process' />
          </div>

        </div>
        <div className="md:col-span-1 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start md:max-h-[35rem] px-10 pinkscroll overflow-auto  gap-5">
          <Link
            href="#"
            id="card1"
            className={`services-inner gap-5 darksoul-card3 border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse ${isHovered ? 'hover-active' : ''}`}
          >
            <div className="circle3"></div>
            <div className="count_number text-xl md:text-5xl font-bold mb-2">01</div>
            <div>
              <div className="top-wrapper">
                <h4 className="title md:text-2xl text-lg font-semibold mb-2">Research and Strategy</h4>
              </div>
              <div className="bottom-wrapper">
                <div className="desc-text text-sm md:text-lg">Conduct thorough market research of the target audience behaviors</div>
              </div>
            </div>
          </Link>

          <Link
            href="#"
            id="card2"
            className="services-inner gap-5 darksoul-card3 border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle3"></div>
            <div className="count_number text-xl md:text-5xl font-bold mb-2">02</div>
            <div>
              <div className="top-wrapper">
                <h4 className="title md:text-2xl text-lg font-semibold mb-2">Creative Brief Ideation</h4>
              </div>
              <div className="bottom-wrapper">
                <div className="desc-text text-sm md:text-lg">Once the strategy is in place, the creative team collaborates to develop</div>
              </div>
            </div>
          </Link>

          <Link
            href="#"
            id="card2"
            className="services-inner gap-5 darksoul-card3 border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle3"></div>
            <div className="count_number text-xl md:text-5xl font-bold mb-2">03</div>
            <div>
              <div className="top-wrapper">
                <h4 className="title md:text-2xl text-lg font-semibold mb-2">Creative Brief Ideation</h4>
              </div>
              <div className="bottom-wrapper">
                <div className="desc-text text-sm md:text-lg">Once the strategy is in place, the creative team collaborates to develop</div>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            id="card2"
            className="services-inner gap-5 darksoul-card3 border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle3"></div>
            <div className="count_number text-xl md:text-5xl font-bold mb-2">04</div>
            <div>
              <div className="top-wrapper">
                <h4 className="title md:text-2xl text-lg font-semibold mb-2">Creative Brief Ideation</h4>
              </div>
              <div className="bottom-wrapper">
                <div className="desc-text text-sm md:text-lg">Once the strategy is in place, the creative team collaborates to develop</div>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            id="card2"
            className="services-inner gap-5 darksoul-card3 border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle3"></div>
            <div className="count_number text-xl md:text-5xl font-bold mb-2">05</div>
            <div>
              <div className="top-wrapper">
                <h4 className="title md:text-2xl text-lg font-semibold mb-2">Creative Brief Ideation</h4>
              </div>
              <div className="bottom-wrapper">
                <div className="desc-text text-sm md:text-lg">Once the strategy is in place, the creative team collaborates to develop</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess