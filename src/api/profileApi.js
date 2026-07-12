import axiosInstance from "./axiosConfig";

export const getProfileApi = () => {
    console.log("getProfileApi: Fetching user profile data");
    return axiosInstance.get("/api/profile");
}

export const updateProfileApi = (profileData) => {
    console.log("updateProfileApi: Updating user profile data");
    return axiosInstance.put("/api/profile", profileData);
}
