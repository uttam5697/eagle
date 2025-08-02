import { useState } from "react";
import { Logo } from "../../assets/Index";
import { FiEye, FiEyeOff } from "react-icons/fi";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up data:', formData);
  };

  return (
    <div className="w-full lg:min-h-screen">
      <div className="flex w-full overflow-hidden lg:flex lg:flex-wrap justify-between aligns-center lg:min-h-screen py-10 lg:py-0">
        {/* Left: Sign Up Form */}
        <div className="w-full md:w-1/2 px-3 flex flex-col justify-center">
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
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
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
              <a href="/login" className="text-primary text-sm hover:underline">
                Sign in
              </a>
            </div>

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
        </div>
      </div>
    </div>
  );
}