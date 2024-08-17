import "./index.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import NavBar from "./components/NavBar";
import QuickAccessBar from "./components/QuickAccessBar";
import BodyLayout from "./components/BodyLayout";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";

function App() {
  return (
    <BrowserRouter>
      <QuickAccessBar />
      <NavBar />
      <BodyLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth/Login" element={<Login />} />
          <Route path="/Auth/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </BodyLayout>
    </BrowserRouter>
  );
}

export default App;
