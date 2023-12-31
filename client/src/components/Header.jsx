import React, { useEffect, useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

  const {currentUser} = useSelector((state)=> state.user);
   const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();
   const handleSubmit = (e) => {
     e.preventDefault();
     const urlParams = new URLSearchParams(window.location.search);
     urlParams.set("searchTerm", searchTerm);
     const searchQuery = urlParams.toString();
     navigate(`/search?${searchQuery}`);
   };

   useEffect(() => {
     const urlParams = new URLSearchParams(location.search);
     const searchTermFromUrl = urlParams.get("searchTerm");
     if (searchTermFromUrl) {
       setSearchTerm(searchTermFromUrl);
     }
   }, [location.search]);


  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
            <span className="text-slate-500">First</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-xl flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            name=""
            id=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-600 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-600 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover "
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className=" text-slate-600 hover:underline cursor-pointer">
                SignIn
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
