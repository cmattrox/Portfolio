import React from 'react';
import HeaderBar from '../HeaderBar';
import ProjectsBody from '../Body/ProjectsBody';
import CodeGraph from '../../images/CodeGraph.svg';

function Projects() {
	return (
		<div className="Projects">
			<img src={CodeGraph} alt="Background" className="absolute z-10" />
			<div className="relative z-20">
				<HeaderBar />
			</div>
			<div className="relative">
				<ProjectsBody />
			</div>
		</div>
	);
}

export default Projects;
