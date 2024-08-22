import React from "react";

const Biography = ({ imageURL }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-16">
      {/* <div className="md:w-1/3 mb-8 md:mb-0">
        <img
          src={imageURL}
          alt="Biography"
          className="w-50 h-auto rounded-full mr-10 shadow-xl transform transition-transform duration-500 hover:scale-105"
        />
      </div> */}
      <div className="md:w-2/3 px-4">
        <p className="text-purple-600 text-lg uppercase tracking-widest mb-4 text-center">
          About Us
        </p>
        <h3 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Who We Are
        </h3>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <p className="text-gray-800 font-medium">
            At Tata Motors Hospital, we are committed to providing exceptional
            healthcare services with a focus on compassion and excellence. Our
            dedicated team of medical professionals uses the latest technology
            to ensure the highest standards of care.
          </p>
          <p className="text-gray-800">
            Established in 1945, our hospital has grown into a leading
            healthcare institution, renowned for our expertise in patient care,
            medical research, and education. We offer a comprehensive range of
            services to address all aspects of your health and wellness.
          </p>
          <p className="text-gray-800">
            We take a holistic approach to healthcare, emphasizing both
            preventive care and treatment. Our multidisciplinary team
            collaborates to provide personalized care tailored to each patient’s
            unique needs.
          </p>
          <p className="text-gray-800">
            Our mission is to enhance the well-being of our community by
            providing access to top-quality medical care and promoting a
            healthier lifestyle through our services and educational programs.
          </p>
          <p className="text-gray-800 font-medium">
            We are proud to be a trusted healthcare partner, dedicated to making
            a positive impact on the lives of our patients and their families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
