const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-3 px-5 h-full border bg-zinc-300 light:bg-zinc-200 border-zinc-400 dark:border-zinc-500 shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
