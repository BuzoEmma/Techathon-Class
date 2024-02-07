import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserFetcherProduct = () => {
  return (
    <div>
      <h1>Hello Fetch data</h1>
      <Link to={"/userFetcherProduct"}>userFetcher</Link> &nbsp;
      <Link to={"userFetcherDetails"}>userFetcherDetails</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserFetcherProduct;


