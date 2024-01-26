import React from "react";
import Banner from "./Banner/Banner";
import CardGroup from "./cardGroup/CardGroup";
import AddPage from "./AddPage/AddPage";
import Testimonials from "./Testimonials/Testimonials";
import BannerTwo from "./BannerTwo/BannerTwo";
import ScrollUpButton from "../../Component/ScrollUpButton/ScrollUpButton";

const Home = () => {
  return (
    <div className="">
      <div style={{ backgroundColor: "#F7F5F9" }}>
        <Banner />
      </div>
      <div className="mt-5">
        <CardGroup />
      </div>
      <div className=" mt-5 py-5" style={{ backgroundColor: "#F7FDFF" }}>
        <AddPage></AddPage>
      </div>
      <div className="py-5">
        <Testimonials/>
      </div>
      <div className=" my-5 pt-5" style={{ backgroundColor: "#F7FDFF" }}>
        <BannerTwo></BannerTwo>
      </div>
      <div className="position-fixed bottom-0 end-0 my-4 mx-4">
        <ScrollUpButton></ScrollUpButton>
      </div>
    </div>
  );
};

export default Home;
