import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  }, {
    path: "/properties/:id",
    element: <DetailPage/>
  }
])

const App = () => <RouterProvider router={router} />

export default App;
