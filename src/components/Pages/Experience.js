import React from 'react';
import HeaderBar from '../HeaderBar';
import ExperienceBody from '../Body/ExperienceBody';
import CodeGraph from '../../images/CodeGraph.svg';

function Experience() {
	return (
		<div className="Experience">
			<img src={CodeGraph} alt="Background" className="absolute z-10" />
			<div className="relative z-20">
				<HeaderBar />
			</div>
			<div className="relative">
				<ExperienceBody />
			</div>
		</div>
	);
}

export default Experience;
