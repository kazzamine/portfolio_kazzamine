import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/experience.css";

const experienceData = [
	{
		logo: "./mobiblanc.png",
		company: "Mobiblanc ᴮʸ ᴬᴿᴿᴬᴮᴱᵀ",
		role: "Web Developer",
		duration: "Apr 2025 – Present · Casablanca, Morocco · Hybrid",
	},
	{
		logo: "./yulius.png",
		company: "Yulius",
		role: "Project Lead Developer (Part-time)",
		duration: "Dec 2024 – Present · Remote",
	},
	{
		logo: "./cheikhzaid.png",
		company: "Fondation Cheikh Zaïd Ibn Soltan",
		role: "Full-stack Developer",
		duration: "Apr 2024 – Mar 2025 · Rabat, Morocco",
	},
	{
		logo: "./internship.png",
		company: "Fondation Cheikh Zaïd Ibn Soltan",
		role: "Full-stack Developer Intern",
		duration: "Feb 2024 – Mar 2024 · Rabat, Morocco",
	},
	{
		logo: "./freelance.png",
		company: "Freelance",
		role: "Full-stack Web Developer",
		duration: "Mar 2022 – Jan 2024 · Remote",
	},
];

const Experience = () => {
	return (
		<div className="experience">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="experience-body">
						{experienceData.map((item, index) => (
							<div key={index} className="experience-item">
								<img src={item.logo} alt={item.company} className="experience-image" />
								<div className="experience-content">
									<div className="experience-title">{item.company}</div>
									<div className="experience-role">{item.role}</div>
									<div className="experience-duration">{item.duration}</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Experience;
