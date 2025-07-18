import React from "react";
import "./styles/article.css";

const Article = ({ date, title, description, link }) => {
	return (
		<div className="article-container">
			<div className="article-date">{date}</div>
			<div className="article-title">{title}</div>
			<div className="article-description">{description}</div>
			<a className="article-link" href={link}>
				Read More →
			</a>
		</div>
	);
};

export default Article;
