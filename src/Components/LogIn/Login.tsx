import React, { useState } from "react";
import HomeNavBar from "../Resuable/HomeNavBar.tsx";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <HomeNavBar />
      <div className="flex justify-center items-center flex-col h-[100vh] bg-cyan-400">
        <div className="bg-green-300 w-[23%] pl-8 pt-2 pb-10 shadow-lg rounded-lg ">
          <div className="flex justify-center font-bold text-lg "> Login</div>
          <form>
            <div>
              <div className="mb-1">
                Email <span className="text-red-500"> *</span>
              </div>
              <input
                type="email"
                value={email}
                placeholder="Enter Your Registered Email"
                className="w-3/4 pl-2 mb-1 rounded-lg h-7"
                autoFocus
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="mb-1">
                Password <span className="text-red-500"> *</span>
              </div>
              <input
                type="password"
                required
                value={pass}
                placeholder="Enter Password"
                className="w-3/4 pl-2 mb-4 rounded-lg h-7"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-1 bg-blue-500 text-white rounded-md w-3/4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
