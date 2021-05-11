import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	const styles = {
		maxwidth: "18rem"
	};

	return (
		<div className="col-lg-3 col-md-12 mx-auto">
			<div className="card card-block" style={styles}>
				<div className="card-header">
					<img src={props.imageUrl} className="card-img-top img-fluid" alt="Imagen" />
				</div>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-primary">
						Leer más
						{props.buttonLabel}
					</a>
					<a href="#" className="btn btn-primary" id="like">
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
	buttonLike: PropTypes.string
};