import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProfileSettings(){

    const navigate = useNavigate(); 
    useEffect(()=>{
        if(!localStorage.getItem("user-info"))
        {
          navigate("/Login")
        }
      }, [])

return(


<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Profile Settings
        </div>
    </div>
    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Description</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-7" style={{float:"left"}}>
        Add a new description or edit your existing one. The description section is an excellent opportunity to define and express yourself effectively.
        </div>
        <Link to="/EditDescription">
        <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Phone Number</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        Update or modify your current phone number to facilitate seamless communication and accessibility for businesses looking to get in touch with you.
        </div>
        <Link to="/EditPhone">
        <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Profile Picture</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        Add or upload your profile picture.
        </div>
        <Link to="/EditImage">
        <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>
    
    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Edit Passowrd</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        To update your password, simply provide your current password as verification.
        </div>
        <Link to="/EditPassword">
            <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>
</div>             
)
}
export default ProfileSettings;