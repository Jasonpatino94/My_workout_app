import React from "react";
import {useSelector} from "react-redux";
import WorkoutSessionModal from "./WorkoutSessionModal";

const ShowWorkouts = () => {
	const state = useSelector((state) => state);

	const renderWorkoutSessions = state.workout_sessions.map((ws) => (
		<div className="workout_session" key={ws.id}>
			<p>
				{ws.name} on {new Date(ws.created_at).toLocaleDateString()}
			</p>
			<WorkoutSessionModal workouts={ws.workouts} ws={ws} />
		</div>
	));

	return (
		<div>
			{console.log(state)}
			<h1>Your Workout Sessions</h1>
			<div className="workout-list">{renderWorkoutSessions}</div>
		</div>
	);
};

export default ShowWorkouts;
