import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import VerifyOtp from "../pages/auth/VerifyOtp.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import ResetPassword from "../pages/auth/ResetPassword.jsx";

import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Hydration from "../pages/hydration/Hydration.jsx";
import Meals from "../pages/meals/Meals.jsx";
import Workouts from "../pages/workouts/Workouts.jsx";
import Progress from "../pages/progress/Progress.jsx";
import Profile from "../pages/profile/Profile.jsx";
import ReminderSettings from "../pages/settings/ReminderSettings.jsx";

import AiCoach from "../pages/ai/AiCoach.jsx";
import MealRecommendations from "../pages/ai/MealRecommendations.jsx";
import WorkoutRecommendations from "../pages/ai/WorkoutRecommendations.jsx";

import Insights from "../pages/insights/Insights.jsx";
import Goal from "../pages/goal/Goal.jsx";

import useAuth from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";

import ProtectedRoute from "./ProtectedRoute";
import ProfileGuard from "./ProfileGuard";

export default function AppRoutes() {
  const { isAuthenticated, loading: authLoading } = useAuth();

  const { profile, loading: profileLoading } = useProfile();

  // Authentication is still being checked
  if (authLoading) {
    return <div>Loading...</div>;
  }

  // If user is authenticated, profile is required
  // to decide whether to show profile or dashboard.
  if (isAuthenticated && profileLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Root */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            profile?.profileCompleted ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/profile" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Authentication routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Profile must always remain accessible */}
        <Route path="/profile" element={<Profile />} />

        {/* Profile completion required */}
        <Route element={<ProfileGuard />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/hydration" element={<Hydration />} />

          <Route path="/meals" element={<Meals />} />

          <Route path="/workouts" element={<Workouts />} />

          <Route path="/progress" element={<Progress />} />

          <Route path="/settings" element={<ReminderSettings />} />

          <Route path="/ai" element={<AiCoach />} />

          <Route path="/ai/meals" element={<MealRecommendations />} />

          <Route path="/ai/workouts" element={<WorkoutRecommendations />} />

          <Route path="/insights" element={<Insights />} />

          <Route path="/goals" element={<Goal />} />
        </Route>
      </Route>

      {/* Unknown route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
