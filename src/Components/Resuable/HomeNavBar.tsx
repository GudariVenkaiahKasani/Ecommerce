import React from "react";
import { Link, Router } from "react-router-dom";

function HomeNavBar() {
  return (
    <div>
      <div className="flex bg-green-400 justify-between h-10">
        <div className="pl-10 flex items-center">LEAF LOVE</div>
        <div className="flex justify-end gap-10 items-center pr-10">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <Link to="/login" className="text-white text-lg">
            LogIn
          </Link>
          <Link to="/signup" className="text-white text-lg">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeNavBar;
