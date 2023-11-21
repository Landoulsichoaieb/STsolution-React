import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
async function roleuser(){

    let user = JSON.parse(localStorage.getItem('user-info'))
    let role = 1;
    console.warn(role)
    let result = await fetch("http://localhost:8000/api/role/"+user.id+"/"+role,{
      method:"POST",
      body: JSON.stringify(role),
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    result = await result.json()
      alert(result[1]);
      if(result[0] == "success"){
        window.location.reload();
      }
    }

function RoleSection(){
    return(
        <div className="alert alert-primary" role="alert">
                    <span>Are you a company ? if yes click on "yes i'm a compnay" </span>
                    <Link to="/CompanyForm"><Button className="btn">Yes, i'm a compnay</Button></Link>
                    <Button type="submit" onClick={roleuser} className="btn btn-warning ml-2">No, i'm not</Button>
                  </div>
    )
}
export default RoleSection;