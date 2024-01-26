import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserForm = ({ page }) => {
  return (
    <div className="d-flex flex-column">
         {/* social */}
      <div className="order-3 order-md-1">
        <div className="d-flex rounded-3 justify-content-start align-items-center mt-4 p-2 border border-2">
          <div className="mx-2">
            <FcGoogle />
          </div>
          <div className="mx-auto fw-semibold"> Continue with Google</div>
        </div>
        <div className="d-flex rounded-3 justify-content-start align-items-center mt-4 p-2 border border-2 ">
          <div className="mx-2 text-secondary">
            <FaFacebook />
          </div>
          <div className="mx-auto fw-semibold">Continue with Facebook</div>
        </div>
      </div>
  {/* social  end*/}


      <div className="d-flex justify-content-center mb-2 mt-3 gap-2 order-2 order-md-2">
        <hr className="flex-fill" />
        <p className=" text-center fw-semibold">or connect with</p>
        <hr className="flex-fill" />
      </div>

{/* email pass */}

      <div className="order-1 order-md-3">
        <form action="">
          <div className="d-grid gap-3 ">
            <div>
              <input
                type="email"
                className="form-control p-2 "
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control p-2 "
                placeholder="Password"
              />
            </div>
          </div>

          {page == "signup" && (
            <div
              className="d-flex align-items-center 
            justify-content-between         mt-4"
            >
              <div className="d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="remenber">Remember Me</label>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="pb-1" style={{ fontSize: "14px" }}>
                  <FaLock />
                </div>
                <div className="">
                  <Link className="text-decoration-none fw-lighter text-dark ">
                    forgot password
                  </Link>
                </div>
              </div>
            </div>
          )}

          {page == "joinin" && (
    <>        <div
    className="d-flex align-items-center 
  justify-content-between         mt-1"
  >
    <div className="d-flex gap-1">
      <div
        style={{
          width: "1px",
          height: "4px",
          backgroundColor: "lightgray",
        }}
        className=" px-4"
      ></div>
      <div
        style={{
          width: "1px",
          height: "4px",
          backgroundColor: "lightgray",
        }}
        className=" px-4"
      ></div>
      <div
        style={{
          width: "1px",
          height: "4px",
          backgroundColor: "lightgray",
        }}
        className=" px-4"
      ></div>
    </div>
    <div className="d-flex  gap-1">
      <div className="">
        <Link className="text-decoration-none fw-semibold text-dark ">
          Password strength
        </Link>
      </div>
  
    </div>

  </div>
         <div className="text-body-tertiary text-center mt-1">
         By continuing, you agree to our <span className="fw-semibold text-dark">Terms of Service</span> and <span className="fw-semibold text-dark"> Privacy
         Policy</span>.
       </div>
    </>
          )}

          <div>
            <button type="button" className="btn mt-4 btn-outline-dark w-100">
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* email pass */}
    </div>
  );
};

export default UserForm;
