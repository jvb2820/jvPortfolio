import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faFacebook,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	// Sample deployed sites - you can replace these with your actual deployed sites
	const deployedSites = [
		{
			title: "ChatJVB",
			description: "An AI assistant tool with a pdf converter.",
			link: "https://chatjvb.streamlit.app/",
		},
		{
			title: "JVfolio",
			description: "My portfolio Website.",
			link: "https://jeuzvinci.vercel.app/",
		},
		
	];

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
			<title>{INFO.main.title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={currentSEO.description} />
			<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>


			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<h5>{INFO.homepage.title}</h5>
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="picme.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
									
									{/* Deployed Sites Section - Added right below the image */}
									<div className="deployed-sites-compact">
										<h3>Deployed Sites</h3>
										<div className="deployed-sites-links">
											{deployedSites.map((site, index) => (
												<a 
													key={index}
													href={site.link} 
													target="_blank" 
													rel="noopener noreferrer" 
													className="compact-site-link"
												>
													{site.title}
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.facebook}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>
						
						<div className="resume-container">
							<a 
								href="https://drive.google.com/file/d/1mAQCefeRvNvWPZsDSNdZTCGBHQlwy0rB/view?usp=sharing"
								target="_blank" 
								rel="noopener noreferrer"
							>
								<button className="resume-button">View Resume</button>
							</a>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;