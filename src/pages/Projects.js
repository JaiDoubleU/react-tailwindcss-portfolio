import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto pt-20">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
