import {
  FaHome,
  FaUtensils,
  FaDumbbell,
  FaTint,
  FaChartLine,
  FaRobot,
  FaLightbulb,
  FaBullseye,
  FaUser,
  FaCog,
} from "react-icons/fa";

export const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: FaHome,
  },
  {
    name: "Meals",
    path: "/meals",
    icon: FaUtensils,
  },
  {
    name: "Workouts",
    path: "/workouts",
    icon: FaDumbbell,
  },
  {
    name: "Hydration",
    path: "/hydration",
    icon: FaTint,
  },
  {
    name: "Progress",
    path: "/progress",
    icon: FaChartLine,
  },
  {
    name: "AI Coach",
    path: "/ai",
    icon: FaRobot,
  },
  {
    name: "Insights",
    path: "/insights",
    icon: FaLightbulb,
  },
  {
    name: "Goals",
    path: "/goals",
    icon: FaBullseye,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FaUser,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FaCog,
  },
];
