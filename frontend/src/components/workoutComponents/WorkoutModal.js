import React, {useState} from "react";
import Modal from "react-modal";
import {deleteWorkout} from "../../services/api";
import {useSelector, useDispatch} from "react-redux";

Modal.setAppElement("#root");
const WorkoutModal = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleDeleteWorkout = (workout) => {
		setModalIsOpen(false);

		deleteWorkout(state.user.id, workout.id).then((data) => data);

		dispatch({type: "DELETE_WORKOUT", payload: workout});
	};

	return (
		<div className="whole-modal">
			<button className="view-more-btn" onClick={() => setModalIsOpen(true)}>
				View More
			</button>
			<Modal
				className="workout-modal"
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
			>
				{console.log(props)}
				<button className="close-btn" onClick={() => setModalIsOpen(false)}>
					x
				</button>
				<h1>
					you did {props.workout.name} with {props.workout.weight} pounds{" "}
					{props.workout.reps} times, for {props.workout.sets} sets!!
				</h1>
				<h4> </h4>

				<button onClick={() => handleDeleteWorkout(props.workout)}>
					Delete Workout
				</button>
			</Modal>
		</div>
	);
};

export default WorkoutModal;
