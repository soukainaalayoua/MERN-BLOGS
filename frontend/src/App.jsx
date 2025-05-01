import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CookingList from "./pages/Cooking/CookingList";
import CookingDetails from "./pages/Cooking/CookingDetails";
import CookingForm from "./pages/Cooking/CookingForm";
import MusicList from "./pages/Music/MusicList";
import MusicDetails from "./pages/Music/MusicDetails";
import MusicForm from "./pages/Music/MusicForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./compenents/protectedRoutes";

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Cooking recipes routes */}
      <Route path="/cooking" element={<CookingList />} />
      <Route path="/cooking/:_id" element={<CookingDetails />} />
      <Route
        path="/cooking/new"
        element={
          <ProtectedRoute>
            <CookingForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cooking/edit/:_id"
        element={
          <ProtectedRoute>
            <CookingForm />
          </ProtectedRoute>
        }
      />

      {/* Music routes */}
      <Route path="/music" element={<MusicList />} />
      <Route path="/music/:_id" element={<MusicDetails />} />
      <Route
        path="/music/new"
        element={
          <ProtectedRoute>
            <MusicForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/music/edit/:_id"
        element={
          <ProtectedRoute>
            <MusicForm />
          </ProtectedRoute>
        }
      />

      {/* singup login  */}
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
    // </BrowserRouter>
  );
};
export default App;
