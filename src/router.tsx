import { createBrowserRouter } from "react-router-dom";
import { paths } from "./config/path";
import NotFound from "./components/Notfound";
import MainLayouts from "./components/layouts/MainLayouts";


export const createAppRouter = createBrowserRouter([
  {
    path: paths.home.path,
    element: <MainLayouts />,
  },
 
  {
    path: "*",
    element: <NotFound />,
  },
]);
