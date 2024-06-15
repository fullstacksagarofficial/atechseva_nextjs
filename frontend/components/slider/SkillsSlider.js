'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './skillsslider.scss';
import Image from "next/image";
export default function SkillsSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // define breakpoint for medium devices
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600, // define breakpoint for small devices
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400, // define breakpoint for small devices
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div className="bg-amber-400">
      <Slider {...settings}>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">PHP WEBSITE DEVELOPEMENT</h3>
            <div>
            <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">WEBSITE DESIGNING</h3>
            <div>
             <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">WEBSITE DEVELOPEMENT</h3>
            <div>
             <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">MERN DEVELOPMENT</h3>
            <div>
             <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">ON-PAGE SEO </h3>
            <div>
             <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">WEBSITE OPTIMIZATION</h3>
            <div>
             <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around flex-nowrap whitespace-nowrap py-5 md:py-10 w-full items-center">
            <h3 className="whitespace-nowrap text-sm sm:text-md md:text-2xl font-semibold font-space">WEBSITE REDEVELOPMENT</h3>
            <div>
             <Image src='/illustrations/chorki.png' alt="Img" width={25} height={25} className="sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />

            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}