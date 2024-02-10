import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import { AuthUser } from "./ProtectedRouteAuth";
import logo from "../assets/tech.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const { User } = AuthUser();
  const [toggle, settoggle] = useState(false);
  const toggleMenu = () => {
    settoggle((prev) => !prev);
  };

  return (
    <>
      <div className="mainNav">
        {/* LOGO */}
        <img src={logo} alt="logo" className="img-logo" />
        {/* Mobile View */}
        <div className="desktop-view">
          <div className="navLink">
            <NavLink to="/" className="navList">
              Home
            </NavLink>{" "}
            &nbsp;
            <NavLink to="about" className="navList">
              About
            </NavLink>{" "}
            &nbsp;
            <NavLink to="contact" className="navList">
              Contact
            </NavLink>{" "}
            &nbsp;
            <NavLink to="profile" className="navList">
              Profile
            </NavLink>{" "}
            &nbsp;
            {!User && (
              <NavLink to="login" className="navList">
                Login
              </NavLink>
            )}
            &nbsp;
            <NavLink to="userFetcherProduct" className="navList">
              UserFetcherProduct
            </NavLink>{" "}
            &nbsp;
          </div>
        </div>

        {/* Mobile view */}
        {toggle ? (
          <div className="mobile-view">
            {" "}
            <div className="navLink">
              <NavLink to="/" className="navList">
                Home
              </NavLink>{" "}
              &nbsp;
              <NavLink to="about" className="navList">
                About
              </NavLink>{" "}
              &nbsp;
              <NavLink to="contact" className="navList">
                Contact
              </NavLink>{" "}
              &nbsp;
              <NavLink to="profile" className="navList">
                Profile
              </NavLink>{" "}
              &nbsp;
              {!User && (
                <NavLink to="login" className="navList">
                  Login
                </NavLink>
              )}
              &nbsp;
              <NavLink to="userFetcherProduct" className="navList">
                UserFetcherProduct
              </NavLink>{" "}
              &nbsp;
              <AiOutlineClose onClick={toggleMenu} className="closeIcon" />
            </div>
          </div>
        ) : (
          <AiOutlineMenu onClick={toggleMenu} className="openIcon" />
        )}
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;

//  {
//    !User && (
//      <NavLink to="login" className="navList">
//        Login
//      </NavLink>
//    );
//  }
