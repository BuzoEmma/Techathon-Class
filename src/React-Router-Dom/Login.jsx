import React, { useState } from "react";
import { AuthUser } from "./ProtectedRouteAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    name: "",
    email: "",
    age: "",
  });

  const { login } = AuthUser();
  const navigate = useNavigate();
  const location = useLocation();
  const pathDirect = location.state?.path || "/";

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleGoogleLogin = (credentialResponse) => {
    const credentialIdentity = jwtDecode(credentialResponse.credential);
    login(credentialIdentity);
    navigate(pathDirect, { replace: true });
    console.log(credentialResponse);
  };

  const handleGoogleError = () => {
    console.log("Google login failed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userLogin);
    navigate(pathDirect, { replace: true });
  };

  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">User Name</label> <br />
        <input
          type="text"
          placeholder="Type your name"
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
          placeholder="Type your email"
          value={userLogin.email}
          name="email"
          onChange={handleChanges}
        />{" "}
        <br />
        <br />
        <label htmlFor="age">Age</label> <br />
        <input
          type="number"
          placeholder="Type your age"
          value={userLogin.age}
          name="age"
          onChange={handleChanges}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Google OAuth2  */}
      <GoogleLogin onSuccess={handleGoogleLogin} onError={handleGoogleError} />
    </div>
  );
};

export default Login;
