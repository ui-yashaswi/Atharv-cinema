import React from "react";
import ContactFrom from "./pages/Home/ContactFrom";
import Navbar from "./components/Navbar";
import Testimonials from "./pages/Home/Testimonials";
import Footer from "./pages/Home/Footer";
import Banner from "./pages/Home/Banner";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import DataTable from "./pages/DataTable/DataTable";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin-danish",
      element: <DataTable />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
