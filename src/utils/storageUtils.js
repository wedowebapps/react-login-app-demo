export const setUserData = (data) => {
	localStorage.setItem('userData', JSON.stringify(data));
};
export const setUserToken = token => {
  localStorage.setItem("token", `Bearer ${token}`);
};

export const getUserToken = () => {
	return localStorage.getItem('token');
};
export const getUserData = () => {
	return JSON.parse(localStorage.getItem('userData'));
};

export const unsetUserData = (data) => {
	localStorage.removeItem('userData');
};
export const unsetUserToken = (token) => {
	localStorage.removeItem('token');
};
