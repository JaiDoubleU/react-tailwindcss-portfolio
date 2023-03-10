import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import profilePicLight from '../../images/profile-pic-circular-nov-2022.svg';
import profilePicDark from '../../images/profile-pic-circular-nov-2022.svg';

import { motion } from 'framer-motion';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row ">
			<div className="w-2/3 md:w-2/3 text-left  text-zinc-500 dark:text-zinc-700 hover:text-zinc-100">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.2,
					}}
					className="font-general text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100"
				>
					Hi, I'm Jason
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.2,
					}}
					className="font-general mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-zinc-700 dark:text-zinc-300">
					I'm a Sr. User Experience Designer with a passion for delighting customers one exceptional experience at a time.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.2,
					}}
					className="flex justify-center sm:block">
					<a
						download="Jason-Shannon-Resume.pdf"
						// href="https://read.cv/jaidoubleu"
						href="https://drive.google.com/file/d/1ojhQDThu2Homy1vh5dj7Y6Iql1jyAt1W/view?usp=sharing"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg cursor-pointer py-2.5 sm:py-3 shadow-lg rounded-lg bg-green-500 hover:bg-green-600 text-white hover:text-white duration-500  "
						aria-label="My Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							My Resume
						</span>
					</a>
				</motion.div>
			</div>
			{/* <motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-1/3 sm:w-1/3 text-right float-right mt-10"
			> */}
			<div className="w-1/3 sm:w-1/3 text-right float-right mt-10">
				<img src={activeTheme === 'dark' ? profilePicLight : profilePicDark}
					alt="" className="w-full md:w-2/3"
				/>
			</div>
			{/* </motion.div> */}
		</motion.section>
	);
};

export default AppBanner;
