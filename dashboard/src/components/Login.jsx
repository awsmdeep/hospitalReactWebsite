import React, { useContext, useState, useEffect } from "react";
import { Context } from "../main";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        { email, password, confirmPassword, role: "Admin" },
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
    <>
      <section className="container mx-auto my-20 p-8 bg-gray-100 rounded-lg shadow-2xl max-w-md">
        <img src="/logo.png" alt="logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
          WELCOME TO TATA MOTORS HOSPITAL
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Only Admins Are Allowed To Access These Resources!
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
