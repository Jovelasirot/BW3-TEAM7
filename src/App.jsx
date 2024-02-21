import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import Messaggistica from "./components/Messaggistica";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <NavbarComponent />
        <Routes>
          <Route path="/profile/:username" element={<CombineProfilePage />} />
        </Routes>
        <Messaggistica />
      </div>
    </BrowserRouter>
  );
}

export default App;
