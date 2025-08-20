import "./App.css";
import LandingScreen from "./Components/landingScreen";
import Profile from "./Components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import SignUpScreen from "./Components/SignUpScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/SignUpScreen" element={<SignUpScreen />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
      </Routes>
      ;
    </>
  );
}

export default App;
