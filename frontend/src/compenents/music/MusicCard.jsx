import React from "react";
import { Link } from "react-router-dom";

const MusicCard = ({ name, description, genre, _id }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 transform duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 min-w-[250px] flex flex-col">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
      {name}
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 flex-grow">
      {description}
    </p>
    {/* <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 flex-grow">
      {longdescription}
    </p> */}
    <p className="text-sm md:text-base text-gray-500">
      <strong className="text-gray-300">Genre:</strong> {genre}
    </p>
    <div className="mt-4 flex justify-center">
      <Link to={`/music/${_id}`} className="details-link">
        <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-pink-700 transition duration-200 cursor-pointer">
          View Details
        </button>
      </Link>
    </div>
  </div>
);
export default MusicCard;
