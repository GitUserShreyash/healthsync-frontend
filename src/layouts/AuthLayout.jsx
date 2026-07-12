import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Branding */}

      <div
        className="
                hidden lg:flex
                w-1/2
                relative
                overflow-hidden
                bg-linear-to-br
                from-green-600
                to-emerald-400
                flex-col
                justify-center
                px-16
                text-white
                "
      >
        {/* Decorative circles */}

        <div
          className="
                    absolute
                    -top-20
                    -left-20
                    w-72
                    h-72
                    bg-white/10
                    rounded-full
                "
        ></div>

        <div
          className="
                    absolute
                    bottom-10
                    right-10
                    w-60
                    h-60
                    bg-white/10
                    rounded-full
                "
        ></div>

        <h1
          className="
                    text-6xl
                    font-extrabold
                    tracking-tight
                "
        >
          HealthSync
        </h1>

        <p
          className="
                    mt-6
                    text-xl
                    text-green-50
                    max-w-md
                "
        >
          Your personal health companion. Track fitness, nutrition and wellness
          all in one place.
        </p>

        <div
          className="
                    flex
                    gap-5
                    mt-10
                "
        >
          <div
            className="
                        bg-white/20
                        backdrop-blur-md
                        rounded-xl
                        px-5
                        py-4
                    "
          >
            <p className="text-2xl">💪</p>
            <p className="text-sm">Workouts</p>
          </div>

          <div
            className="
                        bg-white/20
                        backdrop-blur-md
                        rounded-xl
                        px-5
                        py-4
                    "
          >
            <p className="text-2xl">🥗</p>
            <p className="text-sm">Nutrition</p>
          </div>

          <div
            className="
                        bg-white/20
                        backdrop-blur-md
                        rounded-xl
                        px-5
                        py-4
                    "
          >
            <p className="text-2xl">❤️</p>
            <p className="text-sm">Health</p>
          </div>
        </div>
      </div>

      {/* Right Section */}

      <div
        className="
                w-full
                lg:w-1/2
                flex
                items-center
                justify-center
                p-8
            "
      >
        <div
          className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    w-full
                    max-w-md
                    p-8
                "
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
