import "./App.css";
import Fetch from "./components/Fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/:id" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
