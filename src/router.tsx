import { createBrowserRouter } from "react-router-dom";
import { paths } from "./config/path";
import NotFound from "./components/Notfound";
import MainLayouts from "./components/layouts/MainLayouts";
import ProductListing from "./pages/ProductListing";
import Home from "./components/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import SignUp from "./components/signup/SignUp";

export const createAppRouter = createBrowserRouter([
  {
    element: (
      <>
        <MainLayouts />
      </>
    ),
    children: [
      {
        path: paths.home.path,
        element: <Home />,
      },
      {
        path: paths.login.path,
        element: <Login />,
      },
      {
        path: paths.forgotpassword.path,
        element: <ForgotPassword />,
      },
      {
        path: paths.signup.path,
        element: <SignUp />,
      },
      {
        path: paths.product.path,
        element: <ProductListing />,
      },
      {
        path: paths.product.details.path,
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  }
]);
