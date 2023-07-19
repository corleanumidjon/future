import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Chess from "./Pages/Chess/Chess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/chess" element={<Chess />} />
      </Routes>
    </>
  );
}

export default App;
