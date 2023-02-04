import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authslice";

import "./Header.css";
const style = {
  color: "white",
  fontSize: 25,
};
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <div className="main_Header">
        <div className="logo">GITASAAR</div>
        <div className="components">
          <div className="home_nav nav_items">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <AiOutlineHome style={style} />
              <li className="home_title nav_title">Home</li>
            </Link>
          </div>
          <div className="Login_Nav nav_items">
            {user || token ? (
              <button
                style={{
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={onLogout}
              >
                <RiLogoutCircleLine style={style} />
                <li className="login_title nav_title">Logout</li>
              </button>
            ) : (
              <Link to={"/user/login"} style={{ textDecoration: "none" }}>
                <AiOutlineLogin style={style} />
                <li className="login_title nav_title">Login</li>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
