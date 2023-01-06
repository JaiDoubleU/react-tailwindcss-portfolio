import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto px-4 pt-20">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
