// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
	switch (action.type) {
		case "SET_USER":
			return action.payload.workouts || state;
		case "ADD_WORKOUT":
			return [...state, action.payload];
		case "DELETE_WORKOUT":
			return state.filter((workout) => workout !== action.payload);
		default:
			return state;
	}
};
