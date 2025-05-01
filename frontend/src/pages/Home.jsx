import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logoutButton = () => {
    localStorage.removeItem("token"); // remove token in logout
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-pink-700 to-pink-500 text-white p-4">
      {/* Signup and Login Buttons at the top right */}
      <div className="flex justify-end w-full p-4">
        <div className="flex gap-5">
          <Link
            to="/signup"
            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-md transform hover:scale-110 transition duration-300 ease-in-out text-center"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-md transform hover:scale-110 transition duration-300 ease-in-out text-center"
          >
            Login
          </Link>
          <button
            onClick={logoutButton}
            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-md transform hover:scale-110 transition duration-300 ease-in-out text-center"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center text-teal-950">
          WELCOME TO OUR BLOG WORLD
        </h1>
        <p className="text-xl md:text-lg m-8 text-center text-teal-950 ">
          Pick a topic to discover
        </p>

        {/* Circular Buttons for Cooking and Music */}
        <div className="flex md:flex-row gap-8 justify-center items-center">
          {/* Cooking & Recipes Circle Button */}
          <Link
            to="/cooking"
            className="bg-gradient-to-r from-pink-500 to-pink-400  text-white w-40 h-40 flex items-center justify-center rounded-full text-2xl font-semibold shadow-md transform hover:scale-110 transition duration-300 ease-in-out text-center"
          >
            Cooking
          </Link>

          {/* Music & Arts Circle Button */}
          <Link
            to="/music"
            className="bg-gradient-to-r  from-pink-500 to-pink-400 text-white w-40 h-40 flex items-center justify-center rounded-full text-2xl font-semibold shadow-md transform hover:scale-110 transition duration-300 ease-in-out text-center"
          >
            Music
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
