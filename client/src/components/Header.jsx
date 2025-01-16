import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-300 p-4 shadow">
      <div className="max-w-7xl  mx-auto flex justify-between">
        <div className="flex justify-items-end gap-3 items-center">
          <Link to="/" className="text-white text-2xl font-extrabold">
            <h1 className="text-2xl font-bold text-slate-600">MernShopp</h1>
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 hidden sm:block"
          />
          <button className="bg-slate-500 text-white py-2 px-4 rounded-md hidden sm:block ml-2">
            Search
          </button>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <Link to="/cart" className="text-slate-600 flex items-center">
            <FiShoppingCart className="mr-2" />
            Cart
          </Link>
          <div className="relative group">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="text-slate-600 flex items-center">
              <FiUser className="mr-2" />
              Profile
            </button>
            <ul
              className={`absolute ${
                isProfileMenuOpen ? "block" : "hidden"
              } top-8 right-0 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 p-2`} >
              <li>
                <Link to="/profile">
                 <FiUser className="mr-1" />
                 Profile
                </Link>
              </li>
              <li>
                <Link to="/logout">
                  <FiLogOut className="mr-1" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <button className="text-slate-600">Sign In</button>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 tex-xl focus:outline-none"
          >
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>
      </div>
      { isMobileMenuOpen && (
          <div className="mt-4 sm:hidden">
            <input 
              type="text" 
              placeholder="Search..."
              className="p-2 rounded-md bg-gray-700 text-white w-full mb-2"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mb-2">
                Search
              </button>
              <div className="space-y-2">
                <Link to="/cart" className="text-slate-600 flex items-center">
                 <FiShoppingCart className="mr-1" />
                 Cart
                </Link>
                <div className="relative group">
                  <button
                   onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                   className="text-slate-600 flex items-center"
                   >
                    <FiUser className="mr-1" />
                    Profile
                  </button>
                  <ul
                   className={`absolute ${isProfileMenuOpen ? "block" : "hidden"} bg-gray-200 border border-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 p-2`}
                  >
                  <li>
                    <Link to="/profile">
                     <FiUser className="mr-1" />
                     Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <FiLogOut className="mr-1" />
                      Logout
                    </Link>
                  </li>
                  </ul>
                </div>
                <button className="text-slate-600">Sign In</button>
              </div>
          </div>
        )
      }
    </nav>
  );
}
