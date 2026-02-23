import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import ViewProduct from "./routes/ViewProduct";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/view-product/:id",
        element: <ViewProduct />,
      },
    ],
  },
]);
