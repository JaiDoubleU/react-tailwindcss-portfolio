import profileImage from '../../images/profilePicture.svg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import Project1Context from '../../context/Project1Context';



const Project1Bio = ({ title, category }) => {
	return (
		<>
			<h1>Project Name</h1>
			<h3>{title}</h3>
			<h5>{category}</h5>
			
		</>
	);
};

export default Project1Bio;