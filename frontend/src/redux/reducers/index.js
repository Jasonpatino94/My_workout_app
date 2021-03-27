import {combineReducers} from "redux";
import userReducer from "./userReducer";
import workoutReducer from "./workoutReducer";
import workoutSessionReducer from "./workoutSessionReducer";

export default combineReducers({
	user: userReducer,
	workouts: workoutReducer,
	workout_sessions: workoutSessionReducer,
});
