import { getProfileApi, updateProfileApi } from "../api/profileApi";

const getProfile = async () => {
    const response = await getProfileApi();
    console.log("getProfile response:", response);
    return response.data;
};

const updateProfile = async (profileData) => {
    const response = await updateProfileApi(profileData);
    console.log("updateProfile response:", response);
    return response.data;
};

export default {
    getProfile,
    updateProfile
};
   