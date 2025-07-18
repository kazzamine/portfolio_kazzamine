import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = () => {
	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className="nav-item">
							<NavLink to="/" exact="true" activeclassname="active">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" activeclassname="active">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/projects" activeclassname="active">
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/articles" activeclassname="active">
								Articles
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" activeclassname="active">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
