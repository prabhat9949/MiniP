import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('student');  // New state to track user type

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup Details:', { username, email, password, confirmPassword, userType });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* User Type (Student or Landlord/Accommodator) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Register As
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="userType"
                  value="student"
                  checked={userType === 'student'}
                  onChange={() => setUserType('student')}
                  className="form-radio"
                />
                <span>Student</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="userType"
                  value="landlord"
                  checked={userType === 'landlord'}
                  onChange={() => setUserType('landlord')}
                  className="form-radio"
                />
                <span>Landlord/Accommodator</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out mt-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
