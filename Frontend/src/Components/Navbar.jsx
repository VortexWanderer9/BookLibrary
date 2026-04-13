import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" relative z-199 shadow-md flex items-center p-3 bg-mist-500">
      {/* Logo */}
      <NavLink 
       to ={'/'}
       className="text-2xl font-bold text-cyan-900 transition"
       >
       mBook
      </NavLink>
      <ul className="flex gap-8 text-white font-bold text-lg">
        <NavLink
         to={'/books'} 
          className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}
          >Books
        </NavLink>
        <NavLink  
        to = {"/favorite"}
         className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}
         > Favorite
        </NavLink>
        <NavLink
         to={'/about'} 
        className={({isActive}) => isActive ? 'text-blue-600' : 'text-white'}
        > About Project
         </NavLink>
      </ul>
    </nav>
  );
}
