import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import HomeNavBar from "../Resuable/HomeNavBar.tsx";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passBool, setPassBool] = useState(true);
  const [checked, setChecked] = useState(false);
  const [dispalyData, setDisplayData] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassError(!passRegex.test(password));
    setEmailError(!emailRegex.test(email));
    setDisplayData(true);
    //clearData();
  };
  const clearData = () => {
    setEmail("");
    setName("");
    setPassword("");
    setChecked(false);
    setDisplayData(false);
  };
  return (
    <>
      <HomeNavBar />

      <div className="w-full h-[100vh] flex items-center justify-center flex-col bg-cyan-100">
        <div className="bg-green-300 w-1/4 px-8 py-10 shadow-2xl rounded-lg">
          <div className="text-bold text-2xl flex justify-center mb-2">
            Sign Up
          </div>
          <div className="flex justify-center mb-2">Create Your Account</div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <div>
                Name <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
                className="rounded-lg mb-1 h-8 pl-2 border-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                Email <span className="text-red-500">*</span>
              </div>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg h-8 pl-2"
              />
              {emailError && (
                <div className="text-[10px] text-red-400">Invalid Email</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div>
                Password <span className="text-red-500">*</span>
              </div>
              <div className="relative">
                <input
                  type={passBool ? "password" : "text"}
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-lg  h-8 pl-2 pr-28"
                />
                <span
                  onClick={() => setPassBool(!passBool)}
                  className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {passBool ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
              {passError && (
                <div className="text-[10px] text-red-400">Invalid Password</div>
              )}
            </div>
            <div className="mt-1 ">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
                className="mr-1"
              />
              <span>I agree the terms and conditions</span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-red-500 p-2 w-full rounded-lg hover:bg-red-400 mt-4"
              >
                Register
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={clearData}
                className="p-2 bg-blue-500 mt-2 rounded-lg w-full hover:bg-blue-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        {dispalyData && (
          <div className="">
            <div className="underline flex justify-center">Your Data Is</div>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Password:{password}</div>
            <div>Checked:{checked ? "yes" : "No"}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default SignUp;
