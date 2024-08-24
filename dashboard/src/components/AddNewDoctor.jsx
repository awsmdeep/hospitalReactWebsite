import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewDoctor = () => {
  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl:
        "https://www.diginerve.com/wp-content/uploads/2022/12/Important-Topics-to-Master-Pediatrics-in-PG.webp",
    },
    {
      name: "Orthopedics",
      imageUrl:
        "https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/07/14133118/orthopedic.jpg",
    },
    {
      name: "Cardiology",
      imageUrl:
        "https://ssbhealthcare.com/wp-content/uploads/2022/09/Untitled-3-2.png",
    },
    {
      name: "Neurology",
      imageUrl:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Neurology-620x480.jpg",
    },
    {
      name: "Oncology",
      imageUrl:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Oncology1-620x480.jpg",
    },
    {
      name: "Radiology",
      imageUrl:
        "https://bmhkannur.com/wp-content/uploads/2024/05/radiology.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl:
        "https://healthtalk.unchealthcare.org/wp-content/uploads/2022/10/HealthTalk_PhysicalTherapist.jpg",
    },
    {
      name: "Dermatology",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3SM-_E3ZuYuToFZvq3SSV4Pd56e_nEXcWg&s",
    },
    {
      name: "ENT",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS42vR0PR1FT56IK1qQ8FkRhLS1SJgPUK3g&s",
    },
  ];

  const navigate = useNavigate();

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("nic", nic);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      formData.append("dob", dob);

      const res = await axios.post(
        "http://localhost:5000/api/v1/user/doctor/addnew",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
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
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <img src="/logo.png" alt="logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-xl font-bold text-center text-gray-800 mb-8">
          REGISTER NEW DOCTOR
        </h1>
        <form onSubmit={handleAddNewDoctor} className="space-y-6">
          <div className="flex flex-col items-center mb-6">
            <div className="mb-4 text-center">
              <img
                src={docAvatarPreview || "https://media.istockphoto.com/id/981306892/vector/default-placeholder-doctor-half-length-portrait.jpg?s=612x612&w=0&k=20&c=9EitM5E0jTMAV0rCE8fsBOPJEDGHOwK0TeeDSZdJhio="}
                alt="Doctor Avatar"
                className="w-32 h-32 object-cover rounded-full border-2 mb-5 border-gray-300 mx-auto"
              />
              <label className="mt-5 cursor-pointer">
                <span className="bg-purple-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  Upload
                </span>
                <input type="file" onChange={handleAvatar} className="hidden" />
              </label>
            </div>
          </div>
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
              type="tel"
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
            <select
              value={doctorDepartment}
              onChange={(e) => setDoctorDepartment(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Department</option>
              {departmentsArray.map((department, index) => (
                <option value={department.name} key={index}>
                  {department.name}
                </option>
              ))}
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
              Register New Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewDoctor;
