import { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarItem from '../SideBarItem/SidebarItem';

const Items = [
  { to: '/admin/view-items', label: 'View Items' },
  { to: '/admin/add-items', label: 'Add Items' },
  { to: '/admin/view-employees', label: 'View Employees' },
  { to: '/admin/add-employee', label: 'Add Employee' },
  { to: '/admin/view-todays-orders', label: "Today's Orders" },
  { to: '/admin/view-orders-history', label: 'Orders History' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar sticky top-0 text-white h-screen p-4 ${isOpen ? 'w-64' : 'w-16'}`} style={{ background: 'linear-gradient(#29251c, #2c2306)' }}>
      <div className="flex items-center mb-6">
        <button onClick={toggleSidebar} className="bg-yellow-500 rounded-full w-8 h-8 mr-2 focus:outline-none">
          <span className="text-white text-xl">{isOpen ? 'X' : '☰'}</span>
        </button>
        {isOpen && <span className="text-xl font-bold">MyRestaurant</span>}
      </div>
      {isOpen && (
        <ul className="space-y-4 pt-1 mt-20">
          {Items.map((item, index) => (
            <SidebarItem key={index} to={item.to} label={item.label} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;