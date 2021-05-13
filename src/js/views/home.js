import React from "react";
//import "../../styles/home.scss";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Vehiculos } from "../component/vehiculos";
export const Home = () => {
	return (
		<div className="container" id="home">
			<Personajes />
			<Planetas />
			<Vehiculos />
		</div>
	);
};
