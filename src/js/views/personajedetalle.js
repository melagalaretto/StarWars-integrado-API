import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ImagenPersonajes from "../../img/star-wars.png";

export const PersonajeDetalle = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const url = useParams();
	const styles = {
		maxwidth: "18rem"
	};
	useEffect(() => {
		actions.sDetails(store.personajes[params.uid].url);
	}, []);

	return (
		<>
			<div className="container">
				<h2 className="text-white">
					<strong>Detalle del Personaje</strong>
				</h2>
				<div className="card mb-3" style={styles}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={store.imagenesPersonajes} alt="Characters" className="img-fluid" />
						</div>
						<div className="col-md-8 card">
							<div className="card-body">
								<h4 className="card-title">{store.personajes[params.uid].name}</h4>
								{Object.entries(store.details).map(([key, value], i) => {
									return (
										<p key={`${i}`} className="card-text">
											<strong className="text-dark">{key.toUpperCase()}:</strong> {value}
										</p>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
