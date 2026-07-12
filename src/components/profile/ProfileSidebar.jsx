function ProfileSidebar({ profile }) {
    console.log("ProfileSidebar rendered", profile);
    if (!profile) return null;

    const formatEnum = (value) => {
        if (!value) return "-";

        return value
            .replace(/_/g, " ")
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

            {/* Avatar */}
            <div className="flex flex-col items-center">

                <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-4xl font-bold text-white">
                    {profile.username?.charAt(0).toUpperCase()}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                    {profile.username}
                </h2>

                <p className="text-gray-500 text-center">
                    {profile.email}
                </p>

                <span className="mt-4 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    Verified Account
                </span>

            </div>

            <hr className="my-6" />

            {/* Profile Summary */}

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-gray-500">
                        Goal
                    </span>

                    <span className="font-semibold">
                        {formatEnum(profile.goal)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">
                        Activity
                    </span>

                    <span className="font-semibold">
                        {formatEnum(profile.activityLevel)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">
                        Experience
                    </span>

                    <span className="font-semibold">
                        {formatEnum(profile.experienceLevel)}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">
                        Timezone
                    </span>

                    <span className="font-semibold">
                        {profile.timezone || "-"}
                    </span>
                </div>

            </div>

        </div>
    );
}

export default ProfileSidebar;