import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ImagenPersonajes from "../../img/star-wars.png";

export const PlanetaDetalle = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const uid = useParams();
	var numID;
	const tranformNum = num => {
		/* int    convertidor ({num:url = "0"}) */
		numID = parseFloat(num.uid);
	};

	/* ejecutamos la funcion */
	tranformNum(uid);

	const styles = {
		maxwidth: "18rem"
	};
	useEffect(() => {
		actions.sDetails(store.planetas[params.uid].url);
		console.log(uid);
	}, []);

	return (
		<>
			<div className="container">
				<h2 className="text-white">
					<strong>Detalle del Planeta</strong>
				</h2>
				<div className="card mb-3" style={styles}>
					<div className="row g-0">
						<div className="col-md-6 pr-0">
							{/*                           [le pasamos el numero] */}
							<img src={store.imagenesPlanetas[numID].url} alt="Characters" className="img-fluid" />
						</div>
						<div className="col-md-6 card">
							<div className="card-body">
								<h4 className="card-title">{store.planetas[params.uid].name}</h4>
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
