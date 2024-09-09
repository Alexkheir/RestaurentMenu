import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginFormPage from "./pages/LoginForm";
import AdminPages from "./pages/AdminPages";
import {action as loginAction} from "./pages/LoginForm";
import {loader as authLoader} from "./util/auth";

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
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;