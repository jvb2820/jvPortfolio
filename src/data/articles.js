import React from "react";

function article_1() {
	return {
		date: "25 February 2025",
		title: "My Journey in IT: From Customer Support to Development",
		description:
			"My transition from a Technical Advisor and Customer Support Representative to an IT Developer and Intern at Lifewood Data Technology.",
		keywords: [
			"IT Journey",
			"Jeuz Vinci Bas",
			"ServiceNow Development",
			"React and Java Developer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid blue;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						My career started in customer support, working as a
						Technical Advisor at Concentrix (Comcast West 3P) and an Amazon Representative. Over time, I pursued a
						Bachelor of Science in Information Technology and
						expanded my expertise in development. Now, I'm an IT
						intern at Lifewood Data Technology, working on data
						processing, web development, and text and object data
						collection.
					</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "25 February 2025",
		title: "My Projects: From ServiceNow to React Web Apps",
		description:
			"A look into the various projects I've worked on, including ServiceNow scripting, React applications, and my capstone project.",
		style: ``,
		keywords: [
			"Projects",
			"Jeuz Vinci Bas",
			"ServiceNow",
			"React",
			"Python",
			"Spring Boot",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						Over the years, I've built projects using ServiceNow,
						React, Python, and Java (Spring Boot). Some of my key
						projects include:
					</p>
					<ul>
						<li>
							**Capstone Project:** Improving the incubation
							application review and selection process at Wildcat
							Innovation Labs using Spring Boot and PostgreSQL.
						</li>
						<li>
							**Qwarta:** A payment processing system developed
							with Python.
						</li>
						<li>
							**Portfolio Website:** A React-based portfolio
							showcasing my work.
						</li>
					</ul>
					<p>
						I'm always open to collaboration and looking for new
						ways to improve my skills!
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
