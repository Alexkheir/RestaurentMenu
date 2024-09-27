import { Link } from 'react-router-dom';
import { useLogout } from '../../../util/logout';

const Header = () => {
  const logout = useLogout();

  return (
    <div className="header text-white flex items-center justify-between p-4 sticky top-0 w-full z-10" style={{ background: 'linear-gradient(#29251c, #2c2306)' }}>
      <div className="flex items-center">
        <span className="text-xl font-bold">Admin</span>
      </div>
      <div className="relative">
        <div className="flex items-center space-x-4 cursor-pointer">
          <Link to="/menu" className="bg-yellow-500 text-black rounded-lg px-4 py-2 hover:bg-yellow-600 transition duration-300">Go To Menu</Link>
          <button onClick={logout} className="bg-yellow-500 text-black rounded-lg px-4 py-2 hover:bg-yellow-600 transition duration-300">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;