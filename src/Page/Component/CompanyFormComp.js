import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CompanyFormComp(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const Navigate = new useNavigate();
  const [address,setAddress]=useState("");
  const [compfield,setCompField]=useState("");

  async function addcompany(){
    let item = {address,compfield}
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/addcompany/"+user.id,{
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
        setAddress("");
        setCompField("");
        Navigate("/Home");
      }
    }

return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Add Company
        </div>
    </div>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="Address" className="form-label" style={{float: "left"}}>Current Address</label>
                      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="Address" placeholder="Current Address"/>
                    </div>
                    <div className="mb-3">
                      <label for="Field" className="form-label" style={{float: "left"}}>Field</label>
                      <input type="text" value={compfield} onChange={(e)=>setCompField(e.target.value)} className="form-control" id="Field" placeholder="Field"/>
                    </div>
                    <button type="button" onClick={addcompany} className="btn btn-primary"  style={{float: "left"}}>Save</button>
                  </form>
                </div>
              </div>
</div>             
)
}
export default CompanyFormComp;