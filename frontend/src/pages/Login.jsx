import React, { useContext, useState, useEffect } from "react";
import { Context } from "../main";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.message || "Error occurred");
      toast.error(error.response?.data?.message || "Error occurred");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Sign In
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Please login to continue
        </p>
        <form onSubmit={handlelogin}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="text-center mb-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Not Registered?</p>
            <Link
              to="/register"
              className="text-purple-500 hover:underline transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
