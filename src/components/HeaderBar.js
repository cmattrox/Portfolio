import '../App.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/LogoPortfolio.svg';
import { useState } from 'react';

const HeaderBar = () => {
	const [showDisplay, setShowDisplay] = useState(false);

	return (
		<header className="HeaderBar z-0">
			<nav className="bg-gray-darkest">
				<div className="flex flex-row w-full justify-between">
					<div className="flex items-center pl-5">
						<img
							src={Logo}
							className="h-20 w-20 stroke-gray-lightest"
						/>
						<h1 className="text-gray-lightest text-2xl pl-2">
							Charles Welch
						</h1>
					</div>
					<div className="flex flex-row items-center justify-evenly divide-x-2 divide-gray-lightest">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`text-gray-lightest text-center px-2 text-xl ${
									isActive && `underline`
								}`
							}
							exact
						>
							Home
						</NavLink>
						<NavLink
							to="/experience"
							className={({ isActive }) =>
								`text-gray-lightest text-center px-2 text-xl ${
									isActive && `underline`
								}`
							}
						>
							Experience
						</NavLink>
						<NavLink
							to="/projects"
							className={({ isActive }) =>
								`text-gray-lightest text-center px-2 text-xl ${
									isActive && `underline`
								}`
							}
						>
							Projects
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`text-gray-lightest text-center px-2 pr-5 text-xl ${
									isActive && `underline`
								}`
							}
						>
							Contact
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default HeaderBar;
