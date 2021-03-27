import React, {Component} from "react";
import {profileRequest} from "../services/api";
import {getUser} from "../redux/actions/userActions";
import {connect} from "react-redux";

export class Profile extends Component {
	componentDidMount() {
		this.props.getUser();
	}

	renderWorkoutSessions = () => {
		return this.state.workout_sessions.map((ws) => (
			<p>
				{ws.name} on {ws.created_at}
			</p>
		));
	};
	render() {
		return (
			<div>
				{console.log(this.props.user)}
				<h1>{this.props.user.name}'s Profile! </h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {user, workout_sessions} = state;
	return {
		user,
		workout_sessions,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => dispatch(getUser()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
