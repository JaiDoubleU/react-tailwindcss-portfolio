// import { FiGithub, FiTwitter, FiInstagram, FiBook } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

// const socialLinks = [
// 	{
// 		id: 1,
// 		icon: <FiGithub />,
// 		url: 'https://github.com/JaiDoubleU',
// 	},
// 	{
// 		id: 2,
// 		icon: <FiTwitter />,
// 		url: 'https://twitter.com/JaiDoubleU',
// 	},
// 	{
// 		id: 3,
// 		icon: <FiBook />,
// 		url: 'https://medium.com/@jaidoubleu',
// 	},
// 	{
// 		id: 4,
// 		icon: <FiInstagram />,
// 		url: 'https://instagram.com/JaiDoubleU',
// 	},
// ];

const AppFooter = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 sm:mx-auto dark:bg-zinc-900 bg-zinc-900 text-white w-full px-3 ">
				<AppFooterCopyright />
		</div>
	);
};

export default AppFooter;
