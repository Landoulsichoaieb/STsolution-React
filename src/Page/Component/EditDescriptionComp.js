import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function EditDescriptionComp(){
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('user-info'))

  const [description,setDescription]=useState("");

  async function update(){
    let item = {description}
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/editdesc/"+user.id,{
      method:"POST",
      body: JSON.stringify(item),
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    result = await result.json()
      alert(result[1]);    
      if(result[0] == "success"){
        	
        localStorage.setItem("description", JSON.stringify(description));
        setDescription("");
        navigate('/profile');
      }
    }

return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Edit Description
        </div>
    </div>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="description" className="form-label" style={{float: "left"}}>Edit Description</label>
                      <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="update my description..."  className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <button type="button" onClick={update} className="btn btn-primary"  style={{float: "left"}}>Update</button>
                  </form>
                </div>
              </div>
</div>             
)
}
export default EditDescriptionComp;