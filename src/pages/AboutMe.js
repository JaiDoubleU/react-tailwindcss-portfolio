import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients.js';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto px-4 pt-20 ">
				<div className="pb-5 sm:pb-10 mt-5 sm:mt-5 font-general-medium text-2xl sm:text-4xl text-zinc-700 dark:text-zinc-300">
				{/* <div className="font-general-medium text-2xl sm:text-4xl mb-1 text-zinc-700 dark:text-zinc-300"> */}
					About Me
				</div>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto px-4 pt-2"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
