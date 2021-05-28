import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ImagenPersonajes from "../../img/star-wars.png";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};
	return (
		<>
			<div className="container-fluid py-2">
				<h2 className="text-white" id="titulo">
					Personajes
				</h2>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
					{store.personajes
						? store.personajes.map((item, index) => (
								<div key={`${index}`} className="col-lg-3 col-md-12 mx-auto" id="cards">
									<div className="card card-block" id="card" style={styles}>
										<div className="card-header p-0">
											<img
												src={store.imagenesPersonajes[index].url}
												className="card-img-top"
												alt="Imagen"
												width="200%"
												height="250"
											/>
										</div>
										<div className="card-body" id="bodyCard">
											<h5 className="card-title">{item.name}</h5>
										</div>
										<div className="card-footer" id="footer">
											<Link
												to={"/personajedetalle/" + actions.findIndexInCharacters(item.name)}
												className="btn btn-primary"
												id="btnLeer">
												<span>Ver Más...</span>
											</Link>
											<button
												href="#"
												className="btn btn-primary float-right"
												id="like"
												onClick={() => actions.addFavorite(item.uid, item.name, "C")}>
												<i className="far fa-heart" id="heart" />
											</button>
										</div>
									</div>
								</div>
						  ))
						: "Cargando..."}
				</div>
			</div>
		</>
	);
};
