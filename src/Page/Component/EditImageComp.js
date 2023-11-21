import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";

function EditImageComp(){
  let user = JSON.parse(localStorage.getItem('user-info'))

  const [file,setFile]=useState("");
  let navigate = useNavigate();

  async function upload(){
    const formData = new FormData();
    formData.append('file',file);
    let result = await fetch("http://localhost:8000/api/uploadimg/"+user.id,{
      method: 'POST' ,
      body: formData
    });
    result = await result.json()
    alert(result[1]);    
      if(result[0] == "success"){
        navigate('/Profile');
      }
    }

return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Edit Image
        </div>
    </div>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="profile_img" className="form-label mr-3" style={{float: "left"}}>Edit Image</label>
                      <input type="file" onChange={(e)=>setFile(e.target.files[0])} class="form-control col-6 col-md-4" id="profile_img" />
                    </div>
                    <button type="button" onClick={upload} className="btn btn-primary"  style={{float: "left"}}>Update</button>
                  </form>
                </div>
              </div>
</div>             
)
}
export default EditImageComp;