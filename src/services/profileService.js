import { getProfileApi, updateProfileApi } from "../api/profileApi";

const getProfile = async () => {
    const response = await getProfileApi();
    return response.data;
};

const updateProfile = async (profileData) => {
    const response = await updateProfileApi(profileData);
    return response.data;
};

export default {
    getProfile,
    updateProfile
};
   