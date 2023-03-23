import { Link, Outlet } from "react-router-dom";
import React from "react";
export const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-around">
          <li>
            <Link to="/">
              <img
                className="w-10"
                src="https://cdn.mobygames.com/covers/7101777-wheres-waldo-the-fantastic-journey-macintosh-front-cover.png"
                alt="homepage-logo"
              />
            </Link>
          </li>
          <li className="flex justify-center items-center gap-4">
            <button className="rounded-md">
              <Link to="/Game">Game</Link>
            </button>
            <button className="rounded-md">
              <Link to="/Dashboard">Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
