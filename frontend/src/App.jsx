import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './store/CartContext';
import { UserProgressProvider } from './store/UserProgressContext';
import router from './routes/Routes'; 

function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;