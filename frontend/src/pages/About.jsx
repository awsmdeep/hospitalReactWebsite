import React from "react";
import { FaHospital, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 py-10 text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Tata Motors Hospital
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Where Compassion Meets Excellence
        </p>
        <img
          src="https://plus.unsplash.com/premium_photo-1675686363477-c28d5bf65adb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tata Motors Hospital"
          className="w-full h-80 object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 lg:flex lg:space-x-8 mb-12">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-md text-gray-700 mb-4">
            Tata Motors Hospital is a premier healthcare institution committed to delivering exceptional medical services. Our dedicated team of professionals combines expertise with a compassionate approach to ensure the highest standards of patient care.
          </p>
          <p className="text-md text-gray-700 mb-4">
            We are equipped with cutting-edge technology and a patient-centered focus, offering a range of services from emergency care to advanced surgical procedures. Our goal is to enhance the quality of life for our patients and their families.
          </p>
          <p className="text-md text-gray-700">
            At Tata Motors Hospital, we believe in treating each patient with the utmost respect and providing personalized care tailored to individual needs.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <div className="flex items-center mb-4">
              <FaHospital className="text-purple-500 text-3xl mr-4" />
              <p className="text-lg text-gray-700">123 Healthcare Lane, Cityville, Country</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-purple-500 text-3xl mr-4" />
              <p className="text-lg text-gray-700">+1 (234) 567-8901</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-purple-500 text-3xl mr-4" />
              <p className="text-lg text-gray-700">contact@tatamotorshospital.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className=" text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Exceptional Care?</h2>
        <p className="text-lg mb-8">Contact us today to schedule an appointment or learn more about our services.</p>
        <a
          href="mailto:contact@tatamotorshospital.com"
          className="bg-white text-purple-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
