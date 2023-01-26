import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import project1Mockup from '../images/mockups/rfxProjectDevices.png';
import project2Mockup from '../images/mockups/platformAppDevices.png';
import project3Mockup from '../images/mockups/solarSitesProjectDevices.png';
import curtainMenuMockup from '../images/mockups/curtainMenuPreview.png';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

const Home = () => {
	return (
		<div className="container mx-auto px-4 py-20">
			<AppBanner></AppBanner>
			
			<h1 class="font-general my-6 text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
				Projects
			</h1>			
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				<div >
					<a params="[object Object]" aria-label="Single Project" href="/project1/">
						<div aria-label="Single Project">
							<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
								<div>
									<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project1Mockup} alt="" />
								</div>
								<div className="text-center px-4 py-6">
									<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Procurement RFX Application</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div >
					<a params="[object Object]" aria-label="Single Project" href="/project2/">
						<div aria-label="Single Project">
							<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
								<div>
									<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project2Mockup} alt="" />
								</div>
								<div className="text-center px-4 py-6">
									<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Enterprise Application Design</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div >
					<a params="[object Object]" aria-label="Single Project" href="/project3/">
						<div aria-label="Single Project">
							<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
								<div>
									<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project3Mockup} alt="" />
								</div>
								<div className="text-center px-4 py-6">
									<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Solar Application Design</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>

			<h1 class="font-general my-6 mt-9 text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-100">
				Code Based Designs
			</h1>	
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				<div >
					<a params="[object Object]" aria-label="Single Project" href="https://codepen.io/jwshannon/pen/ygeJqE">
						<div aria-label="Single Project">
							<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
								<div>
									
									<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={curtainMenuMockup} alt="" />
									{/* <iframe class="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" height="460" scrolling="no" title="Curtain / Mega Menu Prototype" src="https://codepen.io/jwshannon/embed/ygeJqE?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jwshannon/pen/ygeJqE">
  Curtain / Mega Menu Prototype</a> by Jason Shannon (<a href="https://codepen.io/jwshannon">@jwshannon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe> */}
								</div>
								<div className=" px-4 py-6">
									<p className="text-center font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Curtain Menu Navigation</p>
									<ul className=" text-stone-700 dark:text-stone-200">
										<li><span className="font-medium">Problem: </span> How do you re-design an existing mega menu containing numerous links to make it compatible for display on mobile devices?</li>
										<li><span className="font-medium">Solution: </span> Take inspiration from a menu seen on Playstation and adapt it for the web</li>
									</ul>
								</div>

							</div>
						</div>
					</a>
				</div>
				{/* <div >
					<a params="[object Object]" aria-label="Single Project" href="/project2/">
						<div aria-label="Single Project">
							<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
								<div>
									<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project2Mockup} alt="" />
								</div>
								<div className="text-center px-4 py-6">
									<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Enterprise Application Design</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
								</div>
							</div>
						</div>
					</a>
				</div> */}
				{/* <div >
					<a params="[object Object]" aria-label="Single Project" href="/project3/">
						<div aria-label="Single Project">
							<div className="rounded shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-zinc-300  dark:bg-zinc-600">
								<div>
									<img className="rounded cursor-pointer shadow-lg sm:shadow-none h-auto" src={project3Mockup} alt="" />
								</div>
								<div className="text-center px-4 py-6">
									<p className="font-general-medium text-lg md:text-xl text-zinc-900 dark:text-zinc-100 mb-2">Solar Application Design</p><span className="text-lg text-stone-700 dark:text-stone-200">Web Application</span>
								</div>
							</div>
						</div>
					</a>
				</div> */}
			</div>

{/* 			
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider> */}
			
		</div>
	);
};

export default Home;
