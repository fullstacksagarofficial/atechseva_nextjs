"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const page = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div><>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);"
        }}
      />
      <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">

            <div className="flex flex-col items-center justify-center text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-ambe-500 mb-6 md:mb-10 text-center">
                Oops! Looks like you're lost.
              </h1>
              <p className="text-center mb-4">The page you're trying to reach may have been removed or doesn't exist.</p>
              <p className="text-center mb-8">Please check the URL for any mistakes or try searching again.</p>
              <button
                className="px-6 py-3 rounded-lg text-md font-light outline-none focus:outline-none transform transition-all hover:scale-105 bg-amber-500 text-white hover:bg-amber-600"
                onClick={goBack}
              >
                <i className="mdi mdi-arrow-left mr-2" />
                Go Back
              </button>
            </div>

          </div>
          <div className="w-full md:w-1/2 text-center">
          <Image alt='' src='/bg/404.jpg' width="600" height="700" />
      
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform" />
        <div className="w-96 h-full bg-a-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform" />
      </div>
    
    </>
    </div>
  )
}

export default page