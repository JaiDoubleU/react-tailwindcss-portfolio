import { useState, createContext } from 'react';
import { project1Data } from '../data/project1Data';

const Project1Context = createContext();


export const Project1Provider = ({ children }) => {
	const [project1, setProject1] = useState(project1Data);

	return (
		<Project1Context.Provider
			value={{ project1, setProject1}}
		>
			{children}
		</Project1Context.Provider>
	);
};

export default Project1Context;
