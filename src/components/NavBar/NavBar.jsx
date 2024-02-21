import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = ({name}) => {
  return (
    <div id="navbar">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          viewBox="0 -960 960 960"
          width="36"
        >
          <path
            fill="aliceblue"
            d="M480-280q66 0 113-47t47-113H320q0 66 47 113t113 47ZM280-600h160q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600Zm240 0h160q0-33-23.5-56.5T600-680q-33 0-56.5 23.5T520-600ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440v-440h720v440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-80q116 0 198-82t82-198v-360H200v360q0 116 82 198t198 82Zm0-320Z"
          />
        </svg>
        <Link to="/">Binge</Link>
      </div>
      <div className="menu">
        <NavLink className="movies" to={"/movies"}>
          Movies
        </NavLink>
        <NavLink className="series" to={"/seriess"}>
          Series
        </NavLink>
        <NavLink className="movies-library" to={"/movies-library"}>
          Movies Library
        </NavLink>
        <NavLink className="series-library" to={"/series-library"}>
          Series Library
        </NavLink>
        <NavLink className="signup" to={"/signup"}>
          SignUp/LogIn
        </NavLink>
        <p className="login">
          Welcome, {name}
        </p>
        <NavLink className="search" to={"/search"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="aliceblue"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar