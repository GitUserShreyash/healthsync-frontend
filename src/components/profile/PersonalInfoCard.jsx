import useAuth from "../../hooks/useAuth";

function PersonalInfoCard({ profile, setProfile }) {
    const {user} = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Email */}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        value={user?.email || ""}
                        disabled
                        className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3"
                    />
                </div>

                {/* Age */}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Age
                    </label>

                    <input
                        type="number"
                        name="age"
                        value={profile.age || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>

                {/* Gender */}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Gender
                    </label>

                    <select
                        name="gender"
                        value={profile.gender || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    >
                        <option value="">Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                    </select>

                </div>

            </div>

        </div>
    );
}

export default PersonalInfoCard;