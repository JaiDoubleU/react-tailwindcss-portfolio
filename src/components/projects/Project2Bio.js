import profileImage from '../../images/profile-pic-circular-nov-2022.svg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import Project2Context from '../../context/Project1Context';



const Project2Bio = ({ title, category }) => {
	return (
		<>
			<h1>Project Name</h1>
			<h3>{title}</h3>
			<h5>{category}</h5>
			
		</>
	);
};

export default Project2Bio;