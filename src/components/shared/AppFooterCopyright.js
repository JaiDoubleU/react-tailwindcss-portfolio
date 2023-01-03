function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				
				<a
					href="https://jasonshannon.design"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium  hover:underline hover:text-green-600 dark:hover:text-green-300 ml-1 duration-500"
				>
					Jason Shannon
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
