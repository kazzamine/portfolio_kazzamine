import React from "react";
import "./styles/techSlider.css";

const TechCategorySlider = ({ title, techList }) => {
	return (
		<div className="tech-slider-section">
			<h3 className="tech-slider-title">{title}</h3>
			<div className="tech-slider-container">
				{techList.map((tech, index) => (
					<div className="tech-card" key={index}>
						<span className="tech-name">{tech}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechCategorySlider;
