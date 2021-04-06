import React, {Component} from "react";
import {connect} from "react-redux";
import {AddWorkouts} from "../../services/api";

export class AddWorkout extends Component {
	state = {
		name: "",
		weight: 0,
		reps: 0,
		sets: 0,
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const user_id = this.props.user.id;
		AddWorkouts(this.state, user_id).then((res) =>
			this.props.dispatch({type: "ADD_WORKOUT", payload: res})
		);
	};

	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	};

	handleWeightChange = (event) => {
		this.setState({weight: event.target.value});
	};

	handleRepsChange = (event) => {
		this.setState({reps: event.target.value});
	};

	handleSetChange = (event) => {
		this.setState({sets: event.target.value});
	};

	render() {
		return (
			<div className="workout-form">
				<h1>Add your workouts</h1>
				<form onSubmit={this.handleSubmit}>
					<label>Name: </label>
					<input
						type="text"
						onChange={this.handleNameChange}
						value={this.state.name}
					/>
					<label> Weight: </label>
					<input
						type="number"
						onChange={this.handleWeightChange}
						value={this.state.weight}
						step="5"
						min="0"
					/>
					<label> Reps: </label>
					<input
						type="number"
						onChange={this.handleRepsChange}
						value={this.state.reps}
						min="0"
					/>
					<label> Sets: </label>
					<input
						type="number"
						onChange={this.handleSetChange}
						value={this.state.sets}
						min="0"
					/>
					<br />
					<br />

					<input className="submit-btn" type="submit" value="Add Workout!" />
				</form>
			</div>
		);
	}
}

export default connect((state) => state)(AddWorkout);
