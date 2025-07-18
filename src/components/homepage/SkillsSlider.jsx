import React, { useEffect, useRef } from "react";
import "./styles/skillsSlider.css";

const skillCategories = {
	"Languages & Frameworks": ["PHP", "Symfony", "Spring Boot", "Java"],
	Databases: ["MongoDB", "MySQL", "SQL Server", "PostgreSQL"],
	Frontend: ["React", "Vue", "Tailwind", "Bootstrap"],
	"DevOps / Tools": ["Docker", "Jenkins"],
	Workflow: ["Scrum", "Jira", "Team Management", "Testing"],
};

const SkillsSlider = () => {
	const sliderRef = useRef(null);

	useEffect(() => {
		const slider = sliderRef.current;
		let scrollAmount = 0;

		const scrollStep = () => {
			if (!slider) return;

			scrollAmount += 1;
			if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
				scrollAmount = 0;
			}

			slider.scrollTo({
				left: scrollAmount,
				behavior: "smooth",
			});
		};

		const interval = setInterval(scrollStep, 30); // Adjust speed
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="skills-slider-wrapper">
			<div className="skills-slider" ref={sliderRef}>
				{Object.entries(skillCategories).map(([category, skills], idx) => (
					<div className="skills-card" key={idx}>
						<h3 className="skills-title">{category}</h3>
						<div className="skills-badges">
							{skills.map((skill, index) => (
								<span className="skill-badge" key={index}>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsSlider;
