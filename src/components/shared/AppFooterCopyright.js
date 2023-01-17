function AppFooterCopyright() {
	return (
		<div className="font-general-light flex justify-center items-center text-center py-2">
			<div className="text-lg text-zinc-100 dark:text-zinc-100">
				&copy; {new Date().getFullYear()}
				
				<a
					href="https://jasonshannon.design"
					target="__blank"
					className="text-zinc-100 dark:text-zinc-100 hover:underline hover:text-green-600 dark:hover:text-green-300 ml-1 duration-500"
				>
					Jason Shannon
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
