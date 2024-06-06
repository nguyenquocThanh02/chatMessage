import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import SignIn from "./page/SignIn";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
