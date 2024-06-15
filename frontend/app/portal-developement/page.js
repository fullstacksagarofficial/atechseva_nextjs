
"use client"
import './page.scss'
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactAnimated from '@/components/button/ContactAnimated';
import { GoArrowDown, GoArrowRight } from 'react-icons/go';
import { IoArrowForwardCircleOutline } from "react-icons/io5";







const faqData = [
  {
    question: 'What is Web Portal Development?',
    answer: (
      <>
        <p>
          Web portal development offers an end-to-end solution for creating secure and user-friendly digital platforms that serve as centralized hubs for customers, partners, and employees. These portals empower users with self-service capabilities, providing access to a diverse range of services, products, information, and communication tools.

          A web service portal serves as a comprehensive platform designed to facilitate seamless communication between agents and clients or customers. It boasts an intuitive interface and interactive analytics dashboard, tailored to meet the specific requirements of businesses. These may include:
        </p>
        <ul className="list-disc ml-5">
          <li>ECommerce Portals: Streamlining online transactions and enhancing the shopping experience for customers.</li>
          <li>B2B Portals: Facilitating efficient collaboration and transactions between businesses.</li>
          <li>Enterprise Portals: Centralizing resources and fostering internal communication within organizations.</li>
          <li>Patient Portals: Empowering healthcare providers and patients with access to medical records and appointment scheduling</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What Are the Benefits of a Web Portal?',
    answer: (
      <>
        <p>
          Web portals offer numerous benefits to businesses across
          various models, including B2B and B2C, addressing diverse
          aspects:
        </p>
        <ul className="list-disc ml-5">
          <li>Establish a professional image</li>
          <li>Expand customer base</li>
          <li>Enhance customer relationships</li>
          <li>Build customer loyalty</li>
          <li>Resolve internal and external challenges</li>
          <li>Continuously improve products and features</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What Is the Difference Between Website and Web Portal Development?',
    answer: (
      <p>
        A website comprises online pages accessible to the public,
        whereas a web portal serves as a self-service access point,
        integrating various services and tools for external or
        internal users, such as clients, customers, or employees.
      </p>
    ),
  },
  {
    question: 'What Is the Difference Between API and Portal?',
    answer: (
      <p>
        An API (Application Programming Interface) enables
        integration with other software, while a web portal
        typically incorporates an API to synchronize with other
        systems for data exchange and retrieval.
      </p>
    ),
  },
  {
    question: 'What Is the Cost of Web Portal Development?',
    answer: (
      <>
        <p>
          The cost of web portal development varies depending on
          factors such as the type of business (B2B or B2C) and the
          project scope. Typically, projects with higher traffic
          demand more extensive requirements.
        </p>
        <p>
          <a href="/contact-us/" className="underline text-blue-500">
            Contact us
          </a>{' '}
          to discuss how web portals can be tailored to suit your
          business needs.
        </p>
        <p>
          Considering web portal development? Costs typically range from $5,000 to $15,000 or more. However, final expenses hinge on project scope and features. For precise pricing, consult our web portal development experts.
        </p>
        <p>
          Basic web portals usually take 1-2 months, while complex ones may require over 9 months. Contact our developers for accurate time estimates based on your specific requirements.
        </p>
        <p>
          Web portal development offers businesses streamlined content management and enhanced user experiences, resulting in improved profitability and growth. Explore custom web portal solutions for tailored benefits.
        </p>
        <p>
          Our web portal development services offer numerous benefits, including:
        </p>
        <ul className="list-disc ml-5">
          <li>Affordable development costs</li>
          <li>Agile development practices</li>
          <li>24/7 customer support</li>
          <li>Extensive industry experience</li>
        </ul>
        <p>
          Yes, we offer mobile app support and maintenance services for web portals. Our experienced team ensures thorough analysis and maintenance to prolong the portal's lifetime. Feel free to seek our services and keep your business portal competitive for years to come.
        </p>
      </>
    ),
  },
];

const Page = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };
  return (
    <div>


      <section className='px-2 md:px-10 py-2 md:py-28 pt-10  bg1'>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2  gap-3 md:gap-10">
          <div className="md:col-span-1 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">

            <h4 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold text animatertext " >
              ATECHSEVA    <br /><strong className="text-rose-500"> Portal Development </strong> Process Steps
            </h4>

            <p className="mt-4 mb-10">At ATECHSEVA, we collaborate closely with our clients to devise a strategic roadmap for web portal development. Our aim is to enhance every customer touchpoint by employing structured and agile methodologies, while fostering internal and external collaboration.</p>


            <div className="flex justify-center m-auto w-full h-full mt-4 md:mt-14">
              <ContactAnimated text=' #1 Website Service' charclassName='process' />
            </div>

          </div>
          <div className="md:col-span-1 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start md:max-h-[35rem] max-h-[25rem]  px-10 pinkscroll overflow-auto  gap-5">
            <Link
              href="#"
              id="card1"
              className={`services-inner gap-5 mb-8 md:mb-1 bg-white darksoul-card3 rosecard relative border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse z-10 ${isHovered ? 'hover-active' : ''}`}
            >

              <div className="circle3"></div>
              <div className="count_number text-xl md:text-5xl font-bold mb-2">01</div>
              <div>
                <div className="top-wrapper">
                  <h4 className="title md:text-2xl text-lg font-semibold mb-2">Requirement Analysis</h4>
                </div>
                <div className="bottom-wrapper">
                  <div className="desc-text text-sm md:text-lg">We kick off the process by conducting a thorough analysis of your project requirements. This involves delving into your goals and objectives to tailor a PHP development strategy that perfectly aligns with your unique needs.</div>
                </div>
              </div>
            </Link>

            <Link
              href="#"
              id="card2"
              className="services-inner gap-5 mb-8 md:mb-1 bg-white darksoul-card3 rosecard relative border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle3"></div>
              <div className="count_number text-xl md:text-5xl font-bold mb-2">02</div>
              <div>
                <div className="top-wrapper">
                  <h4 className="title md:text-2xl text-lg font-semibold mb-2"> System Design</h4>
                </div>
                <div className="bottom-wrapper">
                  <div className="desc-text text-sm md:text-lg">Following the analysis phase, we transition into system design. Here, we meticulously outline the architecture and layout of your PHP application. Our focus lies in crafting a robust and scalable structure that can seamlessly adapt to evolving requirements.</div>
                </div>
              </div>
            </Link>

            <Link
              href="#"
              id="card2"
              className="services-inner gap-5 mb-8 md:mb-1 bg-white darksoul-card3 rosecard relative border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle3"></div>
              <div className="count_number text-xl md:text-5xl font-bold mb-2">03</div>
              <div>
                <div className="top-wrapper">
                  <h4 className="title md:text-2xl text-lg font-semibold mb-2">Coding and Development</h4>
                </div>
                <div className="bottom-wrapper">
                  <div className="desc-text text-sm md:text-lg">Armed with the design blueprint, our proficient PHP developers dive into the development phase. Employing coding best practices and leveraging the latest technologies, we craft a dynamic and feature-rich application that mirrors your envisioned outcome.</div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              id="card2"
              className="services-inner gap-5 mb-8 md:mb-1 bg-white darksoul-card3 rosecard relative border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle3"></div>
              <div className="count_number text-xl md:text-5xl font-bold mb-2">04</div>
              <div>
                <div className="top-wrapper">
                  <h4 className="title md:text-2xl text-lg font-semibold mb-2"> Testing & Quality Assurance
                  </h4>
                </div>
                <div className="bottom-wrapper">
                  <div className="desc-text text-sm md:text-lg">Once development reaches completion, we shift gears to the testing phase. Rigorous testing protocols are employed to ensure that your PHP application meets stringent quality standards. We meticulously scrutinize its performance across diverse platforms and devices, swiftly identifying and rectifying any bugs or issues encountered.</div>
                </div>
              </div>
            </Link>


            <Link
              href="#"
              id="card2"
              className="services-inner gap-5 mb-8 md:mb-1 bg-white darksoul-card3 rosecard relative border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle3"></div>
              <div className="count_number text-xl md:text-5xl font-bold mb-2">05</div>
              <div>
                <div className="top-wrapper">
                  <h4 className="title md:text-2xl text-lg font-semibold mb-2">Deployment</h4>
                </div>
                <div className="bottom-wrapper">
                  <div className="desc-text text-sm md:text-lg">Following comprehensive testing and quality assurance, we initiate the deployment process. Our seasoned team handles the seamless migration of your PHP application to the desired hosting environment. We meticulously configure deployment settings to optimize both performance and security, facilitating a smooth transition from development to production.</div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              id="card2"
              className="services-inner gap-5 mb-8 md:mb-1 bg-white darksoul-card3 rosecard relative border shadow-lg md:shadow-2xl px-6 py-8 rounded-3xl flex flex-row-reverse z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="circle3"></div>
              <div className="count_number text-xl md:text-5xl font-bold mb-2">06</div>
              <div>
                <div className="top-wrapper">
                  <h4 className="title md:text-2xl text-lg font-semibold mb-2">Maintenance and Support</h4>
                </div>
                <div className="bottom-wrapper">
                  <div className="desc-text text-sm md:text-lg">
                    We provide professional maintenance and support for your PHP application, including regular updates, security patches, and troubleshooting. Our responsive support team ensures minimal downtime and uninterrupted operation.</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>



      <div className="md:flex w-100 px-4 md:px-12 py-5 md:py-12 gap-4 md:gap-8 bg8">

        <div className="md:sticky mb-10 top-40 h-full  md:block md:w-2/5 overflow-hidden  rounded-3xl ">
          <div className=''>



            <Image src='/bg/about-bg.jpg' width={400} height={600} alt='' className='w-full rounded-3xl shadow-xl hover:scale-105 transition-all ' />
          </div>

        </div>
        <div className="md:w-3/5  relative ">
          <div className="">

            <div class="absolutediv absolute right-0 top-0 z-50">
              <div class="zoom-animation">
                <Image width={200} height={200} className='w-28 h-28 md:w-48 md:h-48' src="/bg/rocket.png" alt="" />
              </div>
            </div>

            <div className=''>
              <h2 className="text-md md:text-lg font-semibold leading-7 text-blue-600 ">
                Our Expertise
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Seamless Portal Implementation
              </p>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With a dedicated team of professionals, ATECHSEVA specializes in developing robust web portals that seamlessly integrate with your business objectives. Whether it's B2B, B2C, travel, employee, real estate, job, matrimonial, hotel, enterprise, or hospital portals, we have the expertise to deliver customized solutions that drive engagement and streamline operations.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-md md:text-lg leading-7 text-gray-600 lg:max-w-none">
              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />Vendor Portals
                </dt>
                <dd className="inline ps-2">
                  We improve procurement processes for manufacturers and non-manufacturers, enhancing efficiency and collaboration.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />B2B Portals
                </dt>
                <dd className="inline ps-2">
                  We digitally support any processes between businesses, facilitating trading, procurement, manufacturing, and distribution.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />Self-Service Portals
                </dt>
                <dd className="inline ps-2">
                  We aggregate information on your company’s products or services, enabling registered users to request information, activate/deactivate services, and resolve issues.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />Customer Portals
                </dt>
                <dd className="inline ps-2">
                  We create a digital space where your customers can access products, place orders, subscribe to services, and share feedback.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />Employee Portals
                </dt>
                <dd className="inline ps-2">
                  We implement secure platforms for employees to manage HR, IT, and facility-related services, access corporate data, and collaborate.
                </dd>
              </div>



              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />Ecommerce Portals
                </dt>
                <dd className="inline ps-2">
                  We create intuitive buying experiences for business buyers and consumers, integrating seamlessly into omnichannel retail ecosystems.
                </dd>
              </div>



              <div className="relative pl-9">
                <dt className="flex font-semibold text-gray-900  items-center gap-2">
                  <IoArrowForwardCircleOutline />eLearning Portals
                </dt>
                <dd className="inline ps-2">
                  We develop portals for commercial and corporate training programs.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className='px-2 md:px-10 py-2 md:py-28 pt-10 hero-bg'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-10">
          {/* Existing Key Features */}
          <div className="md:col-span-2 rel col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">
            <div className='relative'>
              <h1 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold ">
                Key Features of <br /> <strong className="text-amber-500">Web Portals</strong>
              </h1>
              <p className='my-4 text-md md:text-lg'>
                At ATECHSEVA, we offer comprehensive Web Portal Development services, providing end-to-end solutions to plan and implement secure and user-friendly digital spaces tailored to meet the needs of your customers, partners, and employees.
              </p>
              <div className="absolutediv absolute right-4 -top-5">
                <Image width={100} height={100} src="/illustrations/s1.png" alt="call us" />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/functions.png' alt='' width={80} height={80} className="transition-filter duration-300 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Self-Service Functions</h3>
            <p className="leading-6">Empower users with self-service functionalities, allowing them to access services, products, and information at their convenience.</p>
          </div>
          {/* New Key Feature */}
          <div className="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/notification.png' alt='' width={80} height={80} className="transition-filter duration-300 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Notification System</h3>
            <p className="leading-6">Implement a notification system to keep users informed about updates, events, and important announcements.</p>
          </div>
          {/* Remaining Existing Key Features */}
          <div className="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/analytics.png' alt='' width={80} height={80} className="transition-filter duration-300 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Analytics and Reporting</h3>
            <p className="leading-6">Integrate analytics tools to track user behavior, gather insights, and generate reports for informed decision-making.</p>
          </div>
          {/* Remaining Existing Key Features */}
          <div className="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/performance-optimization.png' alt='' width={80} height={80} className="transition-filter duration-300 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Performance Optimization</h3>
            <p className="leading-6">Optimize portal performance by minimizing load times, optimizing images and assets, and implementing caching strategies to ensure a smooth user experience.</p>
          </div>
          {/* Remaining Existing Key Features */}
          <div className="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/cms.png' alt='' width={80} height={80} className="transition-filter duration-300 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Content Management System (CMS)</h3>
            <p className="leading-6">Implement a robust CMS for easy content creation, editing, and publishing, empowering administrators to manage the portal efficiently.</p>
          </div>
          {/* Remaining Existing Key Features */}
          <div className="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Image src='/icons/search-page.png' alt='' width={80} height={80} className="transition-filter duration-300 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Search Functionality</h3>
            <p className="leading-6">Enhance user navigation with advanced search capabilities, allowing users to find relevant information quickly and efficiently.</p>
          </div>
        </div>
      </section>

      <section className="px-2 sm:px-6 md:px-10 py-6 md:py-12 pt-10 mapbg ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-6">
          <div className="md:col-span-2 xl:col-span-1 col-span-1 order-last md:order-last items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-left bg-yellow-100 shadow rounded-3xl p-5 md:p-7">
            <h4 className="text-3xl md:text-6xl text-secondary-800 opacity-95 font-semibold animatertext">
              Frequently Asked <br /><strong className="text-yellow-500">Questions</strong>
            </h4>
            <p className="mt-4 mb-10 leading-7 md:leading-10 text-md md:text-lg">
              Thank you for considering our services. Below, we've compiled answers
              to commonly asked questions to assist you in making informed
              decisions. We are committed to providing you with exceptional service
              and support.
            </p>
            <Image src='/illustrations/faq-illustration.webp' className='m-auto' width={350} height={250} alt='' />
          </div>
          <div className="md:col-span-2 xl:col-span-2 col-span-1 order-first md:order-first items-center block md:flex flex-wrap mb-5 md:mb-0  md:text-left md:max-h-[52rem] px-4 sm:px-6 md:px-10 pinkscroll overflow-auto gap-5">
            <div className={`accordion w-full `}>
              {faqData.map((item, index) => (
                <div key={index} className={`border-b bg-secondary-800 text-slate-100 rounded-3xl py-2 md:py-5 shadow-lg px-5 my-2 ${openIndex === index ? 'target-bg' : ''}`}>
                  <h3 className="text-md md:text-xl font-semibold">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full text-left py-4 focus:outline-none flex justify-between items-center ${openIndex === index ? 'text-amber-300   rounded-3xl shadow' : ''}`}
                    >
                      {item.question}
                      <span className="text-xl">
                        {openIndex === index ? (
                          <span className="p-3 bg-amber-400 text-secondary-800 rounded-full flex items-center justify-center">
                            <GoArrowDown className="" />
                          </span>
                        ) : (
                          <span className="p-3 bg-amber-400  rounded-full flex items-center justify-center opacity-45">
                            <GoArrowRight className="" />
                          </span>
                        )}
                      </span>
                    </button>
                  </h3>
                  {openIndex === index && (
                    <div className="text-md md:text-lg py-4">
                      <div className="leading-10">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>

  );
};

export default Page;
