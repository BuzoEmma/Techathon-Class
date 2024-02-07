import React from "react";
import { useLoaderData } from "react-router-dom";

const UserFetcherDetails = () => {
  
  const fetcherDetails = useLoaderData();

  return (
    <div>
      UserDetails
      <div>
        <p style={{ color: "red" }}>{fetcherDetails.title}</p>
        {fetcherDetails.body}
      </div>
    </div>
  );
};
export default UserFetcherDetails;

export const userInforDetails = async ({ params }) => {
  const { id } = params;

  let res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  if (!res.ok) {
    throw Error("Sorry We are not able to fetch Detail data");
  }
  return res.json();
};

