import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const AddPage = () => {
  return (
    <div className="p-4 mx-0 mx-md-5 " style={{backgroundColor:'#FFFFFF' }} >
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="fs-4 text-secondary">
          <FaPlusCircle />
        </div>
        <div className="fw-bold fs-4 pt-1">Add your own</div>
      </div>
      <div className="mb-4">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or
        event tickets? Or, you know someone who should be on hobbycue? Go ahead
        and Add your Own page
      </div>
      <div>
        <Link to='/new' className="btn btn-outline-primary">Add New</Link>
      </div>
    </div>
  );
};

export default AddPage;
