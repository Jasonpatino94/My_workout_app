import React, {Component} from "react";
import {authRequest} from "../services/api";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getToken} from "../services/local_storage";

export class Login extends Component {
	state = {
		name: "",
		password: "",
		message: "",
	};

	componentDidMount() {
		console.log(this.props);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const {name, password} = this.state;
		this.props.setUser(this.state);

		authRequest({name, password}).then((res) => {
			if (res.error) {
				this.setState({message: res.error});
			} else {
				localStorage.setItem("jwt", res.jwt);
				this.props.history.push("/profile");
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
				{getToken() ? <Redirect to="/profile" /> : null}
				<h1>Please Login!</h1>
				<p>{localStorage.getItem("jwt")}</p>
				<form onSubmit={this.handleSubmit}>
					<h2 className="error">{this.state.message}</h2>
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

				<h2>
					{" "}
					If you dont have an account with us, Please{" "}
					<a href="/signup">Signup!</a>
				</h2>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (user) => dispatch({type: "SET_USER", payload: user}),
	};
};

export default connect(null, mapDispatchToProps)(Login);
