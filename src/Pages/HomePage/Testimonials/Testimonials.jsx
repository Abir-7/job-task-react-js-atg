import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <div className="p-4 mx-0 mx-md-5 " style={{ backgroundColor: "#F7F5F9" }}>
      <div className="d-flex gap-2 align-items-center justify-content-start mb-3">
        <div>
          <span className={`fs-3`}>
            <FaQuoteLeft></FaQuoteLeft>
          </span>
        </div>
        <div className="pt-2 fw-bold fs-4">{"Testimonials"}</div>
      </div>
      <div>
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </div>
      <div className=" mt-4 d-flex flex-wrap-reverse justify-content-center flex-sm-nowrap align-items-center gap-2 gap-sm-5 ">
        {" "}

        <audio className="w-100" controls>
          <source
            src={
              "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
            }
            type="audio/mp3"
          />
        </audio>
        <div  className=" d-flex w-auto justify-content-center align-items-center  gap-3">
          <div>
            <img
            style={{width:'60px'}}
              className="rounded-circle  "
              
              src="https://img.freepik.com/free-vector/gradient-avatar-illustration_52683-142438.jpg?w=740&t=st=1706214568~exp=1706215168~hmac=944ec69a7ab3505640dfa515e35f999668f2e3ec27d501447049e17479d1f182"
              alt=""
            />
          </div>
          <div className="d-flex flex-column  ">
            <div  style={{width:'130px'}} className="fw-semibold ">Maruf Hossen</div>
            <div className="fs-7">Gamer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
