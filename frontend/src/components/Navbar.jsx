import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { FaHome, FaCalendarAlt, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res)=>{
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
    .catch((err)=>{
      toast.error(err.response?.data?.message || "Logout failed");
    })
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-opacity-0 rounded-2xl text-black shadow-2xl py-4 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="w-full h-10 object-cover" />
        </div>

        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex items-center space-x-6 text-lg font-medium`}>
          <Link to="/" className="flex items-center hover:text-indigo-300 transition duration-300">
            <FaHome className="mr-2" /> HOME
          </Link>
          <Link to="/appointment" className="flex items-center hover:text-indigo-300 transition duration-300">
            <FaCalendarAlt className="mr-2" /> APPOINTMENT
          </Link>
          <Link to="/about" className="flex items-center hover:text-indigo-300 transition duration-300">
            <FaUser className="mr-2" /> ABOUT US
          </Link>
          {isAuthenticated ? (
            <button 
              className="text-lg font-medium text-white bg-purple-500 hover:bg-purple-600 rounded py-2 px-4 transition duration-300" 
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          ) : (
            <button 
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition duration-300" 
              onClick={goToLogin}
            >
              LOGIN
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-2xl focus:outline-none" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`md:hidden mt-4 space-y-2 ${show ? "block" : "hidden"}`}>
        <Link to="/" className="block text-lg font-medium text-black hover:bg-gray-700 p-2 rounded transition duration-300" onClick={() => setShow(false)}>
          HOME
        </Link>
        <Link to="/appointment" className="block text-lg font-medium text-black hover:bg-gray-700 p-2 rounded transition duration-300" onClick={() => setShow(false)}>
          APPOINTMENT
        </Link>
        <Link to="/about" className="block text-lg font-medium text-black hover:bg-gray-700 p-2 rounded transition duration-300" onClick={() => setShow(false)}>
          ABOUT US
        </Link>
        {isAuthenticated ? (
          <button 
            className="text-lg font-medium bg-purple-500 hover:bg-purple-600 rounded py-2 px-4 transition duration-300" 
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        ) : (
          <button 
            className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition duration-300" 
            onClick={goToLogin}
          >
            LOGIN
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
