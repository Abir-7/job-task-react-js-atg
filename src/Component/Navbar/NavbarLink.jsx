import React from 'react';
import bookmark from "../../assets/bookmark.svg";
import bell from "../../assets/bell.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
const NavbarLink = ({dropdown}) => {
    return (
        <>
      <li className={`navbar-nav  nav-item dropdown ${dropdown}  `}>
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Expolre
          </Link>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
              People - Community
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Places - Venues
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Programs - Events
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Products - Store
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Blogs
              </a>
            </li>
          </ul>
        </li>

        <li className={`navbar-nav nav-item dropdown ${dropdown}  `}>
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hobbies
          </Link>
          <ul
            className="dropdown-menu "
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <Link className="dropdown-item" href="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li>
  
        <li className="nav-item">
          <Link className="nav-link" href="#" tabIndex="-1">
            <img src={bookmark} alt="" />
          </Link>
        </li>
        <li className="nav-item d-none d-lg-block">
          <Link className="nav-link" href="#" tabIndex="-1">
            <img src={bell} alt="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" tabIndex="-1">
            <img src={cart} alt="" />
          </Link>
        </li>
        <li>
          <button type="button" className="btn btn-outline-primary">
           Signin
          </button>
        </li></>
        
  
    );
};

export default NavbarLink;