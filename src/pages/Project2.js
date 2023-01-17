import { motion } from 'framer-motion';
// import AboutMeBio from '../components/about/AboutMeBio';
import Project2Bio from '../components/projects/Project2Bio';

import dispatchMockupImage1 from '../images/dispatchMockup1.png';
import  dispatchMockupImage2 from '../images/dispatchMockup1.png';
import  dispatchMockupImage3 from '../images/dispatchMockup1.png';

import { AboutMeProvider } from '../context/AboutMeContext';
import { Project2Provider } from '../context/Project2Context';


const Project2 = () => {
    return (

        <AboutMeProvider>
            {/* <Project1Provider>Project 1</Project1Provider> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, delay: 1 }}
                    exit={{ opacity: 0 }}
                className="container mx-auto px-4 py-20 ">
                <div class="mt-10 ">
                    <a href="/projects/" className=" text-md font-general-medium bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-md px-5 py-2.5 mb-6  duration-300">
                        &larr; Back to All Projects
                    </a>
                    <p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-200 mt-6 mb-7">
                        Major Application Redesign</p>

                    <div class="flex">
                        <div class="flex items-center mr-10">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-lg text-stone-700 dark:text-stone-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg><span class="font-general-regular ml-2 leading-none text-zinc-700 dark:text-zinc-200">Jul 26, 2021</span>
                        </div>
                        <div class="flex items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-lg text-stone-700 dark:text-stone-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                <line x1="7" y1="7" x2="7.01" y2="7"></line>
                            </svg><span class="font-general-regular ml-2 leading-none text-zinc-700 dark:text-zinc-200">UI / Frontend</span></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                    <div class="mb-10 sm:mb-0 {project.id} h-full">
                        <img class="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" 	src={dispatchMockupImage1} alt=""/>
                        </div>
                    <div class="mb-10 sm:mb-0 {project.id} h-full">
                        <img class="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" 	src={dispatchMockupImage2} alt=""/>
                        </div>
                    <div class="mb-10 sm:mb-0 {project.id}">
                        <img class="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" 	src={dispatchMockupImage3} alt=""/>
                        </div>
                    </div>
                    <div class="block sm:flex gap-0 sm:gap-10 mt-14">
                        <div class="w-full sm:w-1/3 text-left">
                            <div class="mb-7">
                                <p class="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">About Client</p>
                                <ul class="leading-loose">
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200"><span>Name: </span><a href="#nogo;" class="" aria-label="Project Website and Phone">Company Ltd</a></li>
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200"><span>Services: </span><a href="#nogo;" class="" aria-label="Project Website and Phone">UI Design &amp; Frontend Development</a></li>
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200"><span>Website: </span><a href="#nogo;" class="hover:underline hover:text-green-500 dark:hover:text-green-400 cursor-pointer duration-300" aria-label="Project Website and Phone">https://company.com</a></li>
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200"><span>Phone: </span><a href="#nogo;" class="hover:underline hover:text-green-500 dark:hover:text-green-400 cursor-pointer duration-300" aria-label="Project Website and Phone">555 8888 888</a></li>
                                </ul>
                            </div>
                            <div class="mb-7">
                                <p class="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">Objective</p>
                                <p class="font-general-regular text-zinc-700 dark:text-zinc-200">An application for creating, sending, and tracking procurement information request documents sent to various companies</p>
                            </div>
                        </div>
                        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                            <p class="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-7">About The Design</p>
                            <p class="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">This project was a proof of concept shown to attendees of an annual user conference to gauge interest in the offering</p>
                        </div>
                    </div>

                </motion.div>
        </AboutMeProvider>
    );
};

export default Project2;