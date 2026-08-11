import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";

function RootRedirect() {
    const { isAuthenticated } = useAuth();
    const { profile, loading } = useProfile();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile?.profileCompleted) {
        return <Navigate to="/profile" replace />;
    }

    return <Navigate to="/dashboard" replace />;
}

export default RootRedirect;