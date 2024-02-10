import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import { AuthUser } from "./ProtectedRouteAuth";

const Nav = () => {

  const {User} = AuthUser()

  return (
    <>
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
        {!User && <NavLink to="login" className="navList">
          Login
        </NavLink>}
     
        &nbsp;
        <NavLink to="userFetcherProduct" className="navList">
          UserFetcherProduct
        </NavLink>{" "}
        &nbsp;
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