import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Details } from "../pages/Details";
import { SearchPage } from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details", element: <Details /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
