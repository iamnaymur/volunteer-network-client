import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    </>
  );
}

export default App;
