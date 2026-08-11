import { Navigate, Outlet } from "react-router-dom";
import useProfile from "../hooks/useProfile";

function ProfileGuard() {
  const { profile, loading } = useProfile();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.profileCompleted) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
}

export default ProfileGuard;