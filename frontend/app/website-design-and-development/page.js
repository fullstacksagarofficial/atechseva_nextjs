
"use client"
import SkillsSlider from '@/components/slider/SkillsSlider';
import Header from '@/components/header/Header';
import './page.scss'
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import Image from 'next/image';

const AnimationSequence = [
  { text: "Enhancing Your Web Experience: Designing...", color: '#FFEBB2' },
  { text: "Enhancing Your Web Experience: Developing...", color: '#C3FF93' },
  { text: "Enhancing Your Web Experience: Re-Designing...", color: '#FFAA80' },
  { text: "Enhancing Your Web Experience: Customizing...", color: '#7ABA78' },
];
const Page = () => {
  return (
    <div>
      
      <div className="process  bg12 overflow-hidden" >
        <div className="py-10 md:py-20 mx-2 md:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3 md:gap-10">
            <div className="md:col-span-2 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">

              <h1 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold ">
                Process of<strong className="text-pink-600">  web design</strong>  <br /> development work
              </h1>
            </div>
            <div className="rounded-xl cardmain  bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-lime-300 md:hover:bg-amber-300 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-lime-600 md:hover:border-amber-500 hover:border-l-8 hover:opacity-100 border-r-lime-600 md:border-hidden border-r-8">
              <div className="">
                <div className="title-inner">
                  <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-green-600 "> 01 </span>
                  <h4 className="font-semibold text-xl md:text-2xl text-secondary-800  mb-2 md:mb-4 mt-2">
                    Establish Clear Goals
                  </h4>
                </div>
                <Image width={55} height={55} className="block md:hidden absolute -bottom-10 -left-5 z-10" src="/illustrations/green-arrow.png" alt="" />

                <div className="description text-secondary-800 hidden md:block sm:hidden">
                  Before starting your website, clarify its purpose and know your audience. Whether it&apos;s selling, showcasing, or informing, align your design and content with audience preferences to achieve your goals effectively.
                </div>
              </div>

            </div>

            <div className="rounded-xl cardmain  bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-lime-300 md:hover:bg-amber-300 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-lime-600 md:hover:border-amber-500 hover:border-l-8 hover:opacity-100 border-r-lime-600 md:border-hidden border-r-8 ">
              <div className="">
                <div className="title-inner">
                  <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-green-600"> 02 </span>
                  <h4 className="font-semibold text-xl md:text-2xl text-secondary-800  mb-2 md:mb-4 mt-2">
                    Plan Your Website Structure and Content
                  </h4>
                </div>

                <Image width={55} height={55} className="block md:hidden absolute -bottom-10 -right-5 z-10" src="/illustrations/green-arrow2.png" alt="" />

                <div className="description text-secondary-800 hidden md:block sm:hidden">
                  Plan your website&amp;s structure with clear main pages and intuitive navigation. Align content strategy with goals and audience preferences. Use engaging visuals and multimedia strategically for a compelling user experience.
                </div>
              </div>
            </div>


            <div className="rounded-xl cardmain  bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-lime-300 md:hover:bg-amber-300 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-lime-600 md:hover:border-amber-500 hover:border-l-8 hover:opacity-100 border-r-lime-600 md:border-hidden border-r-8">
              <div className="">
                <div className="title-inner">
                  <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-green-600"> 03 </span>
                  <h4 className="font-semibold text-xl md:text-2xl text-secondary-800  mb-2 md:mb-4 mt-2">
                    Design a Visually Appealing Interface
                  </h4>
                </div>
                <Image width={55} height={55} className="block md:hidden absolute -bottom-10 -left-5 z-10" src="/illustrations/green-arrow.png" alt="" />

                <div className="description text-secondary-800 hidden md:block sm:hidden">
                  Design a captivating website reflecting brand identity. Choose colors, typography, and imagery aligning with brand personality. Ensure responsiveness for seamless viewing. Attention to detail enhances usability and engagement.
                </div>
              </div>

            </div>

            <div className="rounded-xl cardmain  bg-white px-6 md:px-4 py-3 md:py-5 border shadow-lg relative hover:bg-lime-300 md:hover:bg-amber-300 cursor-pointer select-none hover:text-white hover:shadow-2xl hover:border-lime-600 md:hover:border-amber-500 hover:border-l-8 hover:opacity-100 border-r-lime-600 md:border-hidden border-r-8">
              <div className="">
                <div className="title-inner">
                  <span className="text-4xl md:text-5xl opacity-20 hover:opacity-100 cardcount text-green-600"> 04 </span>
                  <h4 className="font-semibold text-xl md:text-2xl text-secondary-800  mb-2 md:mb-4 mt-2">
                    Develop and Optimize Your Website
                  </h4>
                </div>

                <div className="description text-secondary-800 hidden md:block sm:hidden">
                  Code your website with HTML, CSS, and JavaScript for speed and efficiency. Apply SEO techniques for better visibility. Test across browsers/devices for compatibility. Monitor metrics to refine and improve over time.
                </div>
              </div>

            </div>

            {/* Repeat the above structure for other three steps */}

            <div className="flex md:col-span-2  items-center">
              <h6 className="text-md md:text-xl text-secondary-800 opacity-95  md:!leading-[50px] !leading-[30px] font-normal px-2 md:px-5 ">
                <RiDoubleQuotesL className='inline-block text-xl md:text-3xl text-secondary-800 opacity-75' />
                Transforming Digital Landscapes: Where Imagination Meets <strong className="text-amber-600">Technology</strong>. Join forces with our visionary digital agency to sculpt immersive <strong className="text-amber-600">experiences</strong> that resonate with your audience and ignite authentic connections in the <strong className="text-amber-600">digital</strong> space. <RiDoubleQuotesR className='inline-block text-xl md:text-3xl text-secondary-800 opacity-75' />
              </h6>
            </div>
          </div>
        </div>

      </div>


      <div className="py-10 md:py-20 mx-2 md:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  md:gap-16 text-center md:text-start">

          <div className="flex flex-col justify-center  md:sticky top-40 md:h-screen">
            <h1 className="text-3xl lg:text-6xl text-secondary-800 opacity-95 font-semibold ">
              Why You Need a <strong className="text-pink-600"> Freelance</strong> Website Developer?
            </h1>
            <Image width={300} height={300} src="/freelance-website-developer.webp" alt="" />
          </div>
          <div className="md:col-span-2">
            <p className="md:leading-10 leading-8 md:text-lg text-md">
              In today's digital age, your online presence isn't just important—it's
              paramount. Every click, every scroll, every impression counts towards shaping
              your brand's reputation. That's where I come in. As a seasoned freelance web
              designer and developer, I don't just build websites; I craft digital
              experiences that captivate, engage, and convert.
              <br />
              <br />
              Picture this: a user lands on your website. What's the first thing they
              notice? It's not the content—it's the sleekness of your interface, the speed
              of your pages, and the intuitiveness of your layout. That's why I specialize
              in perfecting those initial touchpoints, ensuring that your audience is
              <strong className="text-pink-600"> hooked</strong> from the moment they arrive.
              <br />
              <br />
              But it doesn't stop there. A website that isn't
              <strong className="text-pink-600"> conversion-optimized</strong>,
              <strong className="text-pink-600"> SEO-friendly</strong>, or
              <strong className="text-pink-600"> mobile-responsive</strong> might as well not
              exist in today's competitive landscape. That's why I go above and beyond to
              not just meet, but exceed these standards. Whether you're a
              <strong className="text-pink-600"> multinational corporation</strong>, a
              <strong className="text-pink-600"> budding startup</strong>, or an
              <strong className="text-pink-600"> individual with a dream</strong>, I have the
              expertise and passion to elevate your online presence to new heights.
              <br />
              <br />
              Think of me as your one-stop-shop for all things web-related. Need a custom
              <strong className="text-pink-600"> WordPress design</strong> that reflects your
              unique brand identity? Done. Want a
              <strong className="text-pink-600"> responsive web design</strong> that looks
              stunning on every device? Consider it done. From
              <strong className="text-pink-600"> e-commerce solutions</strong> to
              cutting-edge <strong className="text-pink-600"> web applications</strong>, from
              <strong className="text-pink-600"> UI/UX design</strong> to seamless
              <strong className="text-pink-600"> development</strong>, I've got you covered.
              <br />
              <br />
              So, why settle for <strong className="text-pink-600"> mediocrity</strong> when
              you can have <strong className="text-pink-600"> excellence</strong>? Let's
              collaborate and bring your digital vision to life. Together, we'll turn
              <strong className="text-pink-600"> clicks into conversions</strong>,
              <strong className="text-pink-600"> visitors into loyal customers</strong>, and
              <strong className="text-pink-600"> dreams into reality</strong>. Your journey
              to online success starts here.
            </p>


          </div>
        </div>
      </div>
    </div>

  );
};

export default Page;
