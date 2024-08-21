import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "https://www.diginerve.com/wp-content/uploads/2022/12/Important-Topics-to-Master-Pediatrics-in-PG.webp",
    },
    {
      name: "Orthopedics",
      imageUrl: "https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/07/14133118/orthopedic.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "https://ssbhealthcare.com/wp-content/uploads/2022/09/Untitled-3-2.png",
    },
    {
      name: "Neurology",
      imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Neurology-620x480.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Oncology1-620x480.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "https://bmhkannur.com/wp-content/uploads/2024/05/radiology.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "https://healthtalk.unchealthcare.org/wp-content/uploads/2022/10/HealthTalk_PhysicalTherapist.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3SM-_E3ZuYuToFZvq3SSV4Pd56e_nEXcWg&s",
    },
    {
      name: "ENT",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS42vR0PR1FT56IK1qQ8FkRhLS1SJgPUK3g&s",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Our Departments
        </h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["mobile", "tablet"]}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-20-px"
          className="relative"
        >
          {departmentsArray.map((depart, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 mx-5 bg-white rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={depart.imageUrl}
                alt={depart.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-lg font-semibold text-gray-800">{depart.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Departments;
