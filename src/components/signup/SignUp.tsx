import { useState } from "react";
import { Logo } from "../../assets/Index";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../lib/api";
import { showToast } from "../../utils/toastUtils";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formattedData = {
        Appuser: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          postal_code: "000000",
          phone_number: "0000000000",
          login_type: "Normal",
          devices_type: "Web",
          devices_name: "mi y1",
          devices_id: "erfrrdfjjweksh123464758nbvbdshjasdwarfe",
          app_version: "1",
        },
      };

      const res = await api.post('/beforeauth/usersignup', formattedData);
      console.log("Signup success:", res.data);
      showToast("Signup successful!", "success");
    } catch (error: any) {
      console.error("Signup error", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="w-full lg:min-h-screen flex justify-center items-center flex-col py-4">
      <div className="w-full md:w-1/2  px-3 flex flex-col justify-center">
        <div className="w-full bg-white rounded-lg md:p-4 p-3 shadow-lg max-w-[500px] mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Eagle Logo" />
          </div>
          <h2 className="xl:text-2xl lg:text-xl md:text-base text-base font-bold text-black mb-2 text-center">
            Create your account
          </h2>
          <p className="text-gray-600 text-sm text-center mb-6">
            Join us and start your journey with Eagle
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div>
                <label className="block md:text-sm text-xs font-medium text-black mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label className="block md:text-sm text-xs font-medium text-black mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block md:text-sm text-xs font-medium text-black mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block md:text-sm text-xs font-medium text-black mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Create a password"
                required
              />
              <div
                className="absolute right-3 top-10 cursor-pointer text-blacks"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block md:text-sm text-xs font-medium text-black mb-1">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Confirm your password"
                required
              />
              <div
                className="absolute right-3 top-10 cursor-pointer text-blacks"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mr-2 mt-[2px]"
                required
                id="agreeToTerms"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-black leading-none accent-black">
                I agree to the{" "}
                <Link to={"/"} className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to={"/"} className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-semibold rounded hover:bg-transparent hover:text-primary border border-primary transition"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">
              Already have an account?{" "}
            </span>
            <Link to={"/login"} className="text-primary text-sm hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}