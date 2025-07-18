import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaPhp, FaJava, FaReact, FaBootstrap, FaDocker, FaJenkins } from "react-icons/fa";
import { SiSymfony, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, SiScrumalliance, SiJira } from "react-icons/si";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/skills.css";

const Skills = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "skills") || {
		description: "Technical skills in languages, databases, frontend, devops, and agile.",
		keywords: ["Skills", "Technologies", "Developer"],
	};

	const sections = [
		{
			title: "Languages & Frameworks",
			description:
				"I write clean and efficient code using a variety of backend languages and frameworks. From PHP and Symfony to Java with Spring Boot, I enjoy building scalable, maintainable systems.",
			skills: [
				{ name: "PHP", icon: <FaPhp /> },
				{ name: "Symfony", icon: <SiSymfony /> },
				{ name: "Spring Boot", icon: <SiSpringboot /> },
				{ name: "Java", icon: <FaJava /> },
			],
		},
		{
			title: "Databases",
			description:
				"Data is the backbone of every app. I've worked with SQL and NoSQL databases in both small and enterprise-grade projects.",
			skills: [
				{ name: "MongoDB", icon: <SiMongodb /> },
				{ name: "MySQL", icon: <SiMysql /> },
				{ name: "PostgreSQL", icon: <SiPostgresql /> },
			],
		},
		{
			title: "Frontend",
			description:
				"I love crafting user interfaces with modern frontend technologies. React and Vue.js are my go-to libraries, styled with Tailwind and Bootstrap.",
			skills: [
				{ name: "React", icon: <FaReact /> },
				{ name: "Vue", icon: <i className="devicon-vuejs-plain colored"></i> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
				{ name: "Bootstrap", icon: <FaBootstrap /> },
			],
		},
		{
			title: "DevOps & Tools",
			description:
				"I'm comfortable deploying, maintaining, and monitoring apps using Docker and Jenkins. I care about automation and CI/CD workflows.",
			skills: [
				{ name: "Docker", icon: <FaDocker /> },
				{ name: "Jenkins", icon: <FaJenkins /> },
			],
		},
		{
			title: "Workflow & Agile",
			description:
				"I thrive in collaborative, agile environments. I’ve led sprints, participated in retrospectives, and used tools like Jira and Scrum daily.",
			skills: [
				{ name: "Scrum", icon: <SiScrumalliance /> },
				{ name: "Jira", icon: <SiJira /> },
			],
		},
	];

	return (
		<>
			<Helmet>
				<title>{`Skills | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="skills-container">
						<h1 className="skills-title">My Technical Toolbox</h1>
						<p className="skills-intro">
							A glimpse into the technologies and practices I use to build modern software solutions —
							from backend development and frontend design to DevOps and agile collaboration.
						</p>

						{sections.map((section, index) => (
							<div key={index} className="skills-section">
								<h3>{section.title}</h3>
								<p className="skills-description">{section.description}</p>
								<div className="skills-cards-container">
									{section.skills.map((skill, idx) => (
										<div className="skill-card" key={idx}>
											<div className="skill-icon">{skill.icon}</div>
											<div className="skill-name">{skill.name}</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
