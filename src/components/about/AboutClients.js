import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
		<div className="m-4">
			<p className="font-general-medium text-xl sm:text-3xl mb-2 mt-2 text-stone-700 dark:text-stone-200 ">
					{clientsHeading}
				</p>
		
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-10  gap-3 w-3/4">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
