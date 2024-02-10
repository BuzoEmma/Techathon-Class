import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import { AuthUser } from "./ProtectedRouteAuth";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Nav = () => {

  const { User } = AuthUser()
  
  

  const toggleMenu = () => {
    
  }

  return (
    <>
      <div className="mainNav">
        <h1>LOGO</h1>

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

        <div className="mobile-view">
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
            <AiOutlineClose className="closeIcon" />
          </div>

          <AiOutlineMenu onClick={toggleMenu} className="openIcon" />
        </div>
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