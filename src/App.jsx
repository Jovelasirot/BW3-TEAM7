import "./App.css";
import Messaggistica from "./components/Messaggistica";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Messagistica from "./components/Messaggistica";
import Job from "./components/Job";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <NavbarComponent />
        <Routes>
          <Route path="/profile/:username" element={<CombineProfilePage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Lavoro" element={<Job />} />
        </Routes>
        <Messagistica />
      </div>
    </BrowserRouter>
  );
}

export default App;
