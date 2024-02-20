import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <NavbarComponent />
        <EditProfile />
        <Routes>
          <Route path="/profile/:username" element={<CombineProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
