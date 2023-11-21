import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function EditPhoneComp(){
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('user-info'))

  const [phonenbr,setPhonenbr]=useState("");

  async function update(){
    let item = {phonenbr}
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/editphone/"+user.id,{
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
        	
        setPhonenbr("");
        navigate('/profile');
      }
    }

return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Edit Phone number
        </div>
    </div>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="description" className="form-label" style={{float: "left"}}>Edit Phone number</label>
                      <input type="text" value={phonenbr} onChange={(e)=>setPhonenbr(e.target.value)} class="form-control" placeholder="Phone number ..." id="phone"/>
                    </div>
                    <button type="button" onClick={update} className="btn btn-primary"  style={{float: "left"}}>Update</button>
                  </form>
                </div>
              </div>
</div>             
)
}
export default EditPhoneComp;