import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-neutral-900  dark:text-neutral-900 mt-14 sm:mt-20 mb-7">
				{singleProjectData.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-stone-700 dark:text-stone-200" />
					<span className="font-general-regular ml-2 leading-none text-neutral-900  dark:text-neutral-900">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-stone-700 dark:text-stone-200" />
					<span className="font-general-regular ml-2 leading-none text-neutral-900  dark:text-neutral-900">
						{singleProjectData.ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
