import React, { useState } from "react";

function EditPasswordComp(){
  let user = JSON.parse(localStorage.getItem('user-info'))

  const [current,setCurrent]=useState("");
  const [password,setPassword]=useState("");
  const [repeatpassword,setRepeatPassword]=useState("");

  async function update(){
    let item = {current,password,repeatpassword}
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/updatepassword/"+user.id,{
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
        setCurrent("");
        setPassword("");
        setRepeatPassword("");
      }
    }

return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Edit Password
        </div>
    </div>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="CurrentPassword" className="form-label" style={{float: "left"}}>Current Password</label>
                      <input type="password" value={current} onChange={(e)=>setCurrent(e.target.value)} className="form-control" id="CurrentPassword"/>
                    </div>
                    <div className="mb-3" style={{marginTop:'50px'}}>
                      <label for="NewPassword" className="form-label" style={{float: "left"}}>Password</label>
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="NewPassword"/>
                    </div>
                    <div className="mb-3" style={{marginTop:'50px'}}>
                      <label for="repeatpassword" className="form-label" style={{float: "left"}}>Password</label>
                      <input type="password" value={repeatpassword} onChange={(e)=>setRepeatPassword(e.target.value)} className="form-control" id="RepeatPassword"/>
                    </div>
                    <button type="button" onClick={update} className="btn btn-primary"  style={{float: "left"}}>Update</button>
                  </form>
                </div>
              </div>
</div>             
)
}
export default EditPasswordComp;