import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root.jsx";
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/Sign Up.jsx';
import LogIn from './pages/Log In.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
import CheckOut from './pages/CheckOut.jsx';
import MyAccount from './pages/My Account.jsx';
import About from './pages/About.jsx';
import Cantact from './pages/Cantact.jsx';
import NotFound from './pages/404 Not Found.jsx';
import ProductDetails from './pages/Product Details.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/Sign-Up",
    element: <SignUp />,
  },
  {
    path: "/Log-In",
    element: <LogIn />,
  },
  {
    path: "/Wishlist",
    element: <Wishlist />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/CheckOut",
    element: <CheckOut />,
  },
  {
    path: "/My-Account",
    element: <MyAccount />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Cantact />,
  },
  // 404 Not Found
  {
    path: "/404 Not Found",
    element: <NotFound />,
  },
  {
    path: "/products/:productKay",
    element: <ProductDetails />,
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
