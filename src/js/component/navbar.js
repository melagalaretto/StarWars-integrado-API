import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsImg from "../../img/star-wars-white.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" id="nav">
			<div className="container">
				<nav className="navbar navbar-light mb-3 mt-3">
					<Link to="/">
						{/* <img src={starWarsImg} width="100" /> */}
						<img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG42.png" width="100" />
					</Link>
					<div className="btn-group">
						<button
							type="button"
							id="btnFav"
							className="btn btn-primary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favoritos <span className="badge badge-light">{store.favoritos.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
							{store.favoritos.map((item, index) => {
								return (
									<li key={`${index}`}>
										<span className="dropdown-item">
											<Link to={"/personajedetalle/" + actions.findIndexInCharacters(item.name)}>
												{item.name}
											</Link>
											<i
												onClick={() => actions.deleteFavorite(item.name)}
												className="fa fa-trash float-right mt-2"
											/>
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};
