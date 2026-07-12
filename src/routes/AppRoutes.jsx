import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import Landing from "../pages/Landing.jsx";
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
import HealthInsights from "../pages/ai/HealthInsights.jsx";
import GoalSuggestions from "../pages/ai/GoalSuggestions.jsx";
import useAuth from "../hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hydration" element={<Hydration />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<ReminderSettings />} />
        <Route path="/ai" element={<AiCoach />} />
        <Route path="/ai/meals" element={<MealRecommendations />} />
        <Route path="/ai/workouts" element={<WorkoutRecommendations />} />
        <Route path="/ai/insights" element={<HealthInsights />} />
        <Route path="/ai/goals" element={<GoalSuggestions />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
