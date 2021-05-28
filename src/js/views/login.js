import React from "react";

export const Login = () => {
	return (
		<div className="container" id="login">
			<h1 id="titleLogin">Iniciar Sesión</h1>
			<form id="form">
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
