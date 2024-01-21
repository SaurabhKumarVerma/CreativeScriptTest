import API from "./Api";

export const loginService = (userName: string, password: string) => {
  return API.post("/api/authaccount/login", {
    email: userName,
    password: password,
  });
};

export const signupService = (username: string, email: string, password) => {
  return API.post("api/authaccount/registration", {
    name: username,
    email: email,
    password: password,
  });
};
