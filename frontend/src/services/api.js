const URL = "http://localhost:3000/";
// eslint-disable-next-line
const usersURL = URL + "users";

const parseJSON = (res) => res.json();

const authHeaders = () => ({
	Authorization: `Bearer ${localStorage.getItem("jwt")}`,
});

const Headers = {
	Accepts: "application/json",
	"Content-Type": "application/json",
};

export function authRequest(cred) {
	return fetch(URL + "authenticate", {
		method: "POST",
		headers: Headers,
		body: JSON.stringify(cred),
	}).then(parseJSON);
}

export function profileRequest() {
	return fetch(URL + "profile", {
		headers: authHeaders(),
	}).then(parseJSON);
}

export function AddWorkouts(workout, user_id) {
	return fetch(URL + `users/${user_id}/workouts`, {
		method: "POST",
		headers: Headers,
		body: JSON.stringify(workout),
	}).then(parseJSON);
}

export function deleteWorkout(user_id, workout_id) {
	return fetch(URL + `users/${user_id}/workouts/${workout_id}`, {
		method: "DELETE",
	}).then(parseJSON);
}

export function createUser(user) {
	return fetch(URL + "users", {
		method: "POST",
		headers: Headers,
		body: JSON.stringify({user: user}),
	}).then(parseJSON);
}
