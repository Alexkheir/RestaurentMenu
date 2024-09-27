import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from "../pages/LoginForm";
import AdminPages from "../pages/AdminPages";
import { action as loginAction } from "../pages/LoginForm";
import { loader as authLoader } from "../util/auth";
import ViewItems from '../components/adminDashboard/Items/ViewItems';
import AddItems from '../components/adminDashboard/Items/AddItems';
import ViewEmployees from '../components/adminDashboard/Employees/ViewEmployees';
import AddEmployee from '../components/adminDashboard/Employees/AddEmployee';
import ViewTodaysOrders from '../components/adminDashboard/orders/ViewTodaysOrders';
import ViewOrdersHistory from '../components/adminDashboard/orders/ViewOrdersHistory';
import Menu from '../pages/Menu';
import EditItem from '../components/adminDashboard/Items/EditItem';
import EditEmployee from '../components/adminDashboard/Employees/EditEmployee';
import ErrorPage from '../pages/Error'; 

const router = createBrowserRouter([
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />, 
  },
  {
    path: "/auth",
    element: <LoginFormPage />,
    action: loginAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPages />,
    loader: authLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "view-items",
        element: <ViewItems />,
        errorElement: <ErrorPage />,
      },
      {
        path: "add-items",
        element: <AddItems />,
        errorElement: <ErrorPage />,
      },
      {
        path: "view-employees",
        element: <ViewEmployees />,
        errorElement: <ErrorPage />,
      },
      {
        path: "add-employee",
        element: <AddEmployee />,
        errorElement: <ErrorPage />,
      },
      {
        path: "view-todays-orders",
        element: <ViewTodaysOrders />,
        errorElement: <ErrorPage />,
      },
      {
        path: "view-orders-history",
        element: <ViewOrdersHistory />,
        errorElement: <ErrorPage />,
      },
      {
        path: "edit-item/:id",
        element: <EditItem />,
        errorElement: <ErrorPage />,
      },
      {
        path: "edit-employee/:id",
        element: <EditEmployee />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;