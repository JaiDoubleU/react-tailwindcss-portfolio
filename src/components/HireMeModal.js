import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';

const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
];

const HireMeModal = ({ onClose, onRequest }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-zinc-900 bg-opacity-80 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-zinc-500  dark:bg-zinc-600 max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-neutral-900  dark:text-neutral-100 text-xl">
								What project are you looking for?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-neutral-900  dark:text-neutral-100"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="max-w-xl m-4 text-left"
							>
								<div className="">
									<input
										className="w-full px-5 py-2 border dark:border-zinc-700  rounded-md text-md bg-zinc-800  dark:bg-ternary-dark text-neutral-900  dark:text-stone-200"
										id="name"
										name="name"
										type="text"
										required=""
										placeholder="Name"
										aria-label="Name"
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border dark:border-zinc-700  rounded-md text-md bg-zinc-800  dark:bg-ternary-dark text-neutral-900  dark:text-stone-200"
										id="email"
										name="email"
										type="text"
										required=""
										placeholder="Email"
										aria-label="Email"
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border dark:border-zinc-700  rounded-md text-md bg-zinc-800  dark:bg-ternary-dark text-neutral-900  dark:text-stone-200"
										id="subject"
										name="subject"
										type="text"
										required=""
										aria-label="Project Category"
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border dark:border-zinc-700  rounded-md text-md bg-zinc-800  dark:bg-ternary-dark text-neutral-900  dark:text-stone-200"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Project description"
									></textarea>
								</div>

								<div className="mt-6 pb-4 sm:pb-1">
									<span
										onClick={onClose}
										type="submit"
										className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-green-500
											hover:bg-green-600
											rounded-md
											focus:ring-1 focus:ring-green-900 duration-500"
										aria-label="Submit Request"
									>
										<Button title="Send Request" />
									</span>
								</div>
							</form>
						</div>
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
							<span
								onClick={onClose}
								type="button"
								className="px-4
									sm:px-6
									py-2 bg-gray-600 text-neutral-900  hover:bg-ternary-dark dark:bg-gray-400 dark:text-neutral-900 dark:hover:bg-gray-400
									rounded-md
									focus:ring-1 focus:ring-green-900 duration-500"
								aria-label="Close Modal"
							>
								<Button title="Close" />
							</span>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
