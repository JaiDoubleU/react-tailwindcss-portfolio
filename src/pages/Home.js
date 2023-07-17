import { motion } from 'framer-motion';

import AppBanner from '../components/shared/AppBanner';
import project1Mockup from '../images/mockups/rfxProjectDevices.png';
import project2Mockup from '../images/mockups/platformAppDevices.png';
import project3Mockup from '../images/mockups/solarSitesProjectDevices.png';
import curtainMenuMockup from '../images/mockups/curtainMenuPreview.png';
import dataElementLengthsMockup from '../images/mockups/DataElementLengthsMockup.png';

import collaborationImg from '../images/principles/collaboration.svg';
import understandImg from '../images/principles/understand.svg';
import satisfiedCustomersImg from '../images/principles/satisfied-customers.svg';
import flexibilityImg from '../images/principles/flexibility.svg';
import accessibilityImg from '../images/principles/accessibility.svg';


const Home = () => {
	return (
		<div className="container mx-auto px-4 py-20">
			<AppBanner></AppBanner>

			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 2}}
					transition={{
						ease: 'easeInOut',
						duration: 0.3,
						delay: 0.5,
					}}
					className="font-general mb-0 mt-10 text-3xl text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
				Design Principles
				<div className='text-base py-3'>I have certain principles that I view as my personal design philosophy</div>
			</motion.div>	
			
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 2}}
					transition={{
						ease: 'easeInOut',
						duration: 0.3,
						delay: 0.5,
					}}
				className="font-general my-6 text-3xl text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
							
				<div className="font-general-medium container mx-auto py-2 block sm:flex sm:justify-between items-center">
					<div className="mb-10 sm:mb-0 p-6  bg-zinc-600 rounded-3xl shadow-lg">
						<span className="font-general-regular block text-base text-center text-zinc-900 dark:text-zinc-200 items-center">
							<img height="50px" width="100px" className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto m-auto" src={collaborationImg} alt="" />
							<div className="flex-wrap break-words">People <u>Are</u><br/>Your Biggest Asset</div>
						</span>
					</div>

					<div className="mb-10 sm:mb-0 p-6 bg-zinc-600  rounded-3xl shadow-lg">
						<span className="font-general-regular block text-base text-center text-zinc-900 dark:text-zinc-200 ">
							<img height="50px" width="100px" className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto m-auto" src={understandImg} alt="" />
							<div className="flex-wrap break-words">Seek to<br/>Understand "Why"</div>
						</span>
					</div>	
					<div className="mb-10 sm:mb-0 p-6 bg-zinc-600  rounded-3xl shadow-lg">
						<span className="font-general-regular block text-base text-center text-zinc-900 dark:text-zinc-200 ">
							<img height="50px" width="100px" className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto m-auto" src={satisfiedCustomersImg} alt="" />
							<div className="flex-wrap break-words">Deliver More<br/>Than Expected</div>
						</span>
					</div>
					<div className="mb-10 sm:mb-0 p-6 bg-zinc-600 rounded-3xl shadow-lg">
						<span className="font-general-regular block text-base text-center text-zinc-900 dark:text-zinc-200 ">
							<img height="50px" width="100px" className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto m-auto" src={accessibilityImg} alt="" />
							<div className="flex-wrap break-words">Always Deliver <br/>Accessibility</div>
						</span>
					</div>
					<div className="mb-10 sm:mb-0 p-6 bg-zinc-600 rounded-3xl shadow-lg">
						<span className="font-general-regular block text-base text-center text-zinc-900 dark:text-zinc-200 ">
							<img height="50px" width="100px" className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto m-auto" src={flexibilityImg} alt="" />
							<div className="flex-wrap break-words">Flexibility is<br/>My Superpower</div>
						</span>
					</div>
			</div>
				
			</motion.div>	
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 2}}
					transition={{
						ease: 'easeInOut',
						duration: 0.3,
						delay: 0.5,
					}}
					className="font-general my-6 mt-9 text-3xl text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
				Projects
				<div className='text-base py-3'>A sample of some of my recent and/or favorite projects</div>

			</motion.div>	
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 6}}
					transition={{
						ease: 'easeInOut',
						duration: 0.3,
						delay: 0.5,
					}}
					className="font-general my-6 text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
						<div >
							<a params="[object Object]" aria-label="Single Project" href="/project1/">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project1Mockup} alt="" />
										</div>
										<div className="text-center px-4 py-6">
											<p className="font-general-medium text-lg text-zinc-900 dark:text-zinc-100 mb-2">Procurement RFX Application</p><span className="text-stone-700 dark:text-stone-200">Web Application</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div >
							<a params="[object Object]" aria-label="Single Project" href="/project2/">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project2Mockup} alt="" />
										</div>
										<div className="text-center px-4 py-6">
											<p className="font-general-medium text-lg text-zinc-900 dark:text-zinc-100 mb-2">Enterprise Application Design</p><span className="text-stone-700 dark:text-stone-200">Web Application</span>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div >
							<a params="[object Object]" aria-label="Single Project" href="/project3/">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project3Mockup} alt="" />
										</div>
										<div className="text-center px-4 py-6">
											<p className="font-general-medium text-lg  text-zinc-900 dark:text-zinc-100 mb-2">Solar Application Design</p><span className="text-stone-700 dark:text-stone-200">Web Application</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					
						<div >
							<a target="_blank" rel="noreferrer" params="[object Object]" aria-label="Single Project" href="https://codepen.io/jwshannon/pen/ygeJqE">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={curtainMenuMockup} alt="" />
										</div>
										<div className=" px-4 py-6">
											<p className="text-center font-general-medium text-lg text-zinc-900 dark:text-zinc-100 mb-2">Curtain Menu Navigation</p>
											<dl className=" text-stone-700 dark:text-stone-200">
												<dt className="font-medium">The Problem: </dt>
												<dd className="mb-2">How do you re-design an existing mega menu containing numerous links to make it compatible for display on mobile devices?</dd>
												<dt className="font-medium">The Solution: </dt>
												<dd>Take inspiration from a menu seen on Playstation and adapt it for the web</dd>
											</dl>
										</div>

									</div>
								</div>
							</a>
						</div>

						<div >
							<a target="_blank" rel="noreferrer" params="[object Object]" aria-label="Single Project" href="https://codepen.io/jwshannon/pen/eYQzRBp">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={dataElementLengthsMockup} alt="" />
										</div>
										<div className=" px-4 py-6">
											<p className="text-center font-general-medium text-lg text-zinc-900 dark:text-zinc-100 mb-2">Data Element Lengths Lookup</p>
											<dl className=" text-stone-700 dark:text-stone-200">
												<dt className="font-medium">The Problem: </dt>
												<dd className="mb-2">How can you simplify the process of making UI decisions that can handle varying lengths of data, based on real data?</dd>
												<dt className="font-medium">The Solution: </dt>
												<dd>Create a user interface that offers a statistical analysis of the lengths of key data elements, highlighting their significance, and proposes a length that is 2 standard deviations away from the mean.</dd>
											</dl>
										</div>

									</div>
								</div>
							</a>
						</div>
						{/* <div >
							<a params="[object Object]" aria-label="Single Project" href="/project2/">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project2Mockup} alt="" />
										</div>
										<div className="text-center px-4 py-6">
											<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Enterprise Application Design</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
										</div>
									</div>
								</div>
							</a>
						</div> */}
						{/* <div >
							<a params="[object Object]" aria-label="Single Project" href="/project3/">
								<div aria-label="Single Project">
									<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
										<div>
											<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project3Mockup} alt="" />
										</div>
										<div className="text-center px-4 py-6">
											<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Solar Application Design</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
										</div>
									</div>
								</div>
							</a>
						</div> */}
					</div>
			</motion.div>	

{/* 			
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider> */}
			
		</div>
	);
};

export default Home;
