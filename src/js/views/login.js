import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const login = e => {
		e.preventDefault();
		console.log("Di click en login");
		actions.login("pablo@gmail.com", "123");
	};

	return (
		<div className="container" id="login">
			<h1 id="titleLogin">Iniciar Sesión</h1>
			<form onSubmit={login} id="form">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
					<div id="emailHelp" className="form-text" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Contraseña
					</label>
					<input type="password" className="form-control" id="InputPassword" />
				</div>
				<button type="submit" className="btn" id="btnLogin">
					Ingresar
				</button>
			</form>
		</div>
	);
};
