import React from "react";
import {useSelector} from "react-redux";
import WorkoutModal from "./WorkoutModal";

const ShowWorkouts = () => {
	const state = useSelector((state) => state);

	const renderWorkouts = state.workouts.map((workout) => (
		<div className="workouts" key={workout.id}>
			<p>
				{workout.name} on {new Date(workout.created_at).toLocaleDateString()}
			</p>
			<WorkoutModal workout={workout} />
		</div>
	));

	return (
		<div>
			<h1>Your Workouts</h1>
			<div className="workout-list">{renderWorkouts}</div>
		</div>
	);
};

export default ShowWorkouts;
