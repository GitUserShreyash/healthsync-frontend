import Select from "react-select";
import { TIMEZONES } from "../../constant/timezones";

function FitnessInfoCard({ profile, setProfile }) {
  if (!profile) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Fitness Information
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Configure your fitness preferences to receive personalized
          recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Goal */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Goal
          </label>

          <select
            name="goal"
            value={profile.goal || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Goal</option>
            <option value="FAT_LOSS">Fat Loss</option>
            <option value="MAINTENANCE">Maintenance</option>
            <option value="MUSCLE_GAIN">Muscle Gain</option>
            <option value="IMPROVE_FITNESS">Improve Fitness</option>
            <option value="WEIGHT_GAIN">Weight Gain</option>
          </select>
        </div>

        {/* Activity Level */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Activity Level
          </label>

          <select
            name="activityLevel"
            value={profile.activityLevel || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Activity Level</option>
            <option value="SEDENTARY">Sedentary</option>
            <option value="LIGHT">Lightly Active</option>
            <option value="MODERATE">Moderately Active</option>
            <option value="ACTIVE">Active</option>
            <option value="VERY_ACTIVE">Very Active</option>
          </select>
        </div>

        {/* Experience */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>

          <select
            name="experienceLevel"
            value={profile.experienceLevel || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Experience</option>
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
          </select>
        </div>

        {/* Timezone */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>

          <select
            name="timezone"
            value={profile.timezone || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Timezone</option>

            {TIMEZONES.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FitnessInfoCard;
