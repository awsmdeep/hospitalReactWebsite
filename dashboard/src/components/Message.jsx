import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

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
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Messages
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl transform -translate-y-2 translate-x-2">
        {messages && messages.length > 0 ? (
          messages.map((element, index) => (
            <div
              key={index}
              className="mb-6 p-6 border border-gray-300 rounded-lg shadow-xl transform -translate-y-1 translate-x-1"
            >
              <p className="text-sm font-medium text-blue-500 mb-2">
                FIRST NAME:{" "}
                <span className="font-semibold text-gray-900">{element.firstName}</span>
              </p>
              <p className="text-sm font-medium text-blue-500 mb-2">
                LAST NAME:{" "}
                <span className="font-semibold text-gray-900">{element.lastName}</span>
              </p>
              <p className="text-sm font-medium text-blue-500 mb-2">
                EMAIL:{" "}
                <span className="font-semibold text-gray-900">{element.email}</span>
              </p>
              <p className="text-sm font-medium text-blue-500 mb-2">
                PHONE NUMBER:{" "}
                <span className="font-semibold text-gray-900">{element.phone}</span>
              </p>
              <p className="text-sm font-medium text-blue-500 mb-2">
                MESSAGE:{" "}
                <span className="font-semibold text-gray-900">{element.message}</span>
              </p>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-bold text-gray-600 text-center">
            NO MESSAGES
          </h1>
        )}
      </div>
    </div>
  );
};

export default Message;
