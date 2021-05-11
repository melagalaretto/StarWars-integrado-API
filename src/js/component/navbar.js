import React from "react";
import { Link } from "react-router-dom";
import starWarsImg from "../../img/star-wars-white.png";

export const Navbar = () => {
	return (
		<div className="container" id="nav">
			<nav className="navbar navbar-light mb-3 mt-3">
				<Link to="/">
					<img src={starWarsImg} width="100" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button
							id="btnGroupDrop1"
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favoritos
						</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
