const URL = "http://localhost:3000/";
// eslint-disable-next-line
const usersURL = URL + "users";

const parseJSON = (res) => res.json();

const authHeaders = () => ({
	Authorization: `Bearer ${localStorage.getItem("jwt")}`,
});

const loginHeaders = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

export function authRequest(cred) {
	return fetch(URL + "authenticate", {
		method: "POST",
		headers: loginHeaders,
		body: JSON.stringify(cred),
	}).then(parseJSON);
}

export function profileRequest() {
	return fetch(URL + "profile", {
		headers: authHeaders(),
	}).then(parseJSON);
}
