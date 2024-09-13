import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginFormPage from "./pages/LoginForm";
import AdminPages from "./pages/AdminPages";
import {action as loginAction} from "./pages/LoginForm";
import {loader as authLoader} from "./util/auth";
import ViewItems from './components/adminDashboard/ViewItems';
import AddItems from './components/adminDashboard/AddItems';
import ViewEmployees from './components/adminDashboard/ViewEmployees';
import AddEmployee from './components/adminDashboard/AddEmployee';
import ViewTodaysOrders from './components/adminDashboard/ViewTodaysOrders';
import ViewOrdersHistory from './components/adminDashboard/ViewOrdersHistory';



const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginFormPage />,
    action: loginAction,
    
  },
  {
    path: "/admin",
    element: <AdminPages />,
    loader: authLoader,
    children: [
      {
        path: "view-items",
        element: <ViewItems />,
      },
      {
        path: "add-items",
        element: <AddItems />,
      },
      {
        path: "view-employees",
        element: <ViewEmployees />,
      },
      {
        path: "add-employee",
        element: <AddEmployee />,
      },
      {
        path: "view-todays-orders",
        element: <ViewTodaysOrders />,
      },
      {
        path: "view-orders-history",
        element: <ViewOrdersHistory />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;