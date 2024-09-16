import { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, label }) => (
  <li>
    <Link to={to} className="flex items-center p-2 bg-yellow-500 hover:bg-yellow-700 rounded transition-colors duration-200">
      <span className="ml-2">{label}</span>
    </Link>
  </li>
);

export default SidebarItem;
