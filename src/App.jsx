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

// import CombineProfilePage from "./components/CombineProfilePage";
// import MyFooter from "./components/MyFooter";
// function App() {
//   return (
//     <>
//       {/* <h1 className="bg-secondary">Team 7 too good</h1> */}
//       <CombineProfilePage />
//       <MyFooter />
//     </>)
