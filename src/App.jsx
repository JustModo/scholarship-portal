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
import Verification from "./pages/Dashboard/Verification/Verification";
import Allotment from "./pages/Dashboard/Allotment/Allotment";
import Payment from "./pages/Dashboard/Payment/Payment";
import { useContext } from "react";
import { GlobalStateContext } from "./context/GlobalContext";
import NotFound from "./pages/NotFound/NotFound";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const { user, loading } = useContext(GlobalStateContext);
  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <BrowserRouter>
      <BodyLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Auth/Login"
            element={!user ? <Login /> : <Navigate to="/Dashboard" />}
          />
          <Route
            path="/Auth/Register"
            element={!user ? <Register /> : <Navigate to="/Dashboard" />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route
            path="/Dashboard"
            element={user ? <Dashboard /> : <Navigate to="/Auth/Login" />}
          >
            <Route index element={<Navigate to="Verification" />} />
            <Route path="Verification" element={<Verification />} />
            <Route path="Allotment" element={<Allotment />} />
            <Route path="Payment" element={<Payment />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BodyLayout>
    </BrowserRouter>
  );
}

export default App;
