import {
  loginApi,
  signupApi,
  verifyEmailApi,
  forgotPasswordApi,
  resetPasswordApi,
  changePasswordApi,
  getCurrentUserApi,
} from "../api/authApi";

const login = async (loginData) => {
  const response = await loginApi(loginData);

  const responseData = response.data ?? {};
  const token =
    responseData.token ||
    responseData.accessToken ||
    responseData.jwtToken ||
    response.headers?.authorization?.replace(/^Bearer\s+/i, "") ||
    response.headers?.Authorization?.replace(/^Bearer\s+/i, "");

  if (!token) {
    throw new Error("Login succeeded but no token was returned by the backend.");
  }

  localStorage.setItem("token", token);

  if (responseData.role) {
    localStorage.setItem("role", responseData.role);
  }

  return {
    ...responseData,
    token,
  };
};

const registerUser = async (userData) => {
  console.log("Registering user with data:", userData);
  const response = await signupApi(userData);

  return response.data;
};

const signup = async (userData) => {
  return registerUser(userData);
};

const verifyEmail = async (otpData) => {
  const response = await verifyEmailApi(otpData);

  return response.data;
};

const getCurrentUser = async () => {
  const response = await getCurrentUserApi();

  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");

  localStorage.removeItem("role");
};

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export default {
  login,
  registerUser,
  signup,
  verifyEmail,
  //forgotPassword,
  //resetPassword,
  //changePassword,
  getCurrentUser,
  logout,
  isAuthenticated,
};
