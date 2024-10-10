import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
        <nav className="ml-10 space-x-4">
          <a href="/" className="text-gray-700 hover:text-purple-500">
            Home
          </a>
          <a href="/shop" className="text-gray-700 hover:text-purple-500">
            Shop
          </a>
          <a href="/about" className="text-gray-700 hover:text-purple-500">
            About Us
          </a>
          <a href="/contact" className="text-gray-700 hover:text-purple-500">
            Contact Us
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2"
        />
        <button className="bg-purple-500 text-white p-2 rounded">Search</button>
      </div>
    </header>
  );
};

export default Header;
