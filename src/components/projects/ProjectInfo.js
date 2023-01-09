import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
						{singleProjectData.ProjectInfo.ClientHeading}
									   {singleProjectData.ProjectInfo.id}

					</p>
					<ul className="leading-loose">
						{singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-zinc-700 dark:text-zinc-200"
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href="#nogo;"
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-green-500 dark:hover:text-green-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-zinc-700 dark:text-zinc-200">
						{singleProjectData.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				{/* <div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-stone-700 dark:text-stone-200 mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-neutral-900  dark:text-stone-200">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div> */}

				{/* Single project social sharing */}
				{/* <div>
					<p className="font-general-regular text-2xl font-semibold text-stone-700 dark:text-stone-200 mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-stone-400 hover:text-neutral-900  dark:hover:text-neutral-900  p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div> */}
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-zinc-700 dark:text-zinc-200 text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-zinc-700 dark:text-zinc-200"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
