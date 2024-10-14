import React, { act } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const active = (path) => {
    return location.pathname === path ? "text-primary" : "";
  };

  return (
    <header>
      <div className="container mx-auto font-poppins md:px-40 px-4">
        <div className="navbar bg-base-100 px-0">
          <div className="flex-1">
            <a className="text-2xl font-medium text-primary">
              Stay<span className="text-gray-900">cation.</span>
            </a>
          </div>
          <div className="md:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn m-1">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#3252DF"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className={`${active("/")} mx-2`}>
                <a href="/">Home</a>
              </li>
              <li className={`${active("/browse-by")} mx-2`}>
                <a href="/browse-by">Browse By</a>
              </li>
              <li className={`${active("/stories")} mx-2`}>
                <a href="/stories">Stories</a>
              </li>
              <li className={`${active("/agents")} ml-2`}>
                <a href="/agents">Agents</a>
              </li>
              </ul>
            </details>
          </div>
          <div className="md:flex-none hidden md:block">
            <ul className="menu-horizontal px-1 font-medium flex flex-row py-2">
              <li className={`${active("/")} mx-2 my-2`}>
                <a href="/">Home</a>
              </li>
              <li className={`${active("/browse-by")} mx-2 my-2`}>
                <a href="/browse-by">Browse By</a>
              </li>
              <li className={`${active("/stories")} mx-2 my-2`}>
                <a href="/stories">Stories</a>
              </li>
              <li className={`${active("/agents")} ml-2 my-2`}>
                <a href="/agents">Agents</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
