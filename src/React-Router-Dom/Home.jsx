import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const Home = () => {
  const [User, setUser] = useState({});

  return (
    <>
      {Object.keys(User).length === 0 ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const credentialIdentity = jwtDecode(credentialResponse.credential);
            setUser(credentialIdentity);
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <div>
          <h2>{User.name}</h2>
          <h5>{User.email}</h5>
          <img src={User.picture} alt="" />
        </div>
      )}
    </>
  );
};

export default Home;
