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
							Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						Feel free to connect with me through the following platforms. I’m always open to networking, collaborations, or any inquiries. Don’t hesitate to reach out!
					
						</div>
						<img 
							src="/c1.png" 
							alt="c1" 
							className="randImage3"
							style={{
								width: "800px",  // Increase width for a landscape feel
								height: "450px",  // Reduce height to maintain landscape proportions
								objectFit: "cover",  // Ensures the image fills the area properly
								marginTop: "30px",  // Adds small top margin
								outline: "2px grey",  // Keeps the blue outline
								alignSelf: "center"  // Centers the image
							}}
						/>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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
