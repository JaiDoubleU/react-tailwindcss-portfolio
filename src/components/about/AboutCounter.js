import { useCountUp } from 'react-countup';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 20, duration: 1 });
    useCountUp({ ref: 'designCounter', end: 15, duration: 1 });
	useCountUp({ ref: 'enterpriseUXCounter', end: 10, duration: 1 });
	useCountUp({ ref: 'userResearchCounter', end: 7, duration: 1 });
	useCountUp({ ref: 'uxLeadershipCounter', end: 5, duration: 1 });

	return (
		<div className="m-10 sm:mt-10 bg-g-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<div className="mb-10 sm:mb-0">
					<h2 className="text-4xl text-center text-zinc-900 dark:text-zinc-200 mb-2">
						<span id="experienceCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-zinc-900 dark:text-zinc-200 ">
						Total Experience
					</span>
				</div>

			 	<div className="mb-10 sm:mb-0">
					<h2 className="text-4xl text-center text-zinc-900 dark:text-zinc-200 mb-2">
						<span id="designCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-zinc-900 dark:text-zinc-200 ">
						UX Design
					</span>
				</div>

				<div className="mb-10 sm:mb-0">
					<h2 className="text-4xl text-center text-zinc-900 dark:text-zinc-200 mb-2">
						<span id="enterpriseUXCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-zinc-900 dark:text-zinc-200 ">
						Enterprise UX
					</span>
				</div>

				<div className="mb-10 sm:mb-0">
					<h2 className="text-4xl text-center text-zinc-900 dark:text-zinc-200 mb-2">
						<span id="userResearchCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-zinc-900 dark:text-zinc-200 ">
						User Research
					</span>
				</div>

				<div className="mb-10 sm:mb-0">
					<h2 className="text-3xl text-center text-zinc-900 dark:text-zinc-200 mb-2">
						<span id="uxLeadershipCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-zinc-900 dark:text-zinc-200 ">
						UX Leadership
					</span>
				</div>

				
			</div>
		</div>
	);
};

export default AboutCounter;
