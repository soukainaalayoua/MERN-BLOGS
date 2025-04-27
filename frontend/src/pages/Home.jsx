import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 ">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center ">
        WELCOME TO OUR BLOG WORLD
      </h1>
      <p className="text-base md:text-lg mb-8 text-center ">
        Pick a topic to discover
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <Link
          to="/cooking"
          className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-md hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-110 text-center"
        >
          cooking & Recipes
        </Link>
        <Link
          to="/music"
          className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-md hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-110 text-center"
        >
          Music & Arts
        </Link>
      </div>
    </div>
  );
};

export default Home;
