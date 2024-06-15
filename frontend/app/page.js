
"use client"
import React, { useState } from 'react';

import SkillsSlider from '@/components/slider/SkillsSlider';
import Header from '@/components/header/Header';
import Services from '@/components/services/Services';
import WorkProcess from '@/components/workprocess/WorkProcess';
import BlogSection from '@/components/blogpost/BlogSection';
import Image from 'next/image';
import ProjectSection from '@/components/projects/ProjectSection';

const Page = () => {
  const initialPosition = { x: 0, y: 0 };
  const [position, setPosition] = useState(initialPosition);

  const handleMouseMove = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseOut = () => {
    setPosition(initialPosition);
  };
  return (
    <div>
      <header className={`l header    z-[99]`}>
        <div className="w-full   md:flex justify-between items-center">
          <div className="md:w-1/2 mx-8 md:mx-20 md:my-10">
            <div className="relative">
              <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-800">Expert Freelance <span class="text-amber-400">Website</span> Developer</h1>
              <div className="absolutediv absolute -right-14 -top-10">
                <Image width={100} height={100} src="/illustrations/s1.png" alt="call us" />
              </div>
            </div>

            <p className="mt-10 text-xl">Crafting exceptional brands, products, and web solutions for startups and enterprises.</p>
            <div class="mt-6 relative overflow-hidden">
              <button class="px-5 py-3 md:px-8 md:py-5 rounded-xl before:border-2 before:absolute before:-top-2 before:-left-2  before:rounded-full before:w-0 before:h-0 hover:before:h-6
hover:before:w-6  md:hover:before:h-10 md:hover:before:w-10 hover:before:bg-amber-300 transition-all ease-in-out  hover:before:duration-500  shadow-lg border bg-amber-400 text-lg hover:bg-secondary-800 hover:text-amber-100 group">
                Get Started Now
              </button>
            </div>
          </div>

          <div className="md:w-1/2 justify-end flex relative" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} style={{ perspective: '800px' }}>
            <div className="image-container" style={{ transition: 'transform 0.2s ease-in-out' }}>
              <Image width={600} height={800} src='/illustrations/software-enginner.png' alt='best-developement-company' style={{ transform: `rotateY(${position.x / 10}deg) rotateX(${-position.y / 10}deg)` }} />
            </div>
          </div>
        </div>
      </header>
      <Services />
      <ProjectSection />
      <BlogSection />
      <WorkProcess />
    </div>
  );
};

export default Page;
