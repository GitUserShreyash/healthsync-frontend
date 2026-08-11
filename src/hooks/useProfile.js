import { useProfileContext } from "../context/ProfileContext";

export default function useProfile() {
  return useProfileContext();
}