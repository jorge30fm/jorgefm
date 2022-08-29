import React from "react";

function Header() {
	return (
		<header className="flex-row justify-space-between">
			<div className='col-6'>
				<a href="/">
					<img className="logo" src={require("../../assets/icons/logo.png")} alt="logo" />
				</a>
			</div>

			<nav className="col-auto">
				<ul className="flex-row justify-space-around" >
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>

					<li>
						<a>Skills</a>
					</li>

					<li>
						<a>Projects</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
	//
}
export default Header;
