import { Link, Outlet } from "react-router-dom";
import React from "react";
import { Footer } from "../components/Footer";
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
              <Link to="/Game"><h1 className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Game</h1></Link>
            </button>
            <button className="rounded-md">
              <Link to="/Dashboard"><h1 className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" >Dashboard</h1></Link>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer/>
    </>
  );
};
