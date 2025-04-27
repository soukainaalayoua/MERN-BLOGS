import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CookingForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [longdescription, setLongDescription] = useState("");
  const [chef, setChef] = useState("");

  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:3000/api/cooking/${_id}`)
        .then((response) => {
          const { name, description, chef, longdescription } = response.data;
          setName(name);
          setDescription(description);
          setChef(chef);
          setLongDescription(longdescription);
        })
        .catch((error) => console.log(error));
    }
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookingData = { name, description, chef, longdescription };

    try {
      if (_id) {
        await axios.patch(
          `http://localhost:3000/api/cooking/${_id}`,
          cookingData
        );
      } else {
        await axios.post("http://localhost:3000/api/cooking", cookingData);
      }

      navigate("/cooking");
    } catch (error) {
      console.error("Error submitting recipe:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          {_id ? "Edit Cooking" : "Add New Cooking"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Recipe Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter recipe name"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Recipe Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full p-3 rounded-md bg-gray-700 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              long Description
            </label>
            <textarea
              value={longdescription}
              onChange={(e) => setLongDescription(e.target.value)}
              placeholder="Enter  long description"
              className="w-full p-3 rounded-md bg-gray-700 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Chef Name
            </label>
            <input
              type="text"
              value={chef}
              onChange={(e) => setChef(e.target.value)}
              placeholder="Enter chef's name"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition duration-300"
          >
            {_id ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CookingForm;
