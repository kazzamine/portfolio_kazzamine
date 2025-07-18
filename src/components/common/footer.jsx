import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<ul className="footer-links">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/projects">Projects</Link></li>
				<li><Link to="/articles">Articles</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>

			<div className="footer-text">
				© 2025 AmineKazzout. All Rights Reserved.
			</div>
		</div>
	);
};

export default Footer;
