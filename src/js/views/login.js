import React from "react";

export const Login = () => {
	return (
		<div className="container" id="login">
			<form id="form">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
					<div id="emailHelp" className="form-text" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" id="InputPassword" />
				</div>
				<button type="submit" className="btn btn-danger">
					Login
				</button>
			</form>
		</div>
	);
};
