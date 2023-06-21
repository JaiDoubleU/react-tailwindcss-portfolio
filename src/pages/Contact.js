import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<div className="container mx-auto px-4 py-20 h-full">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.3,
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
