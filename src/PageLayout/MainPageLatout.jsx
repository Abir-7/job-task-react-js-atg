import React from "react";
import {Outlet} from 'react-router-dom'
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
const MainPageLatout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
      <Outlet />
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default MainPageLatout;
