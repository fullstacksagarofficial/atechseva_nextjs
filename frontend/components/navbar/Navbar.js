"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdCallMade } from "react-icons/md";

import '../header/header.scss'; // Assuming you have some custom styles in here
import Image from 'next/image';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    setOpenMenu(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(10);
    const progressTimeout = setTimeout(() => {
      setProgress(100);
    }, 100);
    return () => clearTimeout(progressTimeout);
  }, [pathname]);
  return (
    <>
      <LoadingBar
        progress={progress}
        color="#f59e0b"
        height="5px"
        onLoaderFinished={() => setProgress(0)}
        shadow={true}
      />

      <div className={` py-5  z-[9999] text-secondary-900  ${isFixed ? 'fixed w-full border-b border-slate-400 top-0 left-0 right-0 bg-secondary-900 text-white md:opacity-90 shadow-lg' : 'relative header text-secondary-800 '}`}>
        <div className="px-5  lg:px-10 lg:py-2 flex justify-between items-center">
          <Link href='/'>
            <div className="logo">
              {isFixed ? <Image src="/logo/logo-white.png" alt="Logo" width={180} height={84} /> : <Image src="/logo/logo-yellow.png" alt="Logo" width={150} height={74} />}

            </div>
          </Link>
          <div className={`fixed inset-0 z-40 bg-secondary-900 bg-opacity-50 lg:hidden ${openMenu ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>
          <div className={`fixed top-0 left-0 h-full z-50 bg-secondary-900 w-64 p-8 transform transition-transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:transform-none lg:bg-transparent lg:w-auto lg:p-0 lg:h-auto`}>
            <ul className=" font-semibold flex flex-col lg:flex-row font-space justify-center items-start lg:items-center my-5 gap-10 lg:my-0">
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/">Home</Link></li>
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/about-us' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/about-us">About</Link></li>
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/website-design-and-development' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/website-design-and-development">Website Development</Link></li>
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/search-engine-optimization' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/search-engine-optimization">SEO</Link></li>
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/project' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/project">Projects</Link></li>
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/snippets' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/snippets">Snippets</Link></li>
              <li><Link onClick={() => { setOpenMenu(false); }} className={`cursor-pointer ${isFixed ? 'text-white':'text-white md:text-secondary-800'}  ${pathname === '/blog' ? 'border-b-2 border-yellow-500 text-amber-600 pb-2' : ''}`} href="/blog">Blog</Link></li>
              <li className="lg:hidden"><Link className=" bg-yellow-500 hover:bg-yellow-600 py-4 px-10 rounded flex items-center gap-2" href="/contact-us">ENQUIRY <MdCallMade  /> </Link></li>
            </ul>
          </div>
          <div className="flex lg:hidden">
            {openMenu ? (
              <IoIosCloseCircleOutline className=" cursor-pointer dark:text-slate-300 text-2xl lg:text-3xl block" onClick={toggleMenu} />
            ) : (
              <RiMenu2Fill className=" cursor-pointer dark:text-slate-300 text-2xl lg:text-3xl block" onClick={toggleMenu} />
            )}
          </div>
          <Link className="hidden lg:flex  bg-yellow-500 hover:bg-yellow-400 py-4 px-10 rounded  items-center gap-2" href="/contact-us">ENQUIRY <MdCallMade  /></Link>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
