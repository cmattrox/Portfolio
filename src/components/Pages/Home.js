import React from 'react';
import HeaderBar from '../HeaderBar';
import HomeBody from '../Body/HomeBody';
import CodeGraph from '../../images/CodeGraph.svg';

function Home() {
	return (
		<div className="Home">
			<img src={CodeGraph} alt="Background" className="absolute z-10" />
			<div className="relative z-20">
				<HeaderBar />
			</div>
			<div className="relative">
				<HomeBody />
			</div>
		</div>
	);
}

export default Home;
