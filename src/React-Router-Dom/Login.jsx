import React, { useState } from "react";
import { AuthUser } from "./ProtectedRouteAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setuserLogin] = useState({
    name: "",
    email: "",
    age: "",
  });

  console.log(userLogin);

  const { login } = AuthUser();

  const navigate = useNavigate();
  const location = useLocation();

  const pathDirect = location.state?.path || "/";

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setuserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userLogin);
    navigate(pathDirect, { replace: true });
  };

  return (
    <div>
      {" "}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">User Name</label> <br />
        <input
          type="text"
          placeholder="type your name"
          value={userLogin.name}
          name="name"
          onChange={handleChanges}
        />
        <br />
        <br />
        <label htmlFor="age">Email</label>
        <br />
        <input
          type="email"
          placeholder="type your email"
          value={userLogin.email}
          name="email"
          onChange={handleChanges}
        />{" "}
        <br />
        <br />
        <label htmlFor="age">Age</label> <br />
        <input
          type="number"
          placeholder="type your age"
          value={userLogin.age}
          name="age"
          onChange={handleChanges}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
