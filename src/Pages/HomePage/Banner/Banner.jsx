import { useState } from "react";
import people from "../../../assets/people.png";

import UserForm from "./UserForm";



const Banner = () => {
  const [page,setPage]=useState('signup')

const setUserPage = (data)=>{
  setPage(data)
}
  return (
    <div className=" px-3  px-md-5 py-3 py-md-5 ">
      <div className="d-flex flex-wrap flex-md-nowrap gap-2  gap-md-5 ">
        <div className="flex-fill w-100">
          <div>
            <h2 className="fw-bold">
              Explore your <span className="text-secondary">hobby</span> or{" "}
              <span className="text-primary">passion</span>
            </h2>
            <p className="">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="d-none d-md-block">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className="d-none d-md-block">
            <img src={people} className="col-12" alt="" />
          </div>
        </div>
        <div className="flex-fill w-100">
          <div className="d-flex justify-content-center  justify-content-md-start gap-4  fw-bold ">
            <p onClick={()=>setUserPage('signup')} className={page=='signup'?"border-3 border-primary text-primary border-bottom":"text-dark"}>Sign In</p>
            <p onClick={()=>setUserPage('joinin')} className={page=='joinin'?"border-3 border-primary text-primary border-bottom":" text-dark"}>Join In</p>
          </div>

      {
        page=='signup' &&     <div >
        <UserForm page={page}></UserForm>
      </div>
      }

{
        page=='joinin' &&     <div >
        <UserForm page={page}></UserForm>
      </div>
      }

          <div className="d-md-none mt-5">
            <img src={people} className="col-12" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//col-md-6 pe-sm-1  pe-md-3 pe-lg-3 col-md-6 ps-sm-3 ps-md-4 ps-lg-4
