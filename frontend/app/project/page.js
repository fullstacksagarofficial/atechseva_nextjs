"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import BlogPost from "@/components/blogpost/BlogPost";
import useFetch from "@/hooks/useFetch";
import BlogCardLoader from "@/components/preloader/BlogCardLoader";
import Project from "@/components/projects/Projects";
import PopularPost from "@/components/blogpost/PopularPost";

export default function Page({ params }) {
  const [isHovered, setIsHovered] = useState(true);
  const { data: project, loading, error } = useFetch('http://localhost:1337/api/projects?populate=*');


  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return <>
    <div className="absolute top-0 bg-secondary-900 opacity-85  w-full"></div>
    <div className=" mx-auto md:flex  px-2 md:px-2 lg:px-20 bg-slate-50 py-20 gap-10" >
      <div className="w-full md:w-1/2 lg:w-3/4 mb-10" >
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {loading ? (
            Array.from({ length: 6 }, (_, index) => <BlogCardLoader key={index} />)
          ) : (
            <>
              {Array.isArray(project) && project.map(projectItem => (
                <Project key={projectItem.id} project={projectItem} />
              ))}
            </>
          )}


        </div></div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="md:sticky top-44">
          <section class="bg-gray-100 px-5 py-5 mb-3" id="search_post">
            <h2 class="widget-title font-lg md:text-xl font-bold mb-4">Search Blog...</h2>
            <input type="search" name="" className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-2 rounded-xl ps-5" placeholder="Search Here..." id="" />

          </section>
          <section class="bg-gray-100 px-5 py-5 mb-3" id="popular_category">
            <h2 class="widget-title font-lg md:text-xl font-bold mb-4">Popular Category</h2>
            <ul class="mt-4 flex flex-col">
              <li class="cat-item  mb-2 ">
                <Link
                  href="#"
                  id="card2"
                  className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-3 rounded-xl "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="circle3 z-5 w-5 h-5 hover:bg-amber-400"></div>
                  <div className="top-wrapper flex justify-around w-full items-center">
                    <h4 className="title  ps-5">Creative Brief Ideation</h4>
                    <div>
                      <IoIosArrowRoundForward />

                    </div>
                  </div>
                </Link>
              </li>
              <li class="cat-item  mb-2 ">
                <Link
                  href="#"
                  id="card2"
                  className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-3 rounded-xl "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="circle3 z-5 w-5 h-5 hover:bg-amber-400"></div>
                  <div className="top-wrapper flex justify-around w-full items-center">
                    <h4 className="title  ps-5">Creative Brief Ideation</h4>
                    <div>
                      <IoIosArrowRoundForward />

                    </div>
                  </div>
                </Link>
              </li>
              <li class="cat-item  mb-2 ">
                <Link
                  href="#"
                  id="card2"
                  className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-3 rounded-xl "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="circle3 z-5 w-5 h-5 hover:bg-amber-400"></div>
                  <div className="top-wrapper flex justify-around w-full items-center">
                    <h4 className="title  ps-5">Creative Brief Ideation</h4>
                    <div>
                      <IoIosArrowRoundForward />

                    </div>
                  </div>
                </Link>
              </li>
              <li class="cat-item  mb-2 ">
                <Link
                  href="#"
                  id="card2"
                  className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-3 rounded-xl "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="circle3 z-5 w-5 h-5 hover:bg-amber-400"></div>
                  <div className="top-wrapper flex justify-around w-full items-center">
                    <h4 className="title  ps-5">Creative Brief Ideation</h4>
                    <div>
                      <IoIosArrowRoundForward />

                    </div>
                  </div>
                </Link>
              </li>
              <li class="cat-item  mb-2 ">
                <Link
                  href="#"
                  id="card2"
                  className="services-inner z-10 gap-5 bg-white flex  relative w-full darksoul-card3 border shadow-lg md:shadow-xl px-2 py-3 rounded-xl "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="circle3 z-5 w-5 h-5 hover:bg-amber-400"></div>
                  <div className="top-wrapper flex justify-around w-full items-center">
                    <h4 className="title  ps-5">Creative Brief Ideation</h4>
                    <div>
                      <IoIosArrowRoundForward />

                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
          <section class="bg-gray-100 px-5 py-5 mb-3" id="popular_post">
            <h2 class="widget-title font-lg md:text-xl font-bold mb-4">Popular Post</h2>
            <PopularPost handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
          </section>
          <section class="bg-gray-100 px-5 py-5 mb-3" id="popular_tags">
            <h2 class="widget-title font-lg md:text-xl font-bold mb-4">Popular Tags</h2>
            <div className='flex flex-wrap gap-5 items-center'>
              <div className="services-inner z-10 gap-5 bg-white flex  relative darksoul-card3 border shadow-lg md:shadow-xl p-2 rounded-sm px-5 hover:bg-amber-300 transition-none cursor-pointer " >SEO</div>
              <div className="services-inner z-10 gap-5 bg-white flex  relative darksoul-card3 border shadow-lg md:shadow-xl p-2 rounded-sm px-5 hover:bg-amber-300 transition-none cursor-pointer " >Web Development</div>
              <div className="services-inner z-10 gap-5 bg-white flex  relative darksoul-card3 border shadow-lg md:shadow-xl p-2 rounded-sm px-5 hover:bg-amber-300 transition-none cursor-pointer " >Marketing</div>
              <div className="services-inner z-10 gap-5 bg-white flex  relative darksoul-card3 border shadow-lg md:shadow-xl p-2 rounded-sm px-5 hover:bg-amber-300 transition-none cursor-pointer " >Software Developement</div>
              <div className="services-inner z-10 gap-5 bg-white flex  relative darksoul-card3 border shadow-lg md:shadow-xl p-2 rounded-sm px-5 hover:bg-amber-300 transition-none cursor-pointer " >Mobile App</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>;
}
