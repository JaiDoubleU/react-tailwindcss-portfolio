const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-x64 py-0 px-5 w-full max-h-64 h-2/3 border bg-zinc-300 light:bg-zinc-200 border-zinc-400 dark:border-zinc-500 shadow-sm rounded-lg cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
