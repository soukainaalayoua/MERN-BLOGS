import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import CookingCard from "../../compenents/cooking/CookingCard";
import axios from "axios";

const CookingList = () => {
  const [state, setState] = useState({
    cookingData: [],
    loading: true,
    error: null,
  });
  const { cookingData, loading, error } = state;

  useEffect(() => {
    const fetchCookingData = setTimeout(async () => {
      try {
        let res = await axios.get("http://localhost:3000/api/cooking");
        let data = await res.data;

        setState((prev) => ({
          ...prev,
          cookingData: data,
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
    return () => clearTimeout(fetchCookingData);
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
        Cooking Recipes
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {Array.isArray(cookingData) &&
          cookingData.map(
            ({ name, description, longdescription, chef, _id }) => {
              return (
                <Link
                  to={`/cooking/${_id}`}
                  key={_id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center"
                >
                  <CookingCard
                    name={name}
                    description={description}
                    longdescription={longdescription}
                    chef={chef}
                    _id={_id}
                  />
                </Link>
              );
            }
          )}
      </div>
      <Outlet />
    </div>
  );
};

export default CookingList;
