import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import MusicCard from "../../compenents/music/MusicCard";
import axios from "axios";

const MusicList = () => {
  const [state, setState] = useState({
    musicData: [],
    loading: true,
    error: null,
  });
  const { musicData, loading, error } = state;

  useEffect(() => {
    const fetchMusicData = setTimeout(async () => {
      try {
        let res = await axios.get("http://localhost:3000/api/music");
        let data = await res.data;

        setState((prev) => ({
          ...prev,
          musicData: data,
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
    }, 2000);
    return () => clearTimeout(fetchMusicData);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error)
    return (
      <h1 className="text-center text-2xl font-semibold text-red-500 mt-20">
        Error : {error}
      </h1>
    );

  return (
    <div className="container mx-auto p-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
        Music & Art
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {Array.isArray(musicData) &&
          musicData.map(({ name, description, genre, _id }) => {
            return (
              <Link
                to={`/music/${_id}`}
                key={_id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center"
              >
                <MusicCard
                  name={name}
                  description={description}
                  genre={genre}
                  _id={_id}
                />
              </Link>
            );
          })}
      </div>
      <Outlet />
    </div>
  );
};

export default MusicList;
