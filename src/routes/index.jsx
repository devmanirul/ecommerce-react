import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut";
import Home from "../pages/Home";
import Error from "../pages/404Error";
import About from "../pages/About";
import LogIn from "../pages/SignIn";
import ProductDetails from "../pages/ProductDetailsPage";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayOut />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
