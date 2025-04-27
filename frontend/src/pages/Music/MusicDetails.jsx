import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MusicDetails = () => {
  const { _id } = useParams();

  const navigate = useNavigate();
  const [state, setState] = useState({
    band: null,
    loading: true,
    error: null,
  });
  const { band, loading, error } = state;
  useEffect(() => {
    const fetchband = setTimeout(async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/music/${_id}`);
        const data = await res.data;
        setState((prev) => ({
          ...prev,
          band: data,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error.message,
        }));
      } finally {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    }, 1000);

    return () => clearTimeout(fetchband);
  }, [_id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      try {
        await axios.delete(`http://localhost:3000/api/music/${_id}`);
        navigate("/music");
      } catch (error) {
        console.error(error);
      }
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return (
      <h1 className="text-center text-2xl font-semibold text-red-500 mt-20">
        error :{error}
      </h1>
    );
  }
  const { name, description, genre } = band;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="container  p-8  flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-8 text-center">{name}</h1>
        <p className="text-lg mb-4">{description}</p>
        {/* <p className="text-lg mb-4">{longdescription}</p> */}
        <p className="text-gray-400 mb-8">
          <strong>Genre :</strong>
          {genre}
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            to={`/music/edit/${_id}`}
            className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer"
          >
            update
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-400 hover:bg-red-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer"
          >
            delet
          </button>
          <Link
            to="/music/new"
            className="bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer"
          >
            Add New Cooking
          </Link>
          <button
            onClick={() => navigate("/")}
            className="bg-green-900 hover:bg-green-500 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};
export default MusicDetails;
