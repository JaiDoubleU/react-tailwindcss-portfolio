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
		url: 'https://medium.com/@jaidoubleu',
	},
	{
		id: 4,
		icon: <FiInstagram />,
		url: 'https://instagram.com/JaiDoubleU',
	},
];

const AppFooter = () => {
	return (
		<div className="sm:mx-auto dark:bg-zinc-900 bg-zinc-900 text-white w-full  px-3 ">
			<div className="mt-1 border-t-2 border-z-light dark:border-zinc-800 ">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-8">
					<p className="text-lg sm:text-4xl light:text-zinc-700 dark:text-zinc-200 mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="light:text-zinc-700 dark:text-zinc-200 hover:text-green-500 dark:hover:text-green-400 cursor-pointer rounded-lg bg-gray-300 dark:bg-zinc-500 hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-2xl">
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
