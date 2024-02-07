import React from "react";
import { AuthUser } from "./ProtectedRouteAuth";

const Profile = () => {
  const { User, logout } = AuthUser();


  return (
    <main>
      <div>
        You welcome Mr {User.name} <br />
        You welcome Mr {User?.email} <br />
        You welcome Mr {User?.age} <br />
      </div>
      <button onClick={()=>logout()}>Logout</button>
    </main>
  );
};

export default Profile;
