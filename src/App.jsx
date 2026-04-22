import { ToastContainer } from "react-toastify";
import "./App.css";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/route_protection/ProtectedRoute";
import Dashboard from "./page/Dashboard";
import useAuth from "./hooks/useAuth";
import AuthProtectRoute from "./components/route_protection/AuthProtectRoute";
import { useEffect } from "react";

function App() {
  const fetchUserProfile = useAuth();

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthProtectRoute>
                <Login />
              </AuthProtectRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthProtectRoute>
                <SignUp />
              </AuthProtectRoute>
            }
          />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
