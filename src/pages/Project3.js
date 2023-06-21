import { motion } from 'framer-motion';

import solarSitesMockupImage1 from '../images/mockups/solarSitesProjectDevices.png';
// import  dispatchMockupImage2 from '../images/dispatchMockup1.png';
// import  dispatchMockupImage3 from '../images/dispatchMockup1.png';

import { AboutMeProvider } from '../context/AboutMeContext';

const Project3 = () => {
    return (

        <AboutMeProvider>
            {/* <Project3Provider>Project 3</Project3Provider> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, delay: 1 }}
                    exit={{ opacity: 0 }}
                className="container mx-auto px-4 py-20 ">
                <div className="mt-10 ">
                    <a href="/" className=" text-md font-general-medium bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-md px-5 py-2.5 mb-6  duration-300">
                        &larr; Back
                    </a>
                    <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-200 mt-6 mb-7">
                        Solar Sites Application</p>

                    <div className="flex">
                        <div className="flex items-center mr-10">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-lg text-stone-700 dark:text-stone-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg><span className="font-general-regular ml-2 leading-none text-zinc-700 dark:text-zinc-200">Jan 2020</span>
                        </div>
                        <div className="flex items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-lg text-stone-700 dark:text-stone-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                <line x1="7" y1="7" x2="7.01" y2="7"></line>
                            </svg><span className="font-general-regular ml-2 leading-none text-zinc-700 dark:text-zinc-200">UI / Frontend</span></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                    <div className="mb-10 sm:mb-0 {project.id} h-full">
                        <img className="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" 	src={solarSitesMockupImage1} alt=""/>
                    </div>
                    {/* <div className="mb-10 sm:mb-0 {project.id} h-full">
                        <img className="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" 	src={dispatchMockupImage2} alt=""/>
                        </div>
                    <div className="mb-10 sm:mb-0 {project.id}">
                        <img className="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" 	src={dispatchMockupImage3} alt=""/>
                        </div>*/}
                    </div> 
                    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                        <div className="w-full sm:w-1/3 text-left">
                            <div className="mb-7">
                                <p className="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">The Deliverable</p>
                                <ul className="leading-loose">
                                    <li className="font-general-regular text-zinc-700 dark:text-zinc-200">An interactive mockup developed specifically for a User Conference presentation to gauge customer interest in the offering.</li>        
                                    <li className="font-general-regular text-zinc-700 dark:text-zinc-200 pt-3">
                                    <a href="https://codepen.io/jwshannon/pen/GRwjmBW"
                                        target="_blank" className=" text-md font-general-medium bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-md px-5 py-2.5 mb-6  duration-300" rel="noreferrer">
                                            View the Mockup
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                            <p className="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-5">
                                The Problem
                            </p>
                            <p className="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">
                                Stakeholders involved in solar project implemenations lack a centralized interface to view real-time satellite imagery to track the construction phases of solar sites.
                            </p>

                            <p className="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-5">The Challenge</p>
                            <p className="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">
                                To develop a user-friendly interface that allows users to track the construction phases of solar construction sites using satellite imagery. The purpose was to provide stakeholders, such as project managers, investors, and regulatory bodies, with a visual tool to assess the progress of solar site construction and make informed decisions based on real-time data.
                            </p>

                            <p className="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-5">The Result</p>
                            <p className="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">
                                The mockup was implemented and stakeholders gained a powerful tool to visually track the progress of solar site construction. The interface provided a comprehensive overview of construction phases, allowing users to make informed decisions, monitor timelines, identify potential bottlenecks, and assess project performance. Ultimately, this project facilitated effective project management, improved communication among stakeholders, and contributed to the successful implementation of solar energy initiatives.
                            </p>
                        </div>
                    </div>

                </motion.div>
        </AboutMeProvider>
    );
};

export default Project3;