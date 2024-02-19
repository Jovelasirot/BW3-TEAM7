import "./App.css";
import Fetch from "./components/Fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<CombineProfilePage />} />
        <Route path="/:id" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import CombineProfilePage from "./components/CombineProfilePage";
// import MyFooter from "./components/MyFooter";
// function App() {
//   return (
//     <>
//       {/* <h1 className="bg-secondary">Team 7 too good</h1> */}
//       <CombineProfilePage />
//       <MyFooter />
//     </>)
