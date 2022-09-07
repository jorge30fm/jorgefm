import React from "react";

function Header() {
	return (
		<header className="flex-row justify-space-between">
			<div className="col-6">
				<a href="/">
					<img
						className="logo"
						src={require("../../assets/icons/logo.png")}
						alt="logo"
					/>
				</a>
			</div>

			<nav className="col-auto">
				<ul className="flex-row justify-space-around">
					<li>
						<a href="/" className="button btn btn-6">
							<span>Home</span>
						</a>
					</li>
					<li>
						<a href="/" className="button btn btn-6">
							<span>About</span>
						</a>
					</li>

					<li>
						<a href="/" className="button btn btn-6">
							<span>Skills</span>
						</a>
					</li>

					<li>
						<a href="/" className="button btn btn-6">
							<span>Projects</span>
						</a>
					</li>
					<li>
						<a href="/" className="button btn btn-6">
							<span>Contact</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
	//
}
export default Header;
