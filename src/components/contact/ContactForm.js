import Button from '../reusable/Button';

const ContactForm = () => {
	return (
		<div className="w-full lg:w-1/2 my-2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl  sm:p-10 bg-zinc-800  dark:bg-zinc-800  rounded-xl shadow-xl text-left p-3"
				>
					<p className="font-general-medium text-zinc-200 dark:text-zinc-200 text-2xl mb-8">
						Contact Form
					</p>
					<div className="font-general-regular">
						<label
							className="block text-lg text-zinc-200 dark:text-zinc-200 mb-2"
							htmlFor="name"
						>
							Your Full Name
						</label>
						<input
							className="w-full px-5 py-2 border border-zinc-300 dark:border-zinc-500 border-opacity-50 text-zinc-200 dark:text-zinc-200 bg-zinc-400  rounded-md shadow-sm text-md"
							id="name"
							name="name"
							type="text"
							required
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-zinc-200 dark:text-zinc-200 mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border border-zinc-300 dark:border-zinc-500 border-opacity-50 text-zinc-200 dark:text-zinc-200 bg-zinc-400 dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="email"
							name="email"
							type="text"
							required
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-zinc-200 dark:text-zinc-200 mb-2"
							htmlFor="subject"
						>
							Subject
						</label>
						<input
							className="w-full px-5 py-2 border border-zinc-300 dark:border-zinc-500 border-opacity-50 text-zinc-200 dark:text-zinc-200 bg-zinc-400 dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							type="text"
							required
							placeholder="Subject"
							aria-label="Subject"
						/>
					</div>

					<div className="mt-6">
						<label
							className="block text-lg text-zinc-200 dark:text-zinc-200 mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-zinc-300 dark:border-zinc-500 border-opacity-50 text-zinc-200 dark:text-zinc-200 bg-zinc-400 dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-green-500 hover:bg-green-600 focus:ring-1 focus:ring-green-900 rounded-lg mt-6 duration-500">
						<Button
							className="bg-green-700"
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
