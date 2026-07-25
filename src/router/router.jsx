import { createBrowserRouter, Navigate } from "react-router";
import Book from "../book/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/cover" replace />,
  },
  {
    path: "/:pageId",
    element: <Book />,
  },
]);