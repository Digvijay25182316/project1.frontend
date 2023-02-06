import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./layout/Home/Home";
import Login from "./components/Login/Login";
import UserRegister from "./components/UserRegister/UserRegister";
import Users from "./components/Users/Users";
import Devotees from "./components/Devotees/Devotees";
import OneDevotee from "./components/SingleDevotee/Devotee";
import DevoteesRegister from "./components/registerationForm/Registeration";
import NotFound from "./layout/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { JoyModal, AnotherModal } from "./components/appsMenu/JoyModal";
import { AppsMenu } from "./components/appsMenu/appsMenu";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotAdmin from "./components/ProtectedRoute/NotAdmin";

export const API_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const { user, token } = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isOpen, id, itm, isVisible } = useSelector((state) => state.modal);

  useEffect(() => {
    setIsAuthenticated(() => {
      if (user || token) {
        return true;
      }
    });
  }, [user, token]);

  return (
    <>
      <div className="App">
        <Router>
          <JoyModal isOpen={isOpen} id={id} />
          <Header />
          <AnotherModal isVisible={isVisible} itm={itm} />
          <div className="Apps_Container">
            {isAuthenticated && <AppsMenu />}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route
              path="/users"
              element={
                <ProtectedRoute
                  isAdmin={user && user.role === "admin" ? true : false}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route path="/devotees" element={<Devotees />} />
            <Route path="/devotee/:id" element={<OneDevotee />} />
            <Route path="/devotees/register" element={<DevoteesRegister />} />
            <Route path="/you_are_not_admin" element={<NotAdmin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div className="Footer">
            <Footer isAuthenticated={isAuthenticated} />
          </div>
        </Router>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
