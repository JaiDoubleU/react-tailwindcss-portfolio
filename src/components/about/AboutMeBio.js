import profileImage from '../../images/profilePicture.svg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-10">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 mx-auto">
				<img src={profileImage} className="rounded-lg w-2/3 mx-auto" alt="" />
			</div>

			<div className="font-general-regular text-md w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 font-general-regular block text-md text-left text-zinc-700 dark:text-zinc-200"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
