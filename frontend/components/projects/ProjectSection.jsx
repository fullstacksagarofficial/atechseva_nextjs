import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from './Projects';
import useFetch from '@/hooks/useFetch';
import Preloader from '../preloader/Preloader';

const ProjectSection = () => {
  const { data: project, loading } = useFetch('http://localhost:1337/api/projects?populate=*');


  var settings = {
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="px-3 md:px-5 lg:px-20 my-10 md:my-20 mx-auto bg8">
        <div className="flex justify-between">
          <div className="relative w-max ">
            <h4 className="text-center relative text-3xl md:text-6xl mb-10 md:mb-20 font-bold text animatertext z-10" >
              Popular <span className="text-amber-400">Projects</span>
            </h4>
            <Image width={50} height={50} src="/illustrations/yellow-underline.webp" alt="" className="absolute top-0 md:-top-1 z-0 md:right-0 -right-2 w-28 md:w-44" />
          </div>
          <div>
            <Link href={`/projects`}>
              <button className="viewall relative mx-auto px-4 py-2 transition-all duration-200 ease-in-out border-none bg-none cursor-pointer flex items-center">
                <span className="relative tracking-wide text-md md:text-lg text-[#180a02]">View All</span>
                <svg className="relative ml-2 fill-none stroke-current text-[#fbbf24] stroke-2 transition-all duration-300 ease-in-out transform -translate-x-1 hover:text-[#222222] hover:translate-x-0" width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* <Preloader /> */}


        {loading ? (
          <div className="flex mx-4 group flex-wrap justify-between">
            <Preloader />
            <Preloader />
            <Preloader />
            <Preloader />
          </div>
        ) : (
          <Slider className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" {...settings}>
            {Array.isArray(project) && project.map(project => (
              <Project
                key={project.id}
                project={project}
              />
            ))}
          </Slider>
        )}



      </div>
    </>
  );
};

export default ProjectSection;
