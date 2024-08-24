import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewAdmin = () => {
  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
 



  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/admin/addnew",
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl  ">
        <img src="/logo.png" alt="logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-xl font-bold text-center text-gray-800 mb-8">
          ADD NEW ADMIN
        </h1>
        <form onSubmit={handleAddNewAdmin} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="number"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              placeholder="NIC Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              ADD NEW ADMIN
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default AddNewAdmin;
