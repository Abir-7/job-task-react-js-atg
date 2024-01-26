import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";

import { LuShoppingBag } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import Card from "../HomePage/cardGroup/Card";
import { FaPlusCircle } from "react-icons/fa";
const Addnew = () => {
  return (
    <div className="grid gap-5 mx-0 mx-md-5 ">
      <div className="d-flex mt-3 w-100 justify-content-center align-items-center gap-3 mb-3">
        <div className="fs-4 text-secondary">
          <FaPlusCircle />
        </div>
        <div className="fw-bold fs-4 pt-1">Add your own</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 my-3 ">
          <Card
            hover={"card-primary"}
            display={"d-none"}
            logo={<HiMiniUserGroup />}
            title={"People"}
            color={"text-primary"}
            text={
              "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            }
            text2={"Connect"}
          ></Card>
        </div>

        <div className="col-12 col-md-6 my-3">
          <Card
            hover={"card-success"}
            display={"d-none"}
            color={"text-success"}
            logo={<FiMapPin />}
            title={"Place"}
            text={
              "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            }
            text2={"Meet Up"}
          ></Card>
        </div>

        <div className="col-12 col-md-6 my-3">
          <Card
            hover={"card-danger"}
            display={"d-none"}
            color={"text-danger"}
            logo={<LuShoppingBag />}
            title={"Product"}
            text={
              "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
            }
            text2={"Get it"}
          ></Card>
        </div>
        <div className="col-12 col-md-6  my-3">
          <Card
            hover={"card-secondary"}
            display={"d-none"}
            color={"text-secondary"}
            logo={<BiTask />}
            title={"Program"}
            text={
              "Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            }
            text2={"Attend"}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Addnew;
