import React, {Component} from "react";
import {authRequest} from "../services/api";

export class Login extends Component {
	state = {
		name: "",
		password: "",
		message: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {name, password} = this.state;

		authRequest({name, password}).then((res) => {
			if (res.error) {
				this.setState({message: res.error});
			} else {
				localStorage.setItem("jwt", res.jwt);
			}
		});
	};

	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	};

	handlePasswordChange = (event) => {
		this.setState({password: event.target.value});
	};

	render() {
		return (
			<div>
				<p>{localStorage.getItem("jwt")}</p>
				<form onSubmit={this.handleSubmit}>
					{this.state.message}
					<label>Name: </label>
					<input
						type="text"
						onChange={this.handleNameChange}
						value={this.state.name}
					/>
					<label> Password: </label>
					<input
						type="password"
						onChange={this.handlePasswordChange}
						value={this.state.password}
					/>

					<input type="submit" value="login" />
				</form>
			</div>
		);
	}
}

export default Login;
