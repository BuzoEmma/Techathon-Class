import React from "react";
import { AuthUser } from "./ProtectedRouteAuth";

const Profile = () => {
  const { User, logout } = AuthUser();

  return (
    <main>
      <div>
        Name: {User.name} <br />
        Email: {User?.email} <br />
        Age: {User?.age} <br />
      </div>
      <button onClick={() => logout()}>Logout</button>
    </main>
  );
};

export default Profile;
