import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MusicForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [longdescription, setLongDescription] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:3000/api/music/${_id}`)
        .then((response) => {
          const { name, description, genre } = response.data;
          setName(name);
          setDescription(description);
          setGenre(genre);
          // setLongDescription(longdescription);
        })
        .catch((error) => console.log(error));
    }
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const musicData = { name, description, genre };

    try {
      if (_id) {
        await axios.patch(`http://localhost:3000/api/music/${_id}`, musicData);
      } else {
        await axios.post("http://localhost:3000/api/music", musicData);
      }

      navigate("/music");
    } catch (error) {
      console.error("Error submitting band:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          {_id ? "Edit band" : "Add New band"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              band Name
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
              band Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full p-3 rounded-md bg-gray-700 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* <div> */}
          {/* <label className="block mb-2 text-sm font-medium text-gray-300">
              long Description
            </label>
            <textarea
              value={longdescription}
              onChange={(e) => setLongDescription(e.target.value)}
              placeholder="Enter  long description"
              className="w-full p-3 rounded-md bg-gray-700 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div> */}

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Genre Name
            </label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
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

export default MusicForm;
