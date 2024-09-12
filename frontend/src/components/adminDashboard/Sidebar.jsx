import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar sticky top-0 bg-gray-900 text-white h-screen p-4 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center mb-6">
        <button onClick={toggleSidebar} className="bg-red-500 rounded-full w-8 h-8 mr-2 focus:outline-none">
          <span className="text-white text-xl">{isOpen ? 'X' : '☰'}</span>
        </button>
        {isOpen && <span className="text-xl font-bold">MyRestaurant</span>}
      </div>
      {isOpen && (
        <ul className="space-y-4 pt-1">
          <li>
            <Link to="/admin/view-items" className="flex items-center p-2 bg-red-500 hover:bg-red-700 rounded transition-colors duration-200">
              <span className="ml-2">View Items</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/add-items" className="flex items-center p-2 bg-red-500 hover:bg-red-700 rounded transition-colors duration-200">
              <span className="ml-2">Add Items</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/view-employees" className="flex items-center p-2 bg-red-500 hover:bg-red-700 rounded transition-colors duration-200">
              <span className="ml-2">View Employees</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/add-employee" className="flex items-center p-2 bg-red-500 hover:bg-red-700 rounded transition-colors duration-200">
              <span className="ml-2">Add Employee</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;