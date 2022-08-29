import React from "react";

function Homepage() {
	return (
		<div className="homepage-grid flex-row justify-space-between">

			<div className="col-6 hero">
				<div className="overlay"></div>
			</div>
            <div className="hero-text">
				<h2 className="text-uppercase t1 font-white">My Name is</h2>
				<h1 className="text-uppercase t2 font-white">Jorge Monteagudo</h1>
				<h3 className="text-uppercase t3">i am a Full-Stack Web Developer</h3>
            </div>
		</div>
	);
}

export default Homepage;
