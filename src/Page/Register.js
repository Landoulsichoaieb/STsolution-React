import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container,Alert,Button } from "react-bootstrap";
function Register(){

  useEffect(()=>{
    if(localStorage.getItem("user-info"))
    {
      navigate("/Home")
    }
  }, [])

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate(); 
    

    async function SignUp(){
        let item={name,password,email}
        console.warn(item)

        let result= await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        if(result[0]!== "error"){
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/Home");
         }else{
        alert(result[1]);
          
        }
    }
    
    return(
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/dark-logo.png" width="180" alt=""/>
                </a>
                <p className="text-center">Create an Account</p>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputtext1" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputtext1" aria-describedby="textHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <a href="#" onClick={SignUp} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</a>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                    <Link to="/Login"><a className="text-primary fw-bold ms-2">Sign In</a></Link>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Register;