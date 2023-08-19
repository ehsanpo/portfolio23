import React from "react";

type ValidPath = `/${string}`; // Type for valid paths starting with slash

interface MenuItem {
  [key: string]: ValidPath;
}

const menu: MenuItem = {
  Home: "/",
  About: "/about",
  Notes: "/notes",
  Portfolio: "/portfolio",
  Skills: "/skills",
};

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              viewBox="0 0 27.8 26.7"
            >
              <path
                fill="#FE3048"
                d="M.5 19.4c-.3-.4-.5-.7-.5-1.2 0-.4.2-.8.5-1.1L17.1.5c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1L2.7 19.4c-.3.3-.7.5-1.1.5-.4-.1-.8-.2-1.1-.5zm11.9 6.2c-.3.3-.8.6-1.3.8s-1 .3-1.5.3-1.1-.1-1.6-.3c-.5-.2-1.1-.5-1.5-1l-2.1-2.1c-.4-.4-.6-.8-.5-1.2.1-.4.4-.8.9-1.3L20.6 5c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1l-15 15L9 23.4c.2.2.4.2.6.2.2 0 .5-.1.7-.4L25.1 8.4c.3-.3.7-.4 1.1-.4.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1L12.4 25.6z"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {Object.keys(menu).map((key) => (
              <li key={key}>
                <a href={menu[key]} className="hover:bg-base-200">
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Ehsan Pourhadi</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Object.keys(menu).map((key) => (
            <li key={key}>
              <a href={menu[key]} className="hover:bg-base-200 text-base">
                {key}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn"><svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 60 60"><path d="m45.563 29.174-22-15A1 1 0 0 0 22 15v30a.999.999 0 0 0 1.563.826l22-15a1 1 0 0 0 0-1.652zM24 43.107V16.893L43.225 30 24 43.107z"/><path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"/></svg></a>
      </div>
    </div>
  );
};
export default Header;
