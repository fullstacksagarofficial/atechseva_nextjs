
"use client"
import React, { useState } from 'react';

import WorkProcess from '@/components/workprocess/WorkProcess';
import Image from 'next/image';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { GoArrowDown } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import AboutLayout from './AboutLayout';


const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <li className=" border-dashed border-b-2 select-none">
    <div
      className={`p-6 md:py-10 cursor-pointer flex justify-between items-center transition-colors duration-300 ${isOpen ? 'border-l-4 border-amber-500' : ' '}`}
      onClick={onToggle}
    >
      <div className="flex items-center">
        {isOpen ? <IoMdHeart className="mr-3 text-amber-500 " /> : <IoMdHeartEmpty className="mr-3 text-amber-500 " />}

        <span className={`font-semibold text-lg  ${isOpen ? 'border-b-2 border-secondary-800' : ''}`}  >{title}</span>
      </div>
      <span className="text-xl">{isOpen ? <span className="p-3 bg-amber-400 text-secondary-900 rounded-full  flex items-center justify-center"><GoArrowDown className='text-secondary-900' /></span> : <span className="p-3 bg-amber-400 text-secondary-900 rounded-full  flex items-center justify-center opacity-45"><GoArrowRight className='text-secondary-900' /></span>}</span>
    </div>
    {isOpen && (
      <div className="p-6  border-t border-gray-200 transition-all duration-300 ease-in-out leading-9">
        {content}
      </div>
    )}
  </li>
);


const Page = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AboutLayout>
      <section className='px-2 md:px-10 py-2 md:py-28 pt-10  bg12'>
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4  gap-3 md:gap-10">
          <div className="md:col-span-2 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">
            <h1 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold ">
              Discover the Benefits of <strong className="text-pink-600"> ATECHSEVA ? </strong>
            </h1>
            <p className="mt-4">Discover the key advantages of working with Atechseva. We offer a range of benefits that ensure your project's success and exceed your expectations.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1 ">
            <Image src='/icons/satisfaction.png' alt='' width={40} height={40} className="transition-filter duration-300 ease-in-out "
            />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">100% Satisfaction</h3>
            <p className="leading-6">Our commitment is to exceed your expectations with every project.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/experience.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">4+ Years of Experience</h3>
            <p className="leading-6">Leverage our extensive experience in the industry to achieve your business goals.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/friendly.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Mobile-Friendly Web Design</h3>
            <p className="leading-6">We create responsive websites that look great on any device.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/Pocket-Friendly.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Pocket-Friendly Solutions</h3>
            <p className="leading-6">Quality services at affordable prices.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/quality-work.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Quality Work</h3>
            <p className="leading-6">We deliver high-quality, professional websites that reflect your brand.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/clean-code.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Clean Code</h3>
            <p className="leading-6">Our code is well-written and easy to maintain.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/reliability.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Reliability</h3>
            <p className="leading-6">Dependable services that you can count on.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/rocket.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Fast Start</h3>
            <p className="leading-6">Quick project initiation to get your website up and running.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/Hassle-Free-Experience.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Hassle-Free Experience</h3>
            <p className="leading-6">We handle everything, so you can focus on your business.</p>
          </div>
          <div className="bg-white shadow-md group  rounded-lg positivecard p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/Fast-Loading-Websites.png' alt='' width={40} height={40} />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Fast Loading Websites</h3>
            <p className="leading-6">Optimized for speed to enhance user experience and SEO.</p>
          </div>
        </div>
      </section>
      <div className="md:flex w-100 px-4 md:px-12 py-5 md:py-12 gap-4 md:gap-8 bg8">
        <div className="md:sticky mb-10 top-40 h-full  md:block md:w-2/5 overflow-hidden  rounded-3xl ">
          <div className=''>
            <Image src='/bg/sagar-kumar.png' width={400} height={600} alt='' className='w-full rounded-3xl shadow-xl hover:scale-105 transition-all ' />
          </div>
        </div>
        <div className="md:w-3/5 overflow-hidden ">
          <h1 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold mb-10">
            Meet  <strong className="text-pink-600"> Sagar Kumar </strong>:  The Visionary  Behind Atechseva
          </h1>
          <ul className=" overflow-hidden ">
            <AccordionItem
              title="Who I am ?"
              isOpen={openIndex === 0}
              onToggle={() => toggleItem(0)}
              content={(
                <>
                  <p className="mb-4">
                    I’m Sagar Kumar, an India-based <strong className="text-green-600">PHP</strong> & <strong className="text-green-600">MERN Web Developer</strong> with over 4 years of experience in both the corporate world and as a freelance web developer. My professional journey as a <a href="/website-design-and-development" className="text-blue-500 underline">PHP Website Developer & Designer</a> has equipped me with the skills to create influential user experiences that drive traffic, generate leads, and accelerate organizational growth.
                  </p>
                  <p>
                    I specialize in converting Adobe Photoshop designs (PSD) into well-written, SEO-friendly HTML5 and CSS3 code that is clean, pixel-perfect, and adheres to current design standards. My goal is to deliver world-class solutions that fit within your budget. Throughout my career, I have honed my expertise in <strong className="text-green-600">PHP</strong>, <strong className="text-green-600">MySQL</strong>, <strong className="text-green-600">MongoDB</strong>, <strong className="text-green-600">Express.js</strong>, <strong className="text-green-600">React JS</strong>, <strong className="text-green-600">Node.js</strong>, and <strong className="text-green-600">Next.js</strong>. Whether you're looking for a freelance PHP Developer or a Single Page Web Application, feel free to reach out to me at <a href="mailto:example@example.com" className="text-blue-500 underline">example@example.com</a>.
                  </p>

                </>
              )}
            />
            <AccordionItem
              title="Why Choose Atechseva ?"
              isOpen={openIndex === 1}
              onToggle={() => toggleItem(1)}
              content={(
                <>
                  <p className="mb-4">
                    At Atechseva, we prioritize every aspect of web design and development to ensure your website not only looks stunning but also performs exceptionally well. Our focus on layout, color, graphics, fonts, and SEO-friendly content ensures that your website ranks easily in search engines, driving traffic and growth for your business. Whether you need web development, web design, or SEO services, we offer a comprehensive solution under one roof for your convenience.
                  </p>

                  <p className="mt-6">
                    Connect with us today to elevate your online presence and grow your business. We are here to provide exceptional solutions tailored to your needs.
                  </p>
                </>
              )}
            />
            <AccordionItem
              title="My Vision"
              isOpen={openIndex === 2}
              onToggle={() => toggleItem(2)}
              content={(
                <>
                  <section id="vision" className="py-4">
                    <p className="mb-4">
                      Atechseva is not a traditional brick-and-mortar company; it is an online brand that represents me, Sagar Kumar, a dedicated Freelance Designer and Developer. My mission is to create innovative and visually appealing websites that provide an exceptional user experience and rank well on Google to help grow your business. I offer cost-effective Website Development and SEO Services tailored to meet your needs.
                    </p>
                    <p className="mb-4">
                      In my design process, I emphasize the importance of layout, color, graphics, fonts, and SEO-friendly content to ensure that your website ranks easily in search engines. I am committed to helping you grow your business, whether you need web development, web design, SEO, or customized programming. By keeping every project under one roof, I make the process convenient and seamless for my clients.
                    </p>
                    <p className="mb-4">
                      <a href="/seo-service-in-meerut" className="text-blue-500 underline">SEO</a> is integrated into every site I create. Effective SEO begins with thoughtful design. When I develop a new website, my search engine optimization efforts ensure that your site is discoverable. I am dedicated to delivering high-quality work, providing regular client support, and achieving proven results at affordable prices.
                    </p>
                    <p className="mb-4">
                      Unlike many web design companies that promise to complete your project in a single day at a low cost, I offer a more personalized and thorough approach. Many companies treat every web design or development project the same, often using generic templates and poor coding practices, resulting in subpar user experiences and design.
                    </p>
                    <p className="mb-4">
                      Poor user-friendliness and cheap design can hinder your business's success and lead to ongoing issues. It's important to understand that low-cost services often come at the expense of quality and reliability. As a Freelance Web Developer, I provide personalized interaction and attention to detail, ensuring you know the person working on your design and receive a high-quality, timely result.
                    </p>
                    <p>
                      Connect with me today to experience the difference of working with a dedicated freelance professional. Let's elevate your online presence and achieve your business goals together.
                    </p>
                  </section>

                </>
              )}
            />
          </ul>
        </div>


      </div>

      <WorkProcess />
    </AboutLayout >
  );
};

export default Page;
