import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import video from "../assets/video.mp4";
import image1 from "../assets/image1.jpg"

function Home() {
  return (
    <div className="flex flex-col items-center mt-6 ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        Making Education accessible
        <span className="bg-gradient-to-r from-blue-500 to-blue-950 text-transparent bg-clip-text">
          {" "}
          through Tech
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Eductation should not be a luxary only few can access,{" "}
      </p>
      <div className="flex items-center flex-shrink-0 mt-10">
        <img
          className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src={image1}
          alt="image1"
        />
        <span className="text-xl tracking-tight ml-6">
          <blockquote>
            Education is what remains after one has forgotten what one has
            learned in school
          </blockquote>
          ALBERT EISTEIN
        </span>
      </div>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-red-900 py-3 px-4 mx-3 rounded-md text-white"
        >
          Start Learning
        </a>
      </div>
      <div className="flex  justify-center ">
        <video
          autoPlay
          loop
          
          className="rounded-lg w-[80%] border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;
