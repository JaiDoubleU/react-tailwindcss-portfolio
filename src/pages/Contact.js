import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';

const Contact = () => {
	return (
		
		<div className="container mx-auto px-4 h-full">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto px-4 pt-20 h-full">
				<div className="pb-5 sm:pb-10 mt-5 sm:mt-5 font-general text-3xl text-center sm:text-left mt-10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
				{/* <div className="font-general-medium text-2xl sm:text-4xl mb-1 text-zinc-700 dark:text-zinc-300"> */}
					Contact
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.6,
					delay: 0.2,
				}}
				className="container mx-auto px-4 py-20">
				{/* <ContactForm /> */}
				<ContactDetails />
			</motion.div>
		</div>
	);
};

export default Contact;
