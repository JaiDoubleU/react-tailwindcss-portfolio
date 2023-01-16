import { useState, createContext } from 'react';
import { project2Data } from '../data/project2Data';

const Project2Context = createContext();


export const Project2Provider = ({ children }) => {
	const [project2, setProject2] = useState(project2Data);

	return (
		<Project2Context.Provider
			value={{ project2, setProject2}}
		>
			{children}
		</Project2Context.Provider>
	);
};

export default Project2Context;
