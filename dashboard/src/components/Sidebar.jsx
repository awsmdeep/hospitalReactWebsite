import React, { useContext, useState } from "react";
import { Context } from "../main";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
    setShow(false);
  };
  const gotoDoctorPage = () => {
    navigate("/doctors");
    setShow(false);
  };
  const gotoMessagePage = () => {
    navigate("/messages");
    setShow(false);
  };
  const gotoAddNewDoctor = () => {
    navigate("/doctor/addnew");
    setShow(false);
  };
  const gotoAddNewAdmin = () => {
    navigate("/admin/addnew");
    setShow(false);
  };
  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/user/admin/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  return (
    <>
      <div className="text-center">
        <button
          className="text-white bg-gradient-to-b from-purple-600 to-purple-800 hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-3 shadow-lg transform transition-transform duration-300 active:scale-95"
          type="button"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Menu" : "Show Menu"}
        </button>
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } bg-gradient-to-b from-purple-900 to-purple-800 text-white shadow-2xl transform transition-transform duration-300`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-purple-300 uppercase"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={() => setShow(false)}
          className="text-purple-400 bg-transparent hover:bg-purple-700 hover:text-white rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center shadow-md"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                onClick={gotoHome}
                className="flex items-center p-2 text-white rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-md transform transition-transform duration-300 hover:translate-x-1"
              >
                <TiHome className="w-5 h-5 text-purple-300" />
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={gotoDoctorPage}
                className="flex items-center p-2 text-white rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-md transform transition-transform duration-300 hover:translate-x-1"
              >
                <FaUserDoctor className="w-5 h-5 text-purple-300" />
                <span className="ms-3">Doctors</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={gotoMessagePage}
                className="flex items-center p-2 text-white rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-md transform transition-transform duration-300 hover:translate-x-1"
              >
                <AiFillMessage className="w-5 h-5 text-purple-300" />
                <span className="ms-3">Messages</span>
              </a>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <a
                    href="#"
                    onClick={gotoAddNewDoctor}
                    className="flex items-center p-2 text-white rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-md transform transition-transform duration-300 hover:translate-x-1"
                  >
                    <MdAddModerator className="w-5 h-5 text-purple-300" />
                    <span className="ms-3">Add Doctor</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={gotoAddNewAdmin}
                    className="flex items-center p-2 text-white rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-md transform transition-transform duration-300 hover:translate-x-1"
                  >
                    <IoPersonAddSharp className="w-5 h-5 text-purple-300" />
                    <span className="ms-3">Add Admin</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center p-2 text-white rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-md transform transition-transform duration-300 hover:translate-x-1 w-full text-left"
                  >
                    <RiLogoutBoxFill className="w-5 h-5 text-purple-300" />
                    <span className="ms-3">Logout</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
