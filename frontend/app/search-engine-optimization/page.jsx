
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiTwotoneStar } from "react-icons/ai";

import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const Page = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <div className="process  bg1 bg-fuchsia-950 bg-opacity-95 overflow-hidden" >
                <div className="py-10 md:py-20 mx-2 md:mx-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
                        <div className="md:col-span-2 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start ">
                            <h1 className="text-3xl md:text-6xl text-slate-200 opacity-95 font-semibold ">
                                Why Does Your Business Need <strong className="text-amber-400">SEO Services?</strong>
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-slate-200">
                                Whether you are a small business or a medium-sized firm, without professional <strong className="text-amber-400">SEO services</strong>, you cannot effectively reach your target audience. Here are several reasons why investing in SEO is essential:
                            </p>
                        </div>
                        <div className="positivecard after:bg-amber-400 overflow-hidden before:hover:bg-amber-700 before:rounded-xl rounded-xl bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-amber-200 md:hover:bg-amber-200 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-amber-600 md:hover:border-amber-500  border-r-pink-400 md:border-hidden ">
                            <div className="">
                                <div className="title-inner">
                                    <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-pink-600"> 01 </span>
                                    <h4 className="font-semibold text-xl md:text-2xl text-secondary-800 mb-2 md:mb-4 mt-2">
                                        Target the Right Audience
                                    </h4>
                                </div>
                                <div className="description text-secondary-800 hidden md:block">
                                    ‘Quality over Quantity’ is a critical principle in website traffic. Our <strong className="text-pink-600">industry-focused SEO strategies</strong> allow you to tap into untapped markets and convert visitors into lifetime customers.
                                </div>
                            </div>
                        </div>
                        <div className="positivecard after:bg-amber-400 overflow-hidden before:hover:bg-amber-700 before:rounded-xl rounded-xl bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-amber-200 md:hover:bg-amber-200 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-amber-600 md:hover:border-amber-500  border-r-pink-400 md:border-hidden ">
                            <div className="">
                                <div className="title-inner">
                                    <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-pink-600"> 02 </span>
                                    <h4 className="font-semibold text-xl md:text-2xl text-secondary-800 mb-2 md:mb-4 mt-2">
                                        Enhance User Experience
                                    </h4>
                                </div>
                                <div className="description text-secondary-800 hidden md:block">
                                    <strong className="text-pink-600">SEO</strong> goes beyond just using the right keywords. To build a loyal brand, you must provide your users with an enhanced experience, ensuring they return for more.
                                </div>
                            </div>
                        </div>
                        <div className="positivecard after:bg-amber-400 overflow-hidden before:hover:bg-amber-700 before:rounded-xl rounded-xl bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-amber-200 md:hover:bg-amber-200 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-amber-600 md:hover:border-amber-500  border-r-pink-400 md:border-hidden ">
                            <div className="">
                                <div className="title-inner">
                                    <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-pink-600"> 03 </span>
                                    <h4 className="font-semibold text-xl md:text-2xl text-secondary-800 mb-2 md:mb-4 mt-2">
                                        Affordable and Comprehensive Marketing
                                    </h4>
                                </div>
                                <div className="description text-secondary-800 hidden md:block">
                                    Compared to traditional marketing methods, <strong className="text-pink-600">SEO</strong> is both affordable and highly effective. It offers a comprehensive approach to reach your marketing goals without breaking the bank.
                                </div>
                            </div>
                        </div>
                        <div className="positivecard after:bg-amber-400 overflow-hidden before:hover:bg-amber-700 before:rounded-xl rounded-xl bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-amber-200 md:hover:bg-amber-200 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-amber-600 md:hover:border-amber-500  border-r-pink-400 md:border-hidden ">
                            <div className="">
                                <div className="title-inner">
                                    <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-pink-600"> 04 </span>
                                    <h4 className="font-semibold text-xl md:text-2xl text-secondary-800 mb-2 md:mb-4 mt-2">
                                        Achieve First-Page Rankings
                                    </h4>
                                </div>
                                <div className="description text-secondary-800 hidden md:block">
                                    Studies show that 90% of users do not go beyond the first page of search results. To improve your ROI, it is crucial to secure a spot on the first page.
                                </div>
                            </div>
                        </div>
                        <div className="positivecard  after:bg-amber-400 overflow-hidden before:hover:bg-amber-700 before:rounded-xl rounded-xl bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-amber-200 md:hover:bg-amber-200 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-amber-600 md:hover:border-amber-500  border-r-pink-400 md:border-hidden ">
                            <div className="">
                                <div className="title-inner">
                                    <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-pink-600"> 05 </span>
                                    <h4 className="font-semibold text-xl md:text-2xl text-secondary-800 mb-2 md:mb-4 mt-2">
                                        Boost Your Online Visibility
                                    </h4>
                                </div>
                                <div className="description text-secondary-800 hidden md:block">
                                    Improving your online visibility not only helps in being recognized as a reliable brand but also generates high volumes of leads and sales.
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start ">
                            <Image src='/bg/seo-bg.png' alt='seo' width={400} height={400} />
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg15'>
            <div class="py-10 md:py-20 mx-2 md:mx-20">
    <div class="container mx-auto py-10 md:py-20">
        <div class="text-center md:text-left mb-8">
            <h2 class="text-3xl md:text-4xl font-semibold">
                Unlock the Power of Google's <strong className='text-green-500'>#1 Ranking</strong>
            </h2>
            <div class="separator flex justify-center md:justify-start mt-4">
                <ul class="flex space-x-2">
                    <li class="w-2 h-2 bg-gray-800 rounded-full"></li>
                    <li class="w-2 h-2 bg-gray-800 rounded-full"></li>
                    <li class="w-2 h-2 bg-gray-800 rounded-full"></li>
                </ul>
            </div>
        </div>

        <div class="space-y-8">
            <div class="seoben">
                <h3 class="flex items-center gap-1 text-xl md:text-2xl font-semibold text-gray-800">
                    <AiTwotoneStar />

                    Boost Brand Authority & Trust
                </h3>
                <p class="mt-4 text-lg text-gray-700">
                    Securing the top spot on Google establishes your brand as an authority in your industry, instilling trust and credibility among potential customers.
                </p>
            </div>
            <div class="seoben">
                <h3 class="flex items-center gap-1 text-xl md:text-2xl font-semibold text-gray-800">
                    <AiTwotoneStar />

                    Dominate Targeted Search Queries
                </h3>
                <p class="mt-4 text-lg text-gray-700">
                    Ranking #1 allows you to capture the lion's share of clicks for relevant keywords, ensuring maximum visibility and traffic for your website.
                </p>
            </div>
            <div class="seoben">
                <h3 class="flex items-center gap-1 text-xl md:text-2xl font-semibold text-gray-800">
                    <AiTwotoneStar />

                    Drive High-Quality Organic Traffic
                </h3>
                <p class="mt-4 text-lg text-gray-700">
                    Organic search traffic from top Google rankings brings highly qualified visitors to your site, resulting in better engagement and conversion rates.
                </p>
            </div>
            <div class="seoben">
                <h3 class="flex items-center gap-1 text-xl md:text-2xl font-semibold text-gray-800">
                    <AiTwotoneStar />

                    Stay Ahead of Competitors
                </h3>
                <p class="mt-4 text-lg text-gray-700">
                    Maintaining top rankings ensures you outpace competitors, capturing market share and attracting customers before they do.
                </p>
            </div>
            <div class="seoben">
                <h3 class="flex items-center gap-1 text-xl md:text-2xl font-semibold text-gray-800">
                    <AiTwotoneStar />

                    Maximize ROI with Long-Term Results
                </h3>
                <p class="mt-4 text-lg text-gray-700">
                    Investing in SEO yields sustainable returns over time, delivering ongoing business growth and a higher return on investment compared to traditional marketing methods.
                </p>
            </div>
        </div>
    </div>
</div>


            </div>


            <section className='px-2 md:px-10 py-2 md:py-28 pt-10 bg17'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-10">
                    <div className="md:col-span-2 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">
                        <h1 className="text-3xl md:text-6xl text-slate-100 opacity-95 font-semibold">
                            What <strong className="text-pink-600">We Do</strong>
                        </h1>
                        <p className="mt-4 text-slate-100">
                            At Atechseva, we specialize in delivering top-notch digital marketing services designed to elevate your online presence. Our key offerings include <strong className="text-pink-600">On-Page SEO</strong> to optimize your website's content and structure, <strong className="text-pink-600">Social Media Marketing</strong> to enhance your brand's reach and engagement on social platforms, and <strong className="text-pink-600">Google Map Listing</strong> to improve your local search visibility. Partner with us to ensure your project’s success and achieve remarkable results.
                        </p>
                    </div>
                    <div className="bg-white shadow-md group rounded-lg  positivecard positivecardimg hover:after:bg-pink-500 hover:after:opacity-30 hover:after:w-40 hover:after:h-32 hover:before:bg-pink-500 overflow-hidden p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-2">
                        <div className='flex items-center gap-6 mb-6'>
                            <Image src='/bg/on-page-seo.png' alt='On-Page SEO' width={140} height={140} className=" !group-hover:bg-none !group-hover:border-none transition-filter duration-300 ease-in-out" />
                            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-pink-800">On-Page SEO</h3>
                        </div>
                        <p className="leading-6">Optimize your website’s content and structure for better search engine rankings and user experience.</p>
                    </div>
                    <div className="bg-white shadow-md group rounded-lg group positivecard positivecardimg hover:after:bg-pink-500 hover:after:opacity-30 hover:after:w-40 hover:after:h-32 hover:before:bg-pink-500 overflow-hidden p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-2">
                        <div className='flex items-center gap-6 mb-6'>
                            <Image src='/bg/social-media-marketing.png' alt='Social Media Marketing' width={100} height={100} />
                            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-pink-800">Social Media Marketing</h3>
                        </div>
                        <p className="leading-6">Enhance your brand's reach and engagement across all social media platforms with our expert strategies.</p>
                    </div>
                    <div className="bg-white shadow-md group rounded-lg group positivecard positivecardimg hover:after:bg-pink-500 hover:after:opacity-30 hover:after:w-40 hover:after:h-32 hover:before:bg-pink-500 overflow-hidden p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-2">
                        <div className='flex items-center gap-6 mb-6'>

                            <Image src='/bg/local-business-listing-services.png' alt='Google Map Listing' width={100} height={100} />
                            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-pink-800">Google Map Listing</h3>
                        </div>
                        <p className="leading-6">Improve your local search visibility and attract more customers by optimizing your Google Map listing.</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Page;
