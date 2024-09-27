import { Outlet , Navigate} from 'react-router-dom';
import Sidebar from "../components/adminDashboard/sidebar/Sidebar";
import Header from "../components/adminDashboard/header/Header";

function AdminPages() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="mt-2 p-4">
                    <Outlet /> 
                    <Navigate to="/admin/view-todays-orders" />
                </div>
            </div>
        </div>
    );
}

export default AdminPages;