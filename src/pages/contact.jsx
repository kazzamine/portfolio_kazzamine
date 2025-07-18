import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							If you'd like to get in touch, feel free to email me at{" "}
							<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>.  
							I usually respond within 24 hours.
							<br />
							You can also connect with me on social media like{" "}
							<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
								Instagram
							</a>
							{" "}to see what I'm working on or send a message.
						</div>

					</div>

					<div className="contact-body-split">
	<form className="contact-form">
		<div className="form-group">
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" />
		</div>
		<div className="form-group">
			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" />
		</div>
		<div className="form-group">
			<label htmlFor="message">Message</label>
			<textarea id="message" name="message" rows="5" />
		</div>
		<button type="submit" className="contact-submit">Send Message</button>
	</form>

	<div className="contact-socials-side">
		<Socials />
	</div>
</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
