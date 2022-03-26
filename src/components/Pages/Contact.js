import React from 'react';
import HeaderBar from '../HeaderBar';
import ContactBody from '../Body/ContactBody';
import CodeGraph from '../../images/CodeGraph.svg';

function Contact() {
	return (
		<div className="Contact">
			<img src={CodeGraph} alt="Background" className="absolute z-10" />
			<div className="relative z-20">
				<HeaderBar />
			</div>
			<div className="relative">
				<ContactBody />
			</div>
		</div>
	);
}

export default Contact;
