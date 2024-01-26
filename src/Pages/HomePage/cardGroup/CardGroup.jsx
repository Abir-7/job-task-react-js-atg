import { HiMiniUserGroup } from "react-icons/hi2";
import Card from "./Card";
import { LuShoppingBag } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
const CardGroup = () => {
  return (
    <div className="grid gap-5 mx-0 mx-md-5 ">
      <div className="row">
        <div className="col-12 col-md-6 my-3">
          <Card
            hover={""}
            logo={<HiMiniUserGroup />}
            title={"People"}
            color={"text-primary"}
            text={
              "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            }
            text2={"Connect"}
            display={"d-block"}
          ></Card>
        </div>

        <div className="col-12 col-md-6 my-3">
          <Card
            hover={""}
            color={"text-success"}
            logo={<FiMapPin />}
            title={"Place"}
            text={
              "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            }
            display={"d-block"}
            text2={"Meet Up"}
          ></Card>
        </div>

        <div className="col-12 col-md-6 my-3">
          <Card
            hover={""}
            display={"d-block"}
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
            hover={""}
            display={"d-block"}
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

export default CardGroup;
