import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";


const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Tata Motors Hospital"
        }
        imageURL={"https://lh3.googleusercontent.com/p/AF1QipMH2QhNOcXjIIkVr9tG1kzgDGuErI5vC93jKTFE=s1360-w1360-h1020"}
      />
      <Biography imageURL={"https://lh3.googleusercontent.com/p/AF1QipNwJHjywvCFAEM6WaJ7LGBi4uACC7qSvndgPUV7=s1360-w1360-h1020"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
