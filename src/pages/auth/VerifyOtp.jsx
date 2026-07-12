import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const otpValue = useMemo(() => otp.join(""), [otp]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const previousInput = document.getElementById(`otp-${index - 1}`);
      previousInput?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("text").trim();

    if (!/^\d{6}$/.test(pastedValue)) {
      return;
    }

    setOtp(pastedValue.split(""));
    document.getElementById("otp-5")?.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setError("Missing email address. Please register again.");
      return;
    }

    if (!/^\d{6}$/.test(otpValue)) {
      setError("Enter the 6-digit code sent to your email.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await authService.verifyEmail({ email, otp: otpValue });

      setSuccess("Email verified successfully.");

      navigate("/login", {
        replace: true,
        state: { message: "Account verified. Please log in." },
      });
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          err.response?.data ||
          "Unable to verify OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Verify OTP</h1>

      <p className="mt-2 mb-8 text-gray-500">
        Enter the 6-digit code we sent to {email || "your email"}.
      </p>

      {error && (
        <div className="mb-5 rounded-md bg-red-100 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-5 rounded-md bg-green-100 p-3 text-sm text-green-700">
          {success}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Verification Code
          </label>

          <div className="grid grid-cols-6 gap-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                className="h-12 w-full rounded-xl border border-gray-300 text-center text-lg font-semibold tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Didn&apos;t receive the code?
        <Link to="/register" className="ml-1 font-semibold text-green-600">
          Go back
        </Link>
      </p>
    </div>
  );
}
