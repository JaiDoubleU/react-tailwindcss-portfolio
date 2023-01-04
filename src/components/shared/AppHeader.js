import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoDark from '../../images/LogoDark.svg';
import logoLight from '../../images/LogoDark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className=" sm:mx-auto dark:bg-zinc-900 bg-zinc-700 text-white w-full fixed top-0 left-0 right-0 px-6 z-50"
		>
			<div className="z-10 w-full block sm:flex sm:justify-between sm:items-center py-2 ">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-3 sm:px-0">

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-stone-200"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>

					<div>
						<Link to="/">
							{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="w-44"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="w-44"
									alt="Dark Logo"
								/>
							)}
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-stone-700 hover:text-stone-400 dark:text-stone-200 dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-stone-700 hover:text-stone-50 text-xl" />
						)}
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/"
						className="block text-left text-lg text-stone-200 hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Home"
					>
						Home
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg text-stone-200 hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-stone-200 hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-light dark:text-stone-200 hover:text-secondary-dark dark:hover:text-stone-200  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Contact Me Button"
						>
							<Button title="Contact Me" />
						</span>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 py-3 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
										<Link
						to="/"
						className="block text-left text-lg text-stone-200  hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Home"
					>
						Home
					</Link>

					<Link
						to="/projects"
						className="block text-left text-lg text-stone-200  hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-stone-200  hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-stone-200  hover:text-primary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-green-600 hover:bg-green-400 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Contact Me Button"
						>
							<Button title="Contact Me" />
						</span>
					</div>

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						// className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
							className="ml-8 text-md font-general-medium bg-green-600 hover:bg-green-400 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"

					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-stone-300 hover:text-stone-100 dark:text-stone-200 dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-stone-700 hover:text-stone-50 text-xl" />
						)}
					</div>
				</div>
			</div>
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
