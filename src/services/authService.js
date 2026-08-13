import {
  loginApi,
  signupApi,
  verifyEmailApi,
  forgotPasswordApi,
  resetPasswordApi,
  changePasswordApi,
  getCurrentUserApi,
} from "../api/authApi";

// Login
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

// Signup
const registerUser = async (userData) => {
  console.log("Registering user with data:", userData);

  const response = await signupApi(userData);

  return response.data;
};

// Alias for signup
const signup = async (userData) => {
  return registerUser(userData);
};

// Verify email
const verifyEmail = async (otpData) => {
  const response = await verifyEmailApi(otpData);

  return response.data;
};

// Forgot password
const forgotPassword = async (forgotData) => {
  const response = await forgotPasswordApi(forgotData);

  return response.data;
};

// Reset password
const resetPassword = async (resetData) => {
  const response = await resetPasswordApi(resetData);

  return response.data;
};

// Change password
const changePassword = async (changeData) => {
  const response = await changePasswordApi(changeData);

  return response.data;
};

// Get current authenticated user
const getCurrentUser = async () => {
  const response = await getCurrentUserApi();

  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

// Check authentication
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export default {
  login,
  registerUser,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  changePassword,
  getCurrentUser,
  logout,
  isAuthenticated,
};