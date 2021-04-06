export const getToken = () => {
	return localStorage.getItem("jwt");
};

export const setToken = () => {
	localStorage.setItem("jwt");
};

export const clearToken = () => {
	localStorage.removeItem("jwt");
};
