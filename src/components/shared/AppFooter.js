import { FiGithub, FiTwitter, FiInstagram, FiBook } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/JaiDoubleU',
	},
	{
		id: 2,
		icon: <FiTwitter />,
		url: 'https://twitter.com/JaiDoubleU',
	},
	{
		id: 3,
		icon: <FiBook />,
		url: 'https://stoman.medium.com',
	},
	{
		id: 4,
		icon: <FiInstagram />,
		url: 'https://instagram.com/realstoman',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-600 hover:text-green-500 dark:hover:text-green-400 cursor-pointer rounded-lg bg-gray-300 dark:bg-zinc-500 hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
