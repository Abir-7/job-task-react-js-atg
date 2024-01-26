import React from "react";
import s1 from "../../assets/social/s1.svg";
import s2 from "../../assets/social/s2.svg";
import s3 from "../../assets/social/s3.svg";
import s4 from "../../assets/social/s4.svg";
import s5 from "../../assets/social/s5.svg";
import s6 from "../../assets/social/s6.svg";
import s7 from "../../assets/social/s7.svg";
import s8 from "../../assets/social/s9.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="pt-2">
      <footer className="mt-5">
        <div className="row">
          <div className="col-md-3">
            {/* Column 1 content */}
            <h5 className="fw-bold">Hobbycue</h5>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Work with Us</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
          <div className="col-md-3">
            {/* Column 2 content */}
            <h5 className="fw-bold">How Do I</h5>
            <p>Sign Up</p>
            <p>Add a Listing</p>
            <p>Claim Listing</p>
            <p>Post a Query</p>
            <p>Add a Blog Post</p>
            <p>Other Queries</p>
          </div>
          <div className="col-md-3">
            {/* Column 3 content */}
            <h5 className="fw-bold">Quick Links</h5>
            <p>Listings</p>
            <p>Blog Posts</p>
            <p>Shop / Store</p>
            <p>Community</p>
          </div>
          <div className="col-md-3">
            {/* Column 4 content */}
            <h5 className="fw-bold">Social Media</h5>
            <div className="d-flex gap-3 mt-3 mb-5">
              <Link to="#">
                {" "}
                <img width={'20px'} src={s1} alt="" />
              </Link>
              <Link to="#">
                {" "}
                <img width={'20px'} src={s2} alt="" />
              </Link>
              <Link to="#">
                {" "}
                <img width={'20px'}  src={s3} alt="" />
              </Link>
              <Link to='#'>    <img src={s4} width={'20px'}  alt="" /></Link>
              <Link to='#'>    <img src={s5} width={'20px'} alt="" /></Link>
              <Link to='#'>    <img src={s6} width={'20px'} alt="" /></Link>
              <Link to='#'>    <img src={s7} width={'20px'} alt="" /></Link>
              <Link to='#'>    <img src={s8} width={'20px'} alt="" /></Link>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email ID"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-primary" type="button" id="button-addon2">
                Invite
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="py-4 mt-5 text-center  "
        style={{ backgroundColor: "#F7F5F9" }}
      >
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
