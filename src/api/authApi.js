import axiosInstance from "./axiosConfig";

export const loginApi = (loginData) => {
    console.log("loginApi: Logging in user with data:", loginData);
    return axiosInstance.post("/api/auth/user/login", loginData);
};

export const signupApi = (signupData) => {
    console.log("signupApi: Signing up user with data:", signupData);
    return axiosInstance.post("/api/auth/user/signup", signupData);
};

export const verifyEmailApi = (verifyData) => {
    console.log("verifyEmailApi: Verifying email with data:", verifyData);
    return axiosInstance.post("/api/auth/verify-email", verifyData);
};

export const forgotPasswordApi = (forgotData) => {
    console.log("forgotPasswordApi: Requesting password reset with data:", forgotData);
    return axiosInstance.post("/api/auth/forgot-password", forgotData);
};

export const resetPasswordApi = (resetData) => {
    console.log("resetPasswordApi: Resetting password with data:", resetData);
    return axiosInstance.post("/api/auth/reset-password", resetData);
};

export const changePasswordApi = (changeData) => {
    console.log("changePasswordApi: Changing password with data:", changeData);
    return axiosInstance.post("/api/auth/change-password", changeData);
};

export const getCurrentUserApi = () => {
    console.log("getCurrentUserApi: Fetching current user data");
    return axiosInstance.get("/api/auth/me");
};