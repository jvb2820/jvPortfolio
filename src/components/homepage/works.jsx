import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/lifewood.svg"
								alt="lifewood"
								className="work-image"
							/>
							<div className="work-title">Lifewood Data Technology</div>
							<div className="work-subtitle">
								AIE/PM
							</div>
							<div className="work-duration">Apr 2025 - Present</div>
						</div>
						<div className="work">
							<img
								src="/lifewood.svg"
								alt="lifewood"
								className="work-image"
							/>
							<div className="work-title">Lifewood Data Technology</div>
							<div className="work-subtitle">
								Intern
							</div>
							<div className="work-duration">Jan 2025 - Apr 2025</div>
						</div>

						<div className="work">
							<img
								src="./amz.png"
								alt="amazon"
								className="work-image"
							/>
							<div className="work-title">Amazon</div>
							<div className="work-subtitle">
								CSA
							</div>
							<div className="work-duration">Sept 2022 - Dec 2022</div>
						</div>

						<div className="work">
							<img
								src="./cnx.png"
								alt="concentrix"
								className="work-image"
							/>
							<div className="work-title">Concentrix</div>
							<div className="work-subtitle">
								Technical Advisor
							</div>
							<div className="work-duration">Oct 2020 - Nov 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;