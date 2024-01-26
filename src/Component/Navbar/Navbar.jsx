import logo from "../../assets/logo.png";
import { RiMenuFill } from "react-icons/ri";
import NavbarLink from "./NavbarLink";
import search from "../../assets/search.svg";
import bell from "../../assets/bell.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar shadow-sm navbar-expand navbar-light ">
        <div className="container-fluid">
          <div className="mw-100 ">
            <Link className="navbar-brand " href="#">
              <img src={logo} className="logo   mw-100 "alt="" />
            </Link>
          </div>

          <div className="d-none d-lg-block">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>


          <div className="d-flex align-items-center  ">
            <div className="d-lg-none  ms-auto mx-3  ">
              <img src={search} alt=""  />
            </div>
            <div className="d-lg-none ms-auto mx-2">
              <img src={bell} alt="" />
            </div>
            <div className="dropdown  d-lg-none">
              <button
                data-bs-auto-close="outside"
                className="btn fs-5 mb-1 color"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <RiMenuFill></RiMenuFill>
              </button>
              <ul
                className=" mt-2 me-1 dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <NavbarLink dropdown="dropstart"></NavbarLink>
              </ul>
            </div>
          </div>

          <div className="d-none d-lg-block">
            <ul className="navbar-nav    ms-auto my-2  my-lg-0 ">
              <NavbarLink></NavbarLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
