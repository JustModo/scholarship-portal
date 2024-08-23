import "./index.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import NavBar from "./components/NavBar";
import QuickAccessBar from "./components/QuickAccessBar";
import BodyLayout from "./components/BodyLayout";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Verification from "./pages/Dashboard/Verification/Verification";
import Allotment from "./pages/Dashboard/Allotment/Allotment";
import Payment from "./pages/Dashboard/Payment/Payment";

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
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="Verification" />} />
            <Route path="Verification" element={<Verification />} />
            <Route path="Allotment" element={<Allotment />} />
            <Route path="Payment" element={<Payment />} />
          </Route>
        </Routes>
      </BodyLayout>
    </BrowserRouter>
  );
}

export default App;
