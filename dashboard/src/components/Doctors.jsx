import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(res.data.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching doctors");
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Doctors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        {doctors && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white p-6 rounded-lg shadow-2xl transform -translate-y-1 translate-x-1 flex flex-col items-center"
            >
              <img
                src={doctor.docAvatar?.url || "https://via.placeholder.com/150"}
                alt="Doctor Avatar"
                className="w-32 h-32 object-cover rounded-full shadow-2xl transform -translate-y-1 translate-x-1 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-4 bg-[#CCBBF9] p-2 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-center">
                {`${doctor.firstName} ${doctor.lastName}`}
              </h4>
              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-blue-600 mb-2 bg-gray-100 p-3 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-start w-full max-w-xs">
                  EMAIL:{" "}
                  <span className="font-semibold text-gray-900">
                    {doctor.email}
                  </span>
                </p>
                <p className="text-sm font-medium text-blue-600 mb-2 bg-gray-100 p-3 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-start w-full max-w-xs">
                  PHONE NUMBER:{" "}
                  <span className="font-semibold text-gray-900">
                    {doctor.phone}
                  </span>
                </p>
                <p className="text-sm font-medium text-blue-600 mb-2 bg-gray-100 p-3 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-start w-full max-w-xs">
                  DOB:{" "}
                  <span className="font-semibold text-gray-900">
                    {doctor.dob.substring(0, 10)}
                  </span>
                </p>
                <p className="text-sm font-medium text-blue-600 mb-2 bg-gray-100 p-3 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-start w-full max-w-xs">
                  DEPARTMENT:{" "}
                  <span className="font-semibold text-gray-900">
                    {doctor.doctorDepartment}
                  </span>
                </p>
                <p className="text-sm font-medium text-blue-600 mb-2 bg-gray-100 p-3 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-start w-full max-w-xs">
                  NIC:{" "}
                  <span className="font-semibold text-gray-900">
                    {doctor.nic}
                  </span>
                </p>
                <p className="text-sm font-medium text-blue-600 mb-2 bg-gray-100 p-3 rounded-md shadow-2xl transform -translate-y-1 translate-x-1 text-start w-full max-w-xs">
                  GENDER:{" "}
                  <span className="font-semibold text-gray-900">
                    {doctor.gender}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-bold text-gray-700 text-center col-span-full">
            No Registered Doctor Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Doctors;
