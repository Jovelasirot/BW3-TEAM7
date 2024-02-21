import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import HomeMid from "./components/HomeMid";
import NotFound from "./components/NotFound";
import Messaggistica from "./components/Messaggistica";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeMid />} />
          <Route path="/profile/:username" element={<CombineProfilePage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Messaggistica />
      </div>
    </BrowserRouter>
  );
}

export default App;
