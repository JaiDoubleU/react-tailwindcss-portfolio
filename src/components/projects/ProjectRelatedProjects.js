import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="my-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-zinc-500 dark:border-zinc-700 ">
			<p className="font-general-regular text-neutral-900  dark:text-neutral-900 text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleProjectData.RelatedProject.Projects.map((project) => {
					return (
						<img
							src={project.img}
							className="rounded-xl cursor-pointer"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
