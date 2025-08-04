"use client"

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  
  const handleLogin = async (e) => {
   e.preventDefault()
   if(!email || !password) {
    setError("Please enter email and password")
    return
   }

   setIsLoading(true)
   setError("")
// at to add await from firebase
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="text-white text-4xl font-bold mb-2">
            𝕏
          </div>
          <h2 className="text-3xl font-bold text-white">
            Sign in to X
          </h2>
        </div>

        {/* Form Container */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8 shadow-xl">
         

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black mt-6"
            >
              Sign in
            </button>
          </div>

          {/* Forgot Password */}
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 text-sm transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <span className="text-gray-400">
              Don't have an account?{' '}
            </span>
            <Link
              to="register"
              className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-xs text-gray-500">
          By continuing, you acknowledge that you have read and understand, and agree to X's{' '}
          <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and{' '}
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}