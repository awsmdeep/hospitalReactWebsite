import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [messages, setMessages] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(res.data.appointment);
      } catch (error) {
        setAppointments([]);
        console.log("Some error occurred while fetching appointments", error);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating status");
    }
  };

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
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/message/getall", {
          withCredentials: true,
        });
        console.log(res.data);
        
        setMessages(res.data.messages);
      } catch (error) {
        console.log("Error occurred while fetching messages", error);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-10">
        <div className="flex items-center mb-6 p-3 rounded-full shadow-2xl transform -translate-y-1 translate-x-1 bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10431/10431626.png"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <p className="text-lg font-medium text-gray-700">Hello,</p>
            <h5 className="text-3xl font-bold text-gray-900">
              {user && `${user.firstName} ${user.lastName}`}
            </h5>
            <p className="mt-3 text-gray-600">
              Welcome to your dashboard! Here, you can manage your appointments,
              track patient visits, and stay updated on the latest activity. Our
              goal is to ensure a seamless experience for both patients and
              healthcare providers. If you have any questions, don't hesitate to
              reach out to our support team. We're here to help you provide the
              best care possible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-[#CCBBF9] rounded-lg shadow-2xl transform -translate-y-1 translate-x-1">
            <p className="text-sm font-medium text-gray-500">
              Total Appointments
            </p>
            <h3 className="text-3xl font-bold text-gray-800">
              {appointments.length}
            </h3>
          </div>
          <div className="p-6 bg-[#CCBBF9] rounded-lg shadow-2xl transform -translate-y-1 translate-x-1">
            <p className="text-sm font-medium text-gray-500">
              Registered Doctors
            </p>
            <h3 className="text-3xl font-bold text-gray-800">{doctors.length}</h3>
          </div>
          <div className="p-6 bg-[#CCBBF9] rounded-lg shadow-2xl transform -translate-y-1 translate-x-1">
            <p className="text-sm font-medium text-gray-500">
              Users Messages
            </p>
            <h3 className="text-3xl font-bold text-gray-800">{messages.length}</h3>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-2xl font-semibold text-gray-800 mb-6">
          Appointments
        </h5>
        <table className="min-w-full bg-white border border-gray-200 shadow-2xl transform -translate-y-1 translate-x-1">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 border-b text-left text-sm font-medium text-gray-600">
                Patient
              </th>
              <th className="py-3 px-6 border-b text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="py-3 px-6 border-b text-left text-sm font-medium text-gray-600">
                Doctor
              </th>
              <th className="py-3 px-6 border-b text-left text-sm font-medium text-gray-600">
                Department
              </th>
              <th className="py-3 px-6 border-b text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-6 border-b text-left text-sm font-medium text-gray-600">
                Visited
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="py-4 px-6 border-b text-gray-700">
                    {`${appointment.firstName} ${appointment.lastName}`}
                  </td>
                  <td className="py-4 px-6 border-b text-gray-700">
                    {appointment.dob ? appointment.dob.substring(0, 10) : "N/A"}
                  </td>
                  <td className="py-4 px-6 border-b text-gray-700">
                    {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                  </td>
                  <td className="py-4 px-6 border-b text-gray-700">
                    {appointment.department}
                  </td>
                  <td className="py-4 px-6 border-b">
                    <select
                      className={`bg-gray-100 p-2 rounded-md ${
                        appointment.status === "Pending"
                          ? "text-yellow-600"
                          : appointment.status === "Rejected"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                      value={appointment.status}
                      onChange={(e) =>
                        handleUpdateStatus(appointment._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="py-4 px-6 border-b text-gray-700">
                    {appointment.hasVisited ? "Yes" : "No"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-600">
                  No Appointments
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
