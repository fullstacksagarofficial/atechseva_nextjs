import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <section className='px-2 md:px-10 py-2 md:py-28 pt-10  bg2'>
                <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4  gap-3 md:gap-10">
                    <div className="md:col-span-3 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start">
                        <h1 className="text-3xl md:text-6xl text-secondary-800 opacity-95  font-semibold ">
                            Offering Holistic Solutions to Cultivate a <strong className="text-pink-600">  High-Performance Culture </strong>
                        </h1>
                        <p className='my-5 text-md md:text-lg'>Our Human Resource Management System (HRMS) is designed to simplify and automate your HR processes, allowing you to focus on what truly matters – your people. With our expertise in HRMS, we deliver a robust and user-friendly platform that meets all your HR needs.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1 ">
                        <Image src='/icons/payroll.png' alt='' width={60} height={60} className="transition-filter duration-300 ease-in-out "
                        />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Payroll</h3>
                        <p className="leading-6">ATECHSSEVA is dedicated to simplifying complex tasks, and our payroll software reflects this commitment. </p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/modern-hr.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Modern HR</h3>
                        <p className="leading-6">Centralized people management for a connected digital workplace.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/performance.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Performance</h3>
                        <p className="leading-6"> Empower employees with clear, aligned goals and feedback.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/Hiring-and-Onboarding.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800"> Hiring &amp; Onboarding</h3>
                        <p className="leading-6"> Integrated platform for efficient recruitment and onboarding.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/compliance.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">12BB, Form 16 Management</h3>
                        <p className="leading-6">  Streamline your tax saving declarations with ease.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/Reimbursement.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Travel and Expenses Reimbursement</h3>
                        <p className="leading-6"> Efficiently manage and reimburse travel and other expenses.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/online-post.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Company Timeline</h3>
                        <p className="leading-6">   Keep track of significant milestones and posts in our company's journey.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/employee-records.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Employee Records and Documents</h3>
                        <p className="leading-6"> Centralize and manage all employee records and documents securely.</p>
                    </div>

                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/employee-records.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Employee Self-Service</h3>
                        <p className="leading-6"> Empower your employees with a self-service portal where they can update personal information, view payslips, request leave, and more.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/automate-appraisal.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Automatic Employee Appraisal</h3>
                        <p className="leading-6">Streamline employee appraisal processes with automation and efficiency.</p>
                    </div>
                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/Organization-Structure.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Organization Structure</h3>
                        <p className="leading-6">  Explore our company's organizational hierarchy and structure.</p>
                    </div>

                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/salary-slip.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Automatic Salary Slip Management</h3>
                        <p className="leading-6">  Automatically generate and manage employee salary slips.</p>
                    </div>

                    <div className="bg-white shadow-md group  rounded-lg positivecard positivecardimg p-6 cursor-pointer relative  md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/attendance.png' alt='' width={60} height={60} />
                        <h3 className="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800">Time &amp; Attendance</h3>
                        <p className="leading-6">   Seamless attendance tracking, integrated with payroll.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page