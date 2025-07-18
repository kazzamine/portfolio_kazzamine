import React from "react";

function article_1() {
	return {
		date: "18 July 2025",
		title: "From Developer to PM: Why I'm Aiming Higher",
		description:
			"After years of coding, I'm starting to care more about planning, decisions, and the bigger picture.",
		keywords: ["Project Management", "Dev to PM", "Career Growth", "Tech Leadership"],
		style: `
			.article-content {
				max-width: 750px;
				margin: auto;
				line-height: 1.7;
			}
		`,
		body: (
			<div className="article-content">
				<p>
					When I first started coding, my only focus was making things work. Build the feature, fix the bug, push the update.
				</p>
				<p>
					But after working on real systems like a hospital pharmacy platform and internal HR tools, I’ve started to enjoy something else: organizing tasks, talking to other teams, and helping projects stay on track.
				</p>
				<p>
					I’ve been using tools like Trello and Notion, planning sprints, and thinking more like a project manager. I’m still writing code, but I’m also interested in how teams collaborate, how features are prioritized, and how good software is delivered—not just built.
				</p>
				<p>
					I don’t know where it will lead exactly, but I’m slowly preparing myself for something beyond pure development.
				</p>
			</div>
		),
	};
}

function article_2() {
	return {
		date: "18 July 2025",
		title: "When I Use Symfony and When I Use Spring Boot",
		description:
			"I work with both frameworks often. Here’s how I decide which one fits the job.",
		keywords: ["Symfony", "Spring Boot", "Backend", "Java", "PHP"],
		style: `
			.article-content {
				max-width: 750px;
				margin: auto;
				line-height: 1.7;
			}
		`,
		body: (
			<div className="article-content">
				<p>
					I use both Symfony (PHP) and Spring Boot (Java) depending on the project. They’re both solid frameworks, but not for the same kind of work.
				</p>
				<p>
					When I want something fast, with flexible templating (like Twig), Symfony is my go-to. I used it for a full pharmacy management system and an HR platform—it’s clean, quick to set up, and great with forms, roles, and backend UI.
				</p>
				<p>
					Spring Boot is heavier, but powerful. It’s better for large systems that need strict structure. I built a shuttle reservation app with it, where I needed solid API design, strong typing, and more enterprise-like patterns.
				</p>
				<p>
					Bottom line: both tools are great—you just need to know what the project actually needs.
				</p>
			</div>
		),
	};
}

function article_3() {
	return {
		date: "18 July 2025",
		title: "What Freelance Taught Me That School Didn’t",
		description:
			"Real clients, real deadlines, and real lessons — no classroom can teach that.",
		keywords: ["Freelance", "Learning", "Real Experience", "Developer Journey"],
		style: `
			.article-content {
				max-width: 750px;
				margin: auto;
				line-height: 1.7;
			}
		`,
		body: (
			<div className="article-content">
				<p>
					In school, you build projects to pass. In freelance, you build to get paid. That changes everything.
				</p>
				<p>
					One of my first freelance jobs was a pharmacy dashboard. The requirements kept changing, the client had no technical background, and I had to figure out everything—from how to structure the app, to how to explain it to a non-tech user.
				</p>
				<p>
					That project taught me how to listen better, plan properly, and deliver even when things weren’t perfect. I also learned to say no to unrealistic demands—which is harder than it sounds.
				</p>
				<p>
					Those freelance experiences made me a better developer—but also someone who understands the human side of software.
				</p>
			</div>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
