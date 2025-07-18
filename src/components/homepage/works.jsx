import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img src="./mobiblanc.png" alt="Mobiblanc" className="work-image" />
							<div className="work-title">Mobiblanc ᴮʸ ᴬᴿᴿᴬᴮᴱᵀ</div>
							<div className="work-subtitle">Web Developer</div>
							<div className="work-duration">Apr 2025 – Present · Casablanca, Morocco · Hybrid</div>
						</div>

						<div className="work">
							<img src="./yulius.png" alt="Yulius" className="work-image" />
							<div className="work-title">Yulius</div>
							<div className="work-subtitle">Project Lead Developer (Part-time)</div>
							<div className="work-duration">Dec 2024 – Present · Remote</div>
						</div>

						<div className="work">
							<img src="./cheikhzaid.png" alt="Fondation Cheikh Zaïd" className="work-image" />
							<div className="work-title">Fondation Cheikh Zaïd Ibn Soltan</div>
							<div className="work-subtitle">Full-stack Developer</div>
							<div className="work-duration">Apr 2024 – Mar 2025 · Rabat, Morocco</div>
						</div>

						<div className="work">
							<img src="./internship.png" alt="Internship" className="work-image" />
							<div className="work-title">Fondation Cheikh Zaïd Ibn Soltan</div>
							<div className="work-subtitle">Full-stack Developer Intern</div>
							<div className="work-duration">Feb 2024 – Mar 2024 · Rabat, Morocco</div>
						</div>

						<div className="work">
							<img src="./freelance.png" alt="Freelance" className="work-image" />
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">Full-stack Web Developer</div>
							<div className="work-duration">Mar 2022 – Jan 2024 · Remote</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
