import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserFetcher = () => {
  const fetcher = useLoaderData();



  return (
    <div style={{ margin: "2rem", color: "red" }}>
      UserFetcher
      {fetcher.map((fetch) => (
        <ul>
          <Link to={fetch.id.toString()} key={fetch.id}  >
            <li>{fetch.title}</li> <br />
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default UserFetcher;

export const userInfor = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw Error("Sorry We are not able to fetch main data");
  }
  return res.json();
};
