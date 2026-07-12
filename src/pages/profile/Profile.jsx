import BodyInfoCard from "../../components/profile/BodyInfoCard";
import FitnessInfoCard from "../../components/profile/FitnessInfoCard";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import SaveProfileButton from "../../components/profile/SaveProfileButton";
import useProfile from "../../hooks/useProfile";

function Profile() {
  const { profile, loading, error, setProfile } = useProfile();

  console.log(profile);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal and fitness information.
          </p>
        </div>


        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 h-fit">
              <ProfileSidebar profile={profile} />
            </div>
          </div>


          {/* Scrollable Content */}
          <div className="lg:col-span-2 space-y-6">

            <PersonalInfoCard
              profile={profile}
              setProfile={setProfile}
            />

            <BodyInfoCard
              profile={profile}
              setProfile={setProfile}
            />

            <FitnessInfoCard
              profile={profile}
              setProfile={setProfile}
            />

            <SaveProfileButton />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;