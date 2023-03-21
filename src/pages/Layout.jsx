import { Link, Outlet } from "react-router-dom";
import React from "react";
export const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link to="/">HomeLogo</Link>
          </li>
          <li className="flex justify-center items-center gap-4">
            <Link to="/Game">Game</Link>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
};
