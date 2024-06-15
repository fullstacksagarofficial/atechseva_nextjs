"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import BlogPost from "@/components/blogpost/BlogPost";
import useFetch from "@/hooks/useFetch";
import BlogLoader from "@/components/preloader/BlogLoader";
import BlogCardLoader from "@/components/preloader/BlogCardLoader";
import PopularPost from "@/components/blogpost/PopularPost";
import SearchBlog from "@/components/blogpost/SearchBlog";

export default function Page({ params }) {
  const [isHovered, setIsHovered] = useState(true);
  const { data: blog, loading, error } = useFetch('http://localhost:1337/api/blogs?populate=*');


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
              {Array.isArray(blog) && blog.map(blogItem => (
                <BlogPost key={blogItem.id} blog={blogItem} />
              ))}
            </>
          )}


        </div></div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="md:sticky top-44">
          <section class="bg-gray-100 px-5 py-5 mb-3" id="search_post">
          <SearchBlog/>
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
