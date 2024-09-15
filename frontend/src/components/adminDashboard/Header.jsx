import { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header text-white flex items-center justify-between p-4 sticky top-0 w-full z-10" style={{ background: 'linear-gradient(#29251c, #2c2306)' }}>
      <div className="flex items-center">
        <span className="text-xl font-bold">Admin</span>
      </div>
      <div className="relative">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleDropdown}>
          <div className="bg-gray-700 rounded-full w-8 h-8"></div>
          <span className="material-icons bg-yellow-500 text-black rounded-full p-1">\/</span>
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Manage Profile</a>
            <a href="/menu" className="block px-4 py-2 hover:bg-gray-200">Check Menu</a>
            <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;