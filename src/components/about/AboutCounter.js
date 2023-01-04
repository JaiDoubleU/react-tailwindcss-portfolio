import { useCountUp } from 'react-countup';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 20, duration: 0.5 });
    useCountUp({ ref: 'designCounter', end: 15, duration: 0.5 });
	useCountUp({ ref: 'enterpriseUXCounter', end: 10, duration: 0.5 });
	useCountUp({ ref: 'userResearchCounter', end: 7, duration: 0.5 });
	useCountUp({ ref: 'uxLeadershipCounter', end: 5, duration: 0.5 });

	return (
		<div className="mt-10 sm:mt-10 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center py-6">
				<div className="mb-10 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-stone-200 mb-2">
						<span id="experienceCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-secondary-dark dark:text-stone-200 ">
						Total Experience
					</span>
				</div>

			 	<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-stone-200 mb-2">
						<span id="designCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-secondary-dark dark:text-stone-200 ">
						UX Design
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-stone-200 mb-2">
						<span id="enterpriseUXCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-secondary-dark dark:text-stone-200 ">
						Enterprise UX
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-stone-200 mb-2">
						<span id="userResearchCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-secondary-dark dark:text-stone-200 ">
						User Research
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-3xl text-center text-secondary-dark dark:text-stone-200 mb-2">
						<span id="uxLeadershipCounter" />+ <span class="text-sm">Years</span>
					</h2>
					<span className="font-general-regular block text-md text-center text-secondary-dark dark:text-stone-200 ">
						UX Leadership
					</span>
				</div>

				
			</div>
		</div>
	);
};

export default AboutCounter;
