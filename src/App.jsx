import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import HomeMid from "./components/HomeMid";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeMid />} />
          <Route path="/profile/:username" element={<CombineProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
