import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import AddEvent from "./Components/AddEvent/AddEvent.jsx";
import AllRegistered from "./Components/RegisteredEvents/AllRegistered.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addEvent/:id",
        element: <AddEvent></AddEvent>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allEvents/${params.id}`),
      },
      {
        path: "/allRegistered",
        element: (
          <PrivateRoute>
            <AllRegistered></AllRegistered>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
