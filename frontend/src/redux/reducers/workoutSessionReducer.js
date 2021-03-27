// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
	switch (action.type) {
		case "SET_WORKOUT_SESSION":
			return action.payload;
		case "ADD_WORKOUT_SESSION":
			return [...state, action.payload];
		case "DELETE_WORKOUT_SESSION":
			return state.filter((workout) => workout.id !== action.payload);
		default:
			return state;
	}
};
