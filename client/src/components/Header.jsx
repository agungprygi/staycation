import React, { act } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation()

  const active = path => {
    return location.pathname === path ? "text-primary" : ""
  }

  return (
    <header>
      <div className="container mx-auto font-poppins px-40">
        <div className="navbar bg-base-100 px-0">
          <div className="flex-1">
            <a className="text-2xl font-medium text-primary">Stay<span className="text-gray-900">cation.</span></a>
          </div>
          <div className="flex-none">
            <ul className="menu-horizontal px-1 font-medium flex flex-row py-2">
              <li className={`${active("/")} mx-2 my-2`}>
                <a href="/">Home</a>
              </li>
              <li className={`${active("/browse-by")} mx-2 my-2`}>
                <a href="/browse-by">
                Browse By</a>
              </li>
              <li className={`${active("/stories")} mx-2 my-2`}>
                <a href="/stories">
                Stories</a>
              </li>
              <li className={`${active("/agents")} ml-2 my-2`}>
                <a href="/agents">
                Agents</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
