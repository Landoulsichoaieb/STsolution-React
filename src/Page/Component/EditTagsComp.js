import React from "react";
import { Link } from "react-router-dom";
function EditTagsComp(){
  
return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Manage Tags
        </div>
    </div>
    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Manage Field Tag</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-7" style={{float:"left"}}>
        You can oversee your field, make additions to it, or make updates right here.
        </div>
        <Link to="/EditField">
        <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Manage Programming Language Tag</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        You have the ability to oversee your Programming Language, either by adding to it or making updates directly from here.
        </div>
        <Link to="/EditProgA">
        <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Manage Second Programming Language Tag</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        You have the option to oversee your secondary Programming Language and make additions or updates to it right from here.
        </div>
        <Link to="/EditProgB">
        <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>
    
    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Manage Framework Tag</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        You have the capability to control your Framework, whether it's adding to it or making updates, all right here.
        </div>
        <Link to="/EditFrameA">
            <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 border-bottom border-light" style={{textAlign:"left"}}>Manage Second Framework Tag</div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-6" style={{float:"left"}}>
        You have the ability to handle your secondary Framework, including adding to it or making updates, directly from this here.
        </div>
        <Link to="/EditFrameB">
            <button type="button" class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}>Edit</button>
        </Link>
        </div>
    </div>

    
</div>                      
)
}
export default EditTagsComp;