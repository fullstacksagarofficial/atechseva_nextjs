
"use client"
import React, { useState } from 'react';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaCodepen, FaTwitter } from 'react-icons/fa';
const Page = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className='px-2 md:px-10 py-2 md:py-28 pt-10  bg8 bg-slate-950'>
            <div className=" mx-auto py-8">
                <div className=" block p-8 md:flex w-full justify-around">
                    <div className='md:w-1/3'>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-300">
                            Have any questions? <strong className="text-pink-600"> Get in touch! </strong>
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Questions? Let&apos;s chat! As a freelance full-stack developer, I&apos;m here to assist you. Reach out via email or phone for any inquiries or project discussions. Looking forward to connecting with you!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
                            <div className="flex items-center">
                                <div className="mr-4 text-white p-4 flex items-center bg-gray-900 rounded-full shadow-lg border-dashed border">
                                    <MdPhone className='text-2xl' />
                                </div>
                                <a href="tel:+880155-69569" className="text-pink-500 ">
                                    (+91) 7017742830
                                </a>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-4 text-white p-4 flex items-center bg-gray-900 rounded-full shadow-lg border-dashed border">
                                    <MdEmail className='text-2xl' />
                                </div>
                                <a href="mailto:support@rstheme.com" className="text-pink-500 ">
                                    support@atechseva.com
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                            <a href="#" className="social-link hover:rounded-none bg-pink-500 flex text-white group items-center gap-5 py-4 rounded-lg shadow-lg px-6" ><FaInstagram className="mr-2 group-hover:scale-150 transition-all flex" /> Instagram</a>
                            <a href="#" className="social-link hover:rounded-none flex items-center gap-5 text-white group py-4 rounded-lg shadow-lg px-6" style={{ backgroundColor: '#1877F2' }}><FaFacebook className="mr-2 group-hover:scale-150 transition-all flex" /> Facebook</a>
                            <a href="#" className="social-link hover:rounded-none flex items-center gap-5 py-4 text-white group rounded-lg shadow-lg px-6" style={{ backgroundColor: '#2867B2' }}><FaLinkedin className="mr-2 group-hover:scale-150 transition-all flex" /> LinkedIn</a>
                            <a href="#" className="social-link hover:rounded-none flex items-center gap-5 py-4 rounded-lg text-white group shadow-lg px-6" style={{ backgroundColor: '#1DA1F2' }}><FaTwitter className="mr-2 group-hover:scale-150 transition-all flex" /> Twitter</a>
                            <a href="#" className="social-link hover:rounded-none flex items-center gap-5 text-white group py-4 rounded-lg shadow-lg px-6" style={{ backgroundColor: '#333' }}><FaGithub className="mr-2 group-hover:scale-150 transition-all flex" /> GitHub</a>
                            <a href="#" className="social-link hover:rounded-none flex items-center gap-5 py-4 text-white group rounded-lg shadow-lg px-6" style={{ backgroundColor: '#1E1F26' }}><FaCodepen className="mr-2 group-hover:scale-150 transition-all flex" /> CodePen</a>
                        </div>
                    </div>

                    <div className="bg-secondary-800 p-10 py-16 text-slate-100  rounded-lg md:2/3">
                        <h3 className="text-2xl md:text-4xl font-bold mb-12">Contact form</h3>
                        <form
                            action="/wordpress/axios/contact/#wpcf7-f3275-p294-o1" method="post" className="space-y-6">
                            <input
                                type="text" name="your-name" placeholder="Name" className="w-full px-4 py-3  border-gray-300 bg-slate-600 rounded-lg focus:outline-none focus:border-pink-500 focus:border-2 border-2 transition duration-300" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email" name="your-email" placeholder="Email" className="w-full px-4 py-3  border-gray-300 bg-slate-600 rounded-lg focus:outline-none focus:border-pink-500 focus:border-2 border-2 transition duration-300" />
                                <input
                                    type="text" name="phone-number" placeholder="Phone Number" className="w-full px-4 py-3  border-gray-300 bg-slate-600 rounded-lg focus:outline-none focus:border-pink-500 focus:border-2 border-2 transition duration-300" />
                            </div>
                            <textarea name="your-message" placeholder="Write Your Message Here" className="w-full px-4 py-3  border-gray-300 bg-slate-600 rounded-lg focus:outline-none focus:border-pink-500 focus:border-2 border-2 transition duration-300" rows={5} defaultValue={""}
                            />
                            <button
                                type="submit" className="bg-pink-500 hover:bg-pink-600  text-white py-3 px-8 md:py-5 md:px-12 rounded-lg text-center transition duration-300"
                            >
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
