import React, {Component} from "react";
import {createUser} from "../services/api";
import {connect} from "react-redux";

export class Signup extends Component {
	state = {
		name: "",
		password: "",
		message: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();

		createUser(this.state).then((res) => {
			if (res.error) {
				this.setState({message: res.error});
			} else {
				this.props.setUser(res.user);
				localStorage.setItem("jwt", res.jwt);
				this.props.history.push("/profile");
			}
		});
	};

	handlePasswordChange = (event) => {
		this.setState({password: event.target.value});
	};

	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	};

	render() {
		return (
			<div>
				<h2>Please Sign up with your name and password!</h2>
				<br></br>
				<form onSubmit={this.handleSubmit}>
					{this.state.message}
					<label> Name: </label>
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
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (user) => dispatch({type: "SET_USER", payload: user}),
	};
};

export default connect(null, mapDispatchToProps)(Signup);
