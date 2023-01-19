import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto px-4 py-20">
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-200 mt-6 mb-7">
                       Projects</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
					<div ><a params="[object Object]" aria-label="Single Project" href="/project1/">
							<div aria-label="Single Project">
								<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
									<div><img src="/static/media/rfxMockup1DesktopIPad.2fd5597d035e7aeeb7fe.png" className="rounded-t-xl border-none" alt="Single Project"/></div>
									<div className="text-center px-4 py-6">
										<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Procurement RFX Application</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
									</div>
								</div>
							</div>
						</a></div>
					<div ><a params="[object Object]" aria-label="Single Project" href="/project2/">
							<div aria-label="Single Project">
								<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
									<div><img src="/static/media/dispatchMockup1.1d4b7bd56eb55c346e04.jpg" className="rounded-t-xl border-none" alt="Single Project"/></div>
									<div className="text-center px-4 py-6">
										<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Major Application Redesign</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
									</div>
								</div>
							</div>
						</a></div>
					<div ><a params="[object Object]" aria-label="Single Project" href="/projects/single-project/">
							<div aria-label="Single Project">
								<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
									<div><img src="/static/media/ui-project-1.41def4d8652deca915b2.jpg" className="rounded-t-xl border-none" alt="Single Project"/></div>
									<div className="text-center px-4 py-6">
										<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Service UI</p><span className="text-lg text-stone-700 dark:text-stone-200">Mobile Application</span>
									</div>
								</div>
							</div>
						</a></div>
				</div>
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
