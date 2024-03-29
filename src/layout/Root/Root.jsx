import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <Navbar></Navbar>
        <Outlet></Outlet>
       
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
