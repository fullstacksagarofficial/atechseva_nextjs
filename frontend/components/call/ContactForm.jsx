import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
 
  return (
    <div className="flex mb-10 md:mb-0 items-start justify-center md:justify-end  mt-10 w-full">
      <div className="bg-secondary-900 px-10 py-10 rounded-3xl shadow-2xl  md:-mt-20 md:-mr-48 z-50 w-1/3 " >
        <h3 className="my-3 mb-8 text-white text-4xl font-semibold">Contact Form</h3>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="block px-2.5 pb-3 pt-8 w-full text-sm text-white bg-secondary-800 border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:bg-gray-800 dark:border-amber-500 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block px-2.5 pb-3 pt-8 w-full text-sm text-white bg-secondary-800 border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:bg-gray-800 dark:border-amber-500 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone
              </label>
            </div>
          </div>
          <div className="relative mt-4">
            <input
              type="email"
              id="email"
              name="email"
              className="block px-2.5 pb-3 pt-8 w-full text-sm text-white bg-secondary-800 border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:bg-gray-800 dark:border-amber-500 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
          <div className="relative mt-4">
            <textarea
              id="message"
              name="message"
              className="block px-2.5 pb-3 pt-8 w-full text-sm text-white bg-secondary-800 border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-900 dark:bg-gray-800 dark:border-amber-500 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" "
              defaultValue={""}
            />
            <label
              htmlFor="message"
              className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Message
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-16 py-5 text-lg md:text-2xl bg-amber-500 text-gray-900 font-medium rounded-2xl hover:bg-amber-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="ml-0 w-2/3">
        <Image
        width={1000}
        height={1000}
          src="/bg/contact-bg.jpg"
          alt="Contact"
          className="shadow-xl hidden md:block "
        />
      </div>
    </div>
  );
};

export default ContactForm;
