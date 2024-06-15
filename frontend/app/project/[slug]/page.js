"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import './project.scss';
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
export default function Page({ params }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(true);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  //fetch single blog post
  const { data: project, loading, error } = useFetch(`http://localhost:1337/api/projects?populate=*&filters[project_slug][$eq]=${params.slug}`);

  if (error) {
    if (typeof window !== 'undefined') {
      // router.push('/not-found');
    }
    return null;
  }

  if (!project) {
    if (typeof window !== 'undefined') {
      // router.push('/not-found');
    }
    return null;
  }


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


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
        {!loading && project && project.length > 0 && (
          <div id="single-post-detail">
            <div className="">
              {project[0].attributes && project[0].attributes.project_thumbnail && (
                <Image width={600} height={600} src={`http://localhost:1337${project[0].attributes.project_thumbnail.data.attributes.url}`} alt={project[0].attributes.project_title} className="w-full mb-6 rounded-lg"   loading="lazy" />
              )}
              <h1 className="text-2xl !leading-[80px] md:text-5xl font-bold mb-4 ">{project[0].attributes.project_title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: project[0].attributes.project_details }} className="text-lg leading-relaxed mb-6" />
          </div>
        )}


        {/* //feedback  */}
        <div id="comments" className="comments-area space-y-8 my-10">
          <div className="comment-full">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title text-2xl font-semibold mb-4">
                Leave a Reply
                <small>
                  <a
                    rel="nofollow"
                    id="cancel-comment-reply-link"
                    href="/wordpress/axios/best-multipurpose-business-wordpress-theme-2-2/#respond"
                    className="text-sm text-blue-500 hover:underline"
                    style={{ display: "none" }}
                  >
                    Cancel reply
                  </a>
                </small>
              </h3>
              <form
                action="https://demo.rstheme.com/wordpress/axios/wp-comments-post.php"
                method="post"
                id="commentform"
                className="comment-form space-y-6"
                noValidate=""
              >
                <p className="comment-notes text-lg text-gray-600">
                  <span id="email-notes ">
                    Your email address will not be published.
                  </span>
                  <span className="required-field-message ms-2">
                    Required fields are marked <span className="required text-red-500">*</span>
                  </span>
                </p>
                <div className="flex space-x-4">
                  <p className="comment-form-author flex-1">
                    <label htmlFor="author" className="block font-medium text-gray-700">
                      Name <span className="required text-red-500">*</span>
                    </label>
                    <input
                      id="author"
                      placeholder="Name*"
                      name="author"
                      type="text"
                      className="mt-1 block w-full py-4 px-3 focus:outline-none border border-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                      defaultValue=""
                      size={30}
                      maxLength={245}
                      autoComplete="name"
                      required=""
                    />
                  </p>
                  <p className="comment-form-email flex-1">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                      Email <span className="required text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      placeholder="Email*"
                      name="email"
                      type="email"
                      className="mt-1 block w-full py-4 px-3 focus:outline-none border border-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                      defaultValue=""
                      size={30}
                      maxLength={100}
                      aria-describedby="email-notes"
                      autoComplete="email"
                      required=""
                    />
                  </p>
                </div>

                <p className="comment-form-comment">
                  <label htmlFor="comment" className="block font-medium text-gray-700">
                    Comment <span className="required text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Comment*"
                    id="comment"
                    name="comment"
                    className="mt-1 block w-full py-4 px-3 focus:outline-none border border-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                    cols={45}
                    rows={8}
                    maxLength={65525}
                    required=""
                    defaultValue={""}
                  />
                </p>
                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    className="submit bg-lime-500 text-white py-3 px-5 rounded-md shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    defaultValue="Post Comment"
                  />
                  <input
                    type="hidden"
                    name="comment_post_ID"
                    defaultValue={9639}
                    id="comment_post_ID"
                  />
                  <input
                    type="hidden"
                    name="comment_parent"
                    id="comment_parent"
                    defaultValue={0}
                  />
                </p>
              </form>
            </div>
          </div>
          {/* #respond */}
        </div>


      </div>
      <div className="w-full md:w-1/4">
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
setTimeout(() => Prism.highlightAll(), 0);
