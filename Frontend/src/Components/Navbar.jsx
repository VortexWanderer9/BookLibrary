import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute w-full shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        mBook
      </div>

      {/* Menu */}
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600 transition">
          Books
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Favorite
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Next Book
        </li>
      </ul>

      {/* Optional Right Side (future use) */}
      <div></div>
    </nav>
  );
}
