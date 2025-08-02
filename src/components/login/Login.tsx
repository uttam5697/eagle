import { useState } from "react";
import { Logo } from "../../assets/Index";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full lg:min-h-screen flex justify-center items-center flex-col py-4">
      <div className="w-full md:w-1/2  px-3 flex flex-col justify-center">
        <div className="w-full bg-white rounded-lg md:p-4 p-3 shadow-lg max-w-[500px] mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Eagle Logo" />
          </div>
          <h2 className="xl:text-2xl lg:text-xl md:text-base text-base font-bold text-black mb-2 text-center">
            Sign in to your account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block md:text-sm text-xs font-medium text-black mb-1">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <label className="block md:text-sm text-xs font-medium text-black mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
              <div
                className="absolute right-3 top-10 cursor-pointer text-blacks"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm accent-black">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link
                to={"/forgot-password"}
                className="text-primary text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-semibold rounded hover:bg-transparent hover:text-primary border border-primary transition"
            >
              Sign in
            </button>
          </form>
          <div className="text-center mt-4">
            <Link
              to={"/sign-up"}
              className="text-black font-bold text-sm hover:underline"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}