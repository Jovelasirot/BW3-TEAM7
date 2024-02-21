import "./App.css";
import Messaggistica from "./components/Messaggistica";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import HomeMid from "./components/HomeMid";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeMid />} />
          <Route path="/profile/:username" element={<CombineProfilePage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Messaggistica />
      </div>
    </BrowserRouter>
  );
}

export default App;
