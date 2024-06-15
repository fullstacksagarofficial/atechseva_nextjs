"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import './blog.scss';
import Prism from "prismjs";
import "prismjs/themes/prism.min.css"; // Dark theme
import "prismjs/themes/prism-okaidia.css"; // Dark theme
import "prismjs/plugins/toolbar/prism-toolbar.css"; // Importing toolbar CSS
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
import useFetch from "@/hooks/useFetch";
import ImagePreloader from "@/components/preloader/ImagePreloader";
import BlogLoader from "@/components/preloader/BlogLoader";
import { useRouter } from "next/navigation";
import PopularPost from "@/components/blogpost/PopularPost";
import BlogTag from "@/components/blogpost/BlogTags";
import SearchBlog from "@/components/blogpost/SearchBlog";
import CommentForm from "@/components/blogpost/CommentForm";
import CommentSection from "@/components/blogpost/CommentSection";
export default function Page({ params }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(true);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  //fetch single blog post
  const { data: blog, loading, error } = useFetch(`http://localhost:1337/api/blogs?populate=*&filters[slug][$eq]=${params.slug}`);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return <>
    <div className="absolute top-0 bg-secondary-900 opacity-85  w-full"></div>
    <div className=" mx-auto md:flex  px-4 md:px-20 bg-slate-50 py-20 gap-10" >
      <div className="w-full md:w-3/4 mb-10" >


        {loading && <BlogLoader />}
        {!loading && blog && blog.length > 0 && (
          <>
            <div id="single-post-detail">
              <div className="">
                {blog[0].attributes && blog[0].attributes.image && (
                  <Image width={600} height={600} src={`http://localhost:1337${blog[0].attributes.image.data.attributes.url}`} alt={blog[0].attributes.blog_title} className="w-full mb-6 rounded-lg" loading="lazy" />
                )}
                <h1 className="text-2xl !leading-[80px] md:text-5xl font-bold mb-4 ">{blog[0].attributes.blog_title}</h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: blog[0].attributes.details }} className="text-lg leading-relaxed mb-6" />

              {blog[0].attributes.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 me-3 text-sm font-semibold text-gray-700">
                  #{tag.name}
                </span>
              ))}
            </div>
            <CommentForm blog={blog[0].attributes.id} />

           <CommentSection blog={blog[0].attributes.id} />
          </>
        )}



      </div>
      <div className="w-full md:w-1/4">
        <div className="md:sticky top-44">
          <section class="bg-gray-100 px-5 py-5 mb-3" id="search_post">
            <SearchBlog />
          </section>
          <section class="bg-gray-100 px-5 py-5 mb-3" id="popular_post">
            <h2 class="widget-title font-lg md:text-xl font-bold mb-4">Popular Post</h2>
            <PopularPost handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
          </section>
          <section class="bg-gray-100 px-5 py-5 mb-3" id="popular_tags">
            <h2 class="widget-title font-lg md:text-xl font-bold mb-4">Popular Tags</h2>
            <div className='flex flex-wrap gap-2 items-center'>
              <BlogTag />
            </div>
          </section>
        </div>
      </div>
    </div>
  </>;
}
setTimeout(() => Prism.highlightAll(), 0);
