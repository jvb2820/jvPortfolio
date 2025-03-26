import React from "react";

function article_1() {
	return {
		date: "Everything started in 2019",
		title: "My IT Journey: From Fascination with Technology to Aspiring Professional",
		description:
			"My journey from a fascination with technology and AI to pursuing a career in IT, gaining experience in troubleshooting, IT solutions, and development.",
		keywords: [
			"IT Career",
			"Jeuz Vinci Bas",
			"Technical Support",
			"Software Development",
			"Troubleshooting",
			"IT Solutions",
			"Artificial Intelligence",
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
								I have always been fascinated by technology and artificial intelligence, which led me to pursue 
								a Bachelor of Science in Information Technology. My journey in IT began with hands-on experience in customer support. 
								I started as a Technical Advisor at Concentrix (Comcast West 3P), where I worked for over a year, troubleshooting 
								and resolving technical issues while assisting customers. Seeking to expand my skill set, I then 
								took on a sales and customer service role at Amazon, where I learned to navigate various tools and 
								handle customer interactions effectively.  
				
								Driven by my passion for technology, I transitioned into the field of development. Now, as an IT intern at 
								Lifewood Data Technology, I am honing my skills in data processing, web development, and text and object 
								data collection, laying the foundations for a career in IT solutions and software development.
							</div>
							
							<img 
							src="/a2.png" 
							alt="a2" 
							className="randImage"
							style={{
								width: "500px",  // Increase width for a landscape feel
								height: "350px",  // Reduce height to maintain landscape proportions
								objectFit: "cover",  // Ensures the image fills the area properly
								marginTop: "30px",  // Adds small top margin
								outline: "2px grey",  // Keeps the blue outline
								alignSelf: "center"  // Centers the image
							}}
						/>
						</div>
					</React.Fragment>
				),
				
	};
}

function article_2() {
	return {
		date: "Growth",
		title: "From Curiosity to Creation: My Growth in IT and Development",
		description:
			"My journey from being a beginner in group projects to independently developing full-stack applications while mastering automation, AI tools, and IT solutions.",
		style: ``,
		keywords: [
			"Web Development",
			"Jeuz Vinci Bas",
			"Full-Stack Development",
			"React",
			"Spring Boot",
			"Database Management",
			"ServiceNow Scripting",
			"Salesforce Admin",
			"AI Automation",
			"Data Processing",
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
					<p>
						My journey into IT started with simple curiosity. At first, I was just an observer in group projects, completing only 
						the tasks assigned to me. I had little knowledge of how applications worked as a whole. However, over time, I developed 
						a deep interest in understanding the full process—how data is handled, how systems communicate, and how automation 
						can optimize workflows.
					</p>
					<p>
						Through self-learning and hands-on experience, I transitioned from merely contributing to projects to independently 
						building and managing full-stack applications. I started developing my own projects, such as this portfolio website, 
						and a test-run web development project for Lifewood.
					</p>
					<p>
						Along the way, I expanded my knowledge beyond development. I explored **database management**, **ServiceNow scripting**, 
						**Salesforce administration**, and **automation**. I also gained experience in **AI-driven solutions**, **data processing**, 
						and utilizing various IT tools to enhance efficiency.
					</p>
					<ul>
						<li>
							<strong>Portfolio Website:</strong> A React-based portfolio showcasing my skills and projects.
						</li>
						<li>
							<strong>Lifewood Website Project:</strong> A test-run web development project built to apply my front-end 
							and back-end expertise.
						</li>
					</ul>
					<p>
						My journey in IT is far from over. I continuously strive to learn more about modern development frameworks, cloud technologies, 
						and automation to further enhance my capabilities. Every project, every challenge, and every new tool I explore adds to my 
						growth as a developer and IT professional.
					</p>
					<img 
							src="/a1.png" 
							alt="a1" 
							className="randImage2"
							style={{
								width: "500px",  // Increase width for a landscape feel
								height: "350px",  // Reduce height to maintain landscape proportions
								objectFit: "cover",  // Ensures the image fills the area properly
								marginTop: "30px",  // Adds small top margin
								outline: "2px grey",  // Keeps the blue outline
								alignSelf: "center"  // Centers the image
							}}
						/>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Continuous Learning",
		title: "Mastering Technology: A Comprehensive Approach to IT and Development",
		description:
			"An in-depth exploration of my technical skills, programming languages, and professional capabilities in IT and software development.",
		keywords: [
			"Programming Skills",
			"Jeuz Vinci Bas",
			"Web Development",
			"Technical Proficiency",
			"Software Engineering",
			"Database Management",
			"Cloud Technologies",
			"Project Management"
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
					<p>
						My journey in technology is defined by a comprehensive approach to learning and applying diverse technical skills. 
						As a budding IT professional, I've developed a robust skill set that spans multiple domains of software development 
						and information technology.
					</p>

					<h2>Technical Proficiencies</h2>
					<ul>
						<li>
							<strong>Programming Languages:</strong> Proficient in C, Java, Python, PHP, and JavaScript, 
							with a strong foundation in object-oriented and web programming concepts.
						</li>
						<li>
							<strong>Web Technologies:</strong> Expertise in HTML, CSS, and advanced frameworks like React, 
							complemented by back-end development skills using Spring Boot.
						</li>
						<li>
							<strong>Database Management:</strong> Experienced in database technologies, including MySQL and 
							database design principles.
						</li>
						<li>
							<strong>Cloud and Enterprise Tools:</strong> Certified in Salesforce administration and familiar 
							with ServiceNow scripting, demonstrating versatility in enterprise technology solutions.
						</li>
					</ul>

					<h2>Professional Capabilities</h2>
					<p>
						Beyond technical skills, I bring a holistic approach to IT solutions. My experience spans technical support, 
						customer service, and software development, allowing me to understand technology from multiple perspectives. 
						Whether troubleshooting complex issues or developing innovative solutions, I approach each challenge with 
						methodical precision and creative problem-solving.
					</p>

					<h2>Continuous Growth</h2>
					<p>
						My commitment to professional development is evident in my ongoing learning journey. From hands-on internships 
						to self-directed learning, I continuously expand my technological toolkit. Each project and experience 
						adds depth to my understanding of how technology can solve real-world challenges.
					</p>

					<ul>
						<li>
							<strong>Key Strengths:</strong> Adaptability, quick learning, technical problem-solving, 
							and a passion for innovative technological solutions.
						</li>
						<li>
							<strong>Future Focus:</strong> Continuously exploring emerging technologies, cloud computing, 
							and advanced software development methodologies.
						</li>
					</ul>

					<img 
						src="/a3.png" 
						alt="Technology Skills Visualization" 
						className="randImage"
						style={{
							width: "500px",
							height: "350px",
							objectFit: "cover",
							marginTop: "30px",
							outline: "2px grey",
							alignSelf: "center"
						}}
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;