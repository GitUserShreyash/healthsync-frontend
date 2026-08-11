import { createContext, useCallback, useContext, useEffect, useState } from "react";
import profileService from "../services/profileService";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const profileData = await profileService.getProfile();

      console.log("Fetched profile data:", profileData);

      setProfile(profileData);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load profile."
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

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        loading,
        error,
        saving,
        setSaving,
        fetchProfile,
        saveProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  return useContext(ProfileContext);
}