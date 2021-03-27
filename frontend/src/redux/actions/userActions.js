import {profileRequest} from "../../services/api";

export const getUser = () => {
	return (dispatch) => {
		profileRequest().then((res) => {
			dispatch({type: "SET_USER", payload: res});
		});
	};
};
