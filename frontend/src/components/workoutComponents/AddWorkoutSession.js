import React, {Component} from "react";
import {AddWorkoutSessions} from "../../services/api";
import {connect} from "react-redux";

export class AddWorkoutSession extends Component {
	state = {
		name: "",
	};

	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		AddWorkoutSessions(this.state, this.props.user.user.id).then((res) =>
			this.props.dispatch({type: "ADD_WORKOUT_SESSION", payload: res})
		);
	};

	render() {
		return (
			<div>
				Add a New Workout Session!
				<form className="WorkoutSessionsForm" onSubmit={this.handleSubmit}>
					<label>Name: </label>
					<input
						type="text"
						onChange={this.handleNameChange}
						value={this.state.name}
					/>
					<br />
					<input type="submit" value="Add This Session" />
				</form>
			</div>
		);
	}
}

export default connect((state) => state)(AddWorkoutSession);
