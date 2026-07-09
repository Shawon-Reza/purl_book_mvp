import { createBrowserRouter } from "react-router";
import Test from "../features/Test";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
]);