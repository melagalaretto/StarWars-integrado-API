import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const historial = useHistory();

	const login = e => {
		e.preventDefault();
		console.log("Di click en login");
		actions.login(email, password);
		setEmail("");
		setPassword("");
		historial.push("/");
	};

	return (
		<div className="container" id="login">
			<h1 id="titleLogin">Iniciar Sesión</h1>
			<form onSubmit={login} id="form">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email
					</label>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="InputEmail"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Contraseña
					</label>
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="InputPassword"
					/>
				</div>
				<button type="submit" className="btn" id="btnLogin">
					Ingresar
				</button>
			</form>
		</div>
	);
};
