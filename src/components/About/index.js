import React from "react";

function About() {
	return (
		<div className="gray About min-100-vh min-100-vw flex-row justify-space-around">
			<div className='portrait col-4'>
				<img src={require('../../assets/portrait.jpg')} alt='Jorge'/>
			</div>
			<div className="col-6 about-text">
				<h2 className="who-am-i">Who am I?</h2>
				<h2 className="text-uppercase hello"> Hello </h2>
				<p className="about-p">
				Welcome! I am Jorge Monteagudo, a full stack web developer looking
						for new challenges and developing new skills.
						<br />
						<br />
						With a science background and experience with education I am always
						curious, logical, creative and great communicator. Such drive allows
						me to adapt to new environments and learn at fast speeds the tools
						necessary to succeed in this every changing world of technology.<br /><br />I
						look forward to contributing to your team!
				</p>
			</div>

		</div>
	);
}

export default About;

