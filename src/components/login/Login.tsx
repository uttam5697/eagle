import { useState } from "react";
import { Logo } from "../../assets/Index";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full lg:min-h-screen">
      <div className="flex w-full overflow-hidden lg:flex lg:flex-wrap justify-between aligns-center lg:min-h-screen py-10 lg:py-0">
        {/* Left: Login Form */}
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
                <a href="#" className="text-primary text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-primary text-white font-semibold rounded hover:bg-transparent hover:text-primary border border-primary transition"
              >
                Sign in
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-3 text-gray-400 text-sm">
                Or continue with
              </span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            {/* Social Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="hidden md:block w-full md:w-1/2">
          <div
            className="flex h-full w-full justify-center items-center overflow-hidden px-2 py-5 bg-center bg-cover no-repeat"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)",
            }}
          ></div>
          {/* <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Login visual"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
}