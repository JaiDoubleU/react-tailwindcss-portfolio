import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
		<div className="m-2">
			<p className="font-general-medium text-xl sm:text-3xl my-2 text-stone-700 dark:text-stone-200 ">
					{clientsHeading}
				</p>
		
			<div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 mt-4  gap-2 w-full">
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
