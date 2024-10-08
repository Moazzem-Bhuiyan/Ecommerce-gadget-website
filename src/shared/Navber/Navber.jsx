import React, { useContext } from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import usecarts from "../../Hooks/usecarts";
import Swal from "sweetalert2";

const Navber = () => {
  const [cart, refetch] = usecarts();
  const { user, logOut } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          navigate("/");
        });
      }
    });
  };

  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {user ? (
        <li>{/* <button  onClick={handleLogout}>Logout</button> */}</li>
      ) : (
        <li>
          <NavLink to="/auth/signup">SignUp</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full fixed top-0 left-0 z-[100] bg-white shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
              <IoMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/*  */}
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Exclusive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>

        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="input input-bordered w-24 bg-white h-8 mr-2  md:w-auto"
            />
          </div>
          <FaRegHeart />

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link to="/cartDetails">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user && user.photoURL ? (
                <img src={user?.photoURL} alt="user profile" />
              ) : (
                <FaUser className="mt-2 text-2xl ml-2"></FaUser>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-500 bg-opacity-30 text-white rounded-box z-[50] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/userProfile">
                <a className="justify-between">Profile</a>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {user && (
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
