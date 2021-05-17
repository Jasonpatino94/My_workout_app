import React, {useState} from "react";
import Modal from "react-modal";
import {deleteWorkout} from "../../services/api";
import {useSelector, useDispatch} from "react-redux";
import AddWorkout from "./AddWorkout";
import WorkoutList from "./WorkoutList";

Modal.setAppElement("#root");
const WorkoutModal = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleDeleteWorkout = (ws) => {
		setModalIsOpen(false);

		deleteWorkout(state.user.id, ws.id).then((data) => data);

		dispatch({type: "DELETE_WORKOUT", payload: ws});
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
				<button className="close-btn" onClick={() => setModalIsOpen(false)}>
					x
				</button>
				<AddWorkout ws={props.ws} />
				<WorkoutList workouts={props.workouts} />

				<button onClick={() => handleDeleteWorkout(props.workout)}>
					Delete This Session
				</button>
			</Modal>
		</div>
	);
};

export default WorkoutModal;
