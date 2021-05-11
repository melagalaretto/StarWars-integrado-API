import React, { useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<p id="text">Personajes</p>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.personajes.map((item, index) => {
					return <Card key={index} name={item.name} />;
				})}
			</div>
			<p id="text">Planetas</p>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.planetas.map((item, index) => {
					return <Card key={index} name={item.name} />;
				})}
			</div>
		</div>
	);
};
