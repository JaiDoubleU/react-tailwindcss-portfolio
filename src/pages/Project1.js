import { motion } from 'framer-motion';
import rfxDesktopImage1 from '../images/rfxMockup1DesktopIPad.png';
import rfxDesktopImage2 from '../images/rfxMockup2DesktopIPad.png';
import rfxDesktopImage3 from '../images/rfxMockup3DesktopIPhone.png';
import { Project1Provider } from '../context/Project1Context';

const Project1 = () => {
    return (

        <Project1Provider>
                <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 2, }} exit={{ opacity: 0 }} className="container mx-auto px-4 py-20 ">
                    <div class="mt-10 ">
                        <a href="/projects/" className=" text-md font-general-medium bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-md px-5 py-2.5 mb-6  duration-300">
                            &larr; Back to All Projects
                        </a>
                        <p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-200 mt-6 mb-7">
                            Procurement Document Management Design
                        </p>

                        <div class="flex">
                            <div class="flex items-center mr-10">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-lg text-stone-700 dark:text-stone-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg><span class="font-general-regular ml-2 leading-none text-zinc-700 dark:text-zinc-200">January - April 2022</span>
                            </div>
                            <div class="flex items-center">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-lg text-stone-700 dark:text-stone-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                </svg>
                                <span class="font-general-regular ml-2 leading-none text-zinc-700 dark:text-zinc-200">Design</span></div>
                            </div>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                        <div class="mb-10 sm:mb-0 {project.id} h-full">
                            <img class="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" src={rfxDesktopImage1} alt="" />
                        </div>
                        <div class="mb-10 sm:mb-0 {project.id} h-full">
                            <img class="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" src={rfxDesktopImage2} alt="" />
                        </div>
                        <div class="mb-10 sm:mb-0 {project.id}">
                            <img class="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full" src={rfxDesktopImage3} alt="" />
                        </div>
                    </div>
                    
                    <div class="block sm:flex gap-0 sm:gap-10 mt-14">
                        <div class="w-full sm:w-1/3 text-left">
                            <div class="mb-7">
                                <p class="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">About the Client</p>
                                <ul class="leading-loose">
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200"><span>Name: </span><a href="#nogo;" class="" aria-label="Project Website and Phone">Private</a></li>
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200"><span>Deliverable: </span><a href="#nogo;" class="" aria-label="Project Website and Phone">An Interactive Mockup designed in Figma</a></li>
                                
                                </ul>
                            </div>
                            <div class="mb-7">
                                <p class="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">The Deliverable</p>
                                <ul class="leading-loose">
                                    <li class="font-general-regular text-zinc-700 dark:text-zinc-200">An interactive mockup developed specifically for a User Conference presentation to gauge customer interest in the offering.</li>                             
                                </ul>
                            </div>
                        </div>
                        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                            <p class="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-7">
                                The Problem
                            </p>
                            <p class="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">
                                The process for creating, distributing and tracking RFPs requires a significant amount of effort. This is especially true when multiple requests exist, each having their own deadlines.  After RFx submissions are received, they are often inconsistent and are difficult to compare.
                            </p>

                            <p class="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-7">The Challenge</p>
                            <p class="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">
                                To develop a streamlined system for creating RFPs, easily distributing them to potential vendors, and tracking responses and other communications throughout the RFP process. This system should enable the efficient management of RFPs, allowing for quick and accurate comparison of vendor responses, and facilitating the decision-making process. Additionally, this system should provide transparency and accountability for all stakeholders involved in the RFP process, and should be easily accessible and user-friendly for all users
                            </p>

                            <p class="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-7">The Result</p>
                            <p class="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200">
                                The presentation generated a huge amount of discussion, with responses being overwhelmingly positive.  The project has been targeted for development.
                            </p>
                        </div>
                    </div>
                </motion.div>
        </Project1Provider>
    );
};

export default Project1;