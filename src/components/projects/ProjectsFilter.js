const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium pl-3 pr-1 sm:px-4 py-2 rounded-lg text-sm sm:text-md border-none 
								 bg-zinc-200   dark:bg-zinc-600 text-zinc-800 dark:text-zinc-50 
                                "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md text-zinc-800 dark:text-zinc-50 " key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
