"use client"
import React, { useEffect, useRef } from 'react';

import ContactAnimated from '../button/ContactAnimated';
import Image from 'next/image';

const Call = () => {
  
  return (
    <div className="px-2 md:px-10 py-20 md:py-32 overflow-hidden" id="call">
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:gap-1 md:justify-around">
        <div className="relative">
          <h4 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-start text-gray-900 font-bold leading-[9rem] !leading-normal text animatertext" >
            Let’s talk about a <span className="text-pink-500">project,</span>  <br /> collaboration or an idea  <br /> you may have
          </h4>
          <div className="absolutediv absolute -right-24 top-0">
            <Image width={100} height={100} src="/illustrations/s1.png" alt="call us" />
          </div>
        </div>
        <ContactAnimated text="5 Year Of Experience" charClassName="call" />
      </div>
    </div>
  );
};

export default Call;
