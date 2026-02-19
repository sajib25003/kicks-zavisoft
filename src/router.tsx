import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import About from "./routes/About";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
