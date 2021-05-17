import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteWorkout} from "../../services/api";

const WorkoutList = (props) => {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();

	const handleDelete = (workout) => {
		deleteWorkout(workout.workout_sessions_id, workout.id).then((data) => data);

		dispatch({type: "DELETE_WORKOUT", payload: workout});
	};

	const renderWorkouts = props.workouts.map((workout) => (
		<li
			onClick={() => handleDelete(workout)}
			key={workout.id}
			className="workouts"
		>
			{workout.name} with{" "}
			{workout.weight === 0 ? "bodyweight" : `${workout.weight}LB`} for{" "}
			{workout.reps} reps for {workout.sets} sets!{" "}
			<span className="deleteWorkout">&times;</span>
		</li>
	));

	// const renderWorkoutsTwo = state

	return (
		<div>
			{console.log(state.workout_sessions)}
			{props ? renderWorkouts : null}
		</div>
	);
};

export default WorkoutList;
