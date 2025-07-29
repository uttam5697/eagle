import { createBrowserRouter } from "react-router-dom";
import { paths } from "./config/path";
import NotFound from "./components/Notfound";
import Home from "./components/home";


export const createAppRouter = createBrowserRouter([
  {
    path: paths.home.path,
    element: <Home />,
  },
 
  {
    path: "*",
    element: <NotFound />,
  },
]);
