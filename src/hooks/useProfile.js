import { useCallback, useEffect, useState } from "react";
import profileService from "../services/profileService";

export default function useProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    const fetchProfile = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const profileData = await profileService.getProfile();

            setProfile(profileData);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Failed to load profile."
            );
        } finally {
            setLoading(false);
        }
    }, []);

    const saveProfile = async (profileData) => {
        try {
            setSaving(true);
            setError(null);

            const updatedProfile =
                await profileService.updateProfile(profileData);

            setProfile(updatedProfile);

            return {
                success: true,
                message: "Profile updated successfully.",
            };
        } catch (err) {
            const message =
                err.response?.data?.message ||
                "Failed to update profile.";

            setError(message);

            return {
                success: false,
                message,
            };
        } finally {
            setSaving(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return {
        profile,
        setProfile,
        loading,
        error,
        saving,
        setSaving,
        fetchProfile,
        saveProfile,
    };
}