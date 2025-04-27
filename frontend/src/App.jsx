import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CookingList from "./pages/Cooking/CookingList";
import CookingDetails from "./pages/Cooking/CookingDetails";
import CookingForm from "./pages/Cooking/CookingForm";
import MusicList from "./pages/Music/MusicList";
import MusicDetails from "./pages/Music/MusicDetails";
import MusicForm from "./pages/Music/MusicForm";

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Cooking recipes routes */}
      <Route path="/cooking" element={<CookingList />} />
      <Route path="/cooking/:_id" element={<CookingDetails />} />
      <Route path="/cooking/new" element={<CookingForm />} />
      <Route path="/cooking/edit/:_id" element={<CookingForm />} />

      {/* Music routes */}
      <Route path="/music" element={<MusicList />} />
      <Route path="/music/:_id" element={<MusicDetails />} />
      <Route path="/music/new" element={<MusicForm />} />
      <Route path="/music/edit/:_id" element={<MusicForm />} />
    </Routes>
    // </BrowserRouter>
  );
};
export default App;
