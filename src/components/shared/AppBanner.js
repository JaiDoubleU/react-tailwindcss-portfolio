import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import profilePicLight from '../../images/profilePicture.svg';
import profilePicDark from '../../images/profilePicture.svg';

import { motion } from 'framer-motion';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row ">
			
			<div className="w-auto text-left text-zinc-500 dark:text-zinc-700 hover:text-zinc-100 ">
				<div className="w-full sm:w-1/2 text-right float-right mt-10 mb-5 md:hidden items-center">
			
					<img src={activeTheme === 'dark' ? profilePicLight : profilePicDark}
					alt="" className="w-1/2 mx-auto"
				/> 
				</div>
				<motion.h3
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.2,
					}}
					className="font-general text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left mt-10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-100"
				>
					Hi, I'm Jason
				</motion.h3>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.2,
					}}
					className="font-general mt-4 text-xl md:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-zinc-700 dark:text-zinc-300">
					A Product Designer with a passion for delighting users, one exceptional experience at a time.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.2,
					}}
					className="flex justify-center md:block w-auto">
					<a
						download="Jason-Shannon-Resume.pdf"
					    target="_blank"
				        rel="noreferrer"
						href="https://drive.google.com/file/d/1i63sJ9JZ0YqRCtQitqmMzJ09hstt5PM-/view?usp=sharing"
						className="font-general-medium inline-flex whitespace-nowrap justify-center align-middle items-center mt-12 mb-6 sm:mb-0 text-lg cursor-pointer px-5 py-3 shadow-lg rounded-lg bg-green-500 hover:bg-green-600 text-white hover:text-white duration-500  "
						aria-label="My Resume"
					>
						<FiArrowDownCircle className="mx-2 sm:mx-3 h-5 w-auto sm:h-6 duration-100"></FiArrowDownCircle>
						<div className="text-sm sm:text-lg font-general-medium duration-100 w-auto whitespace-nowrap">
							View My Resume
						</div>
					</a>
				</motion.div>
			</div>
			
			<div className="w-auto text-right mt-10 hidden md:block">
				<img src={activeTheme === 'dark' ? profilePicLight : profilePicDark}
					alt="" className="w-1/2 mx-auto"
				/> 
			</div>
		</motion.section>
	);
};

export default AppBanner;
