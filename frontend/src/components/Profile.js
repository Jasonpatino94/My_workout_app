import React, {Component} from "react";
import {getUser} from "../redux/actions/userActions";
import {connect} from "react-redux";
import {getToken} from "../services/local_storage";
import {Redirect} from "react-router-dom";
import AddWorkout from "./workoutComponents/AddWorkout";
import WorkoutList from "./workoutComponents/WorkoutList";

export class Profile extends Component {
	componentDidMount() {
		this.props.getUser();
		console.log(this.props);
	}

	// renderWorkoutSessions = () => {
	// 	return this.props.user.workouts.map((ws) => (
	// 		<p>
	// 			{ws.name} on {new Date(ws.created_at).toLocaleDateString()}
	// 		</p>
	// 	));
	// };

	render() {
		return (
			<div className="profile">
				{!getToken() ? <Redirect to="/login" /> : null}
				<h2 className="profile-name">{this.props.user.name}'s Profile! </h2>
				<AddWorkout />
				<br />
				<WorkoutList />

				{/* {this.props.user.workouts ? this.renderWorkoutSessions() : null} */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {user} = state;
	return {
		user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => dispatch(getUser()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
