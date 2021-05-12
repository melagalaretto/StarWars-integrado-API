import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};

	return (
		<div className="col-lg-3 col-md-12 mx-auto" id="cards">
			<div className="card card-block" id="card" style={styles}>
				<div className="card-header">
					<img src={props.imageUrl} className="card-img-top img-fluid" alt="Imagen" />
				</div>
				<div className="card-body" id="bodyCard">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer" id="footer">
					<a href={props.buttonUrl} className="btn btn-primary" id="btnLeer">
						Leer más
						{props.buttonLabel}
					</a>
					<a
						href="#"
						className="btn btn-primary"
						id="like"
						onClick={() => actions.addFavorite(props.key, props.name, "C")}>
						<i className="far fa-heart" id="heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLike: PropTypes.string,
	key: PropTypes.number
};
