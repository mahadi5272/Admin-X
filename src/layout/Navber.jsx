import React from "react";
import UseAuth from "../hooks/UseAuth";
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from "react-router";

// মেনুগুলোকে বাইরে নিয়ে আসা ক্লিন কোডের লক্ষণ
const beforLogin = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/signUp">Registration</Link>
    </li>
  </>
);

const Admin = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/allUsers">Pople</Link>
    </li>
    <li>
      <Link to="/allTask">Tasks</Link>
    </li>
    <li>
      <Link to="/manageTasks">Manage Task</Link>
    </li>
  </>
);

const User = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/allTask">Tasks</Link>
    </li>
    <li>
      <Link to="/allUsers">Pople</Link>
    </li>
    {/* <li>
      <Link to="/myTasks">My Tasks</Link>
    </li> */}
    {/* <li>
      <Link to="/home">Submit Progress</Link>
    </li> */}
  </>
);

const Navber = () => {
  const { user, role, logout } = UseAuth();
  const handlelogOut = () => {
    logout();
  };
  console.log(user)

  return (
    <div className="flex justify-between items-center w-full md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-3 bg-white shadow-sm">
      {/* Logo */}

      <div className="flex gap-3 flex-row-reverse">
        <div className="text-xl font-bold">logo</div>
        <div className="sm:hidden">
          <RxDropdownMenu className="text-3xl cursor-pointer" />
        </div>
      </div>
      {/* Desktop Menu: মোবাইলে হাইড থাকবে */}
      <div className="hidden sm:flex">
        <ul className="flex gap-5 font-medium">
          {user && role === "Mentor"
            ? Admin
            : user && role === "Member"
              ? User
              : beforLogin}
        </ul>
      </div>

      {/* Auth Button */}
      <div className="flex items-center gap-3">
        {user ? (
          <button
            className="btn bg-red-500 text-white px-4 py-2 rounded"
            onClick={handlelogOut}
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}

        {/* মোবাইল আইকন (ঐচ্ছিক): মোবাইলে মেনু দেখানোর জন্য */}
        <div></div>
      </div>
    </div>
  );
};

export default Navber;
