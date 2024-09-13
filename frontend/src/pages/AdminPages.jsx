import { Outlet } from 'react-router-dom';
import Sidebar from "../components/adminDashboard/Sidebar";
import Header from "../components/adminDashboard/Header";

function AdminPages() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="mt-2 p-4">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
}

export default AdminPages;