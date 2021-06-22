import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [conPass, setConPass] = useState("");
	const [error, setError] = useState(false);
	const historial = useHistory();

	const registro = e => {
		e.preventDefault();
		if (password == conPass) {
			actions.registro(email, password);
			setEmail("");
			setPassword("");
			historial.push("/login");
		} else {
			setError(true);
		}
	};

	return (
		<div className="container" id="registro">
			<h1 id="titleLogin">Registrarse</h1>
			<form onSubmit={registro} id="form">
				{error ? (
					<div className="alert alert-dark" role="alert">
						Las contraseñas no coinciden
					</div>
				) : (
					""
				)}
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
				<div className="mb-3">
					<label htmlFor="exampleInputPassword2" className="form-label">
						Confirmar contraseña
					</label>
					<input
						value={conPass}
						onChange={e => setConPass(e.target.value)}
						type="password"
						className="form-control"
						id="InputPassword2"
					/>
				</div>

				<button type="submit" className="btn" id="btnLogin">
					Aceptar
				</button>
			</form>
		</div>
	);
};
