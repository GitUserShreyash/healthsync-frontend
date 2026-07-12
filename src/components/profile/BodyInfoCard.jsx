function BodyInfoCard({ profile, setProfile }) {

    if (!profile) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: value === "" ? "" : Number(value),
        }));
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Body Information
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    Enter your current height and weight for accurate health calculations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Height */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Height (cm)
                    </label>

                    <input
                        type="number"
                        name="heightCm"
                        min="50"
                        max="300"
                        step="0.1"
                        value={profile.heightCm ?? ""}
                        onChange={handleChange}
                        placeholder="e.g. 175"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                    />
                </div>

                {/* Weight */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight (kg)
                    </label>

                    <input
                        type="number"
                        name="weightKg"
                        min="20"
                        max="500"
                        step="0.1"
                        value={profile.weightKg ?? ""}
                        onChange={handleChange}
                        placeholder="e.g. 70"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                    />
                </div>

            </div>

            {/* BMI Preview */}
            <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-100">

                <h3 className="font-semibold text-green-700 mb-2">
                    Health Summary
                </h3>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <p className="text-sm text-gray-500">
                            BMI
                        </p>

                        <p className="text-lg font-bold text-gray-800">
                            {profile.bmi ?? "--"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            BMI Category
                        </p>

                        <p className="text-lg font-bold text-green-700">
                            {profile.bmiCategory ?? "--"}
                        </p>
                    </div>

                </div>

                <p className="text-xs text-gray-500 mt-4">
                    BMI is calculated automatically by HealthSync after you save your profile.
                </p>

            </div>

        </div>
    );
}

export default BodyInfoCard;