import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="pb-5 sm:pb-10 mt-5 sm:mt-5">
			<div className="text-left">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-zinc-700 dark:text-zinc-300">
					Projects
				</p>
			</div>

			<div className="mt-5 sm:mt-5">
				<h3
					className="font-general-regular  text-left  text-md sm:text-xl mb-3 text-zinc-700 dark:text-zinc-300 ">
					Search projects by title or filter by category
				</h3>
				<div
					className="flex justify-between border-b border-z-light dark:border-zinc-700   pb-3 gap-3 ">
					<div className="flex justify-between gap-0">
						<span
							className="font-general-medium pl-3 pr-1 sm:px-4 py-2 rounded-lg text-sm sm:text-md rounded-tr-none rounded-br-none border border-0 
								 bg-zinc-200   dark:bg-zinc-600   text-zinc-800 dark:text-zinc-50
                                ">
							<FiSearch className="w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-general-medium pl-3 pr-1 sm:px-4 py-2 rounded-lg text-sm sm:text-md rounded-tl-none rounded-bl-none border border-l-white border-t-0 border-y-0 border-r-0 border-l-1 focus:border-transparent ring-transparent focus:ring-blue 
								 bg-zinc-200   dark:bg-zinc-600 text-zinc-800 dark:text-zinc-50 
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
								id={project.id}
							/>
					  ))
					: projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
								id={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
