import { createBrowserRouter } from "react-router-dom";
import { paths } from "./config/path";
import NotFound from "./components/Notfound";
import MainLayouts from "./components/layouts/MainLayouts";
import ProductListing from "./pages/ProductListing";
import Home from "./components/Home";

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
        path: paths.product.path,
        element: <ProductListing />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  }
]);
