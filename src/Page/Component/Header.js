import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
function Header(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const [records, setRecords] = useState([])
  const [role,setRole]= useState(false)
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getimg/"+user.id)
    .then(res => {setRecords(res.data)})
    .catch(err => console.log(err))
  },[])
  function logout()
  {
      localStorage.clear();
      navigate("/Login");
  }
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getcompanysolo/"+user.id)
    .then(ress => {setRole(ress.data)})
    .catch(erro => console.log(erro))
  },[])
  useEffect(() => {
    console.warn(role);
  if(role === "false"){
    setRole(role => !role);
  }
  },[])
    return(
    <Fragment>
        <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="nav-item">
            <Link to="/search"><a className="nav-link" href="#">
                search <i className="ti ti-search"></i>
              </a></Link>
            </li>
          </ul>
          <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img src={(`http://localhost:8000/${records}`)} alt="" width="35" height="35" className="rounded-circle"/>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div className="message-body">
                  <Link to={
                  role ?  "/ProfileComp" : "/Profile"
                  }>
                    <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    </Link>
                    <Link to="/EditProfile"><a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-settings fs-6"></i>
                      <p className="mb-0 fs-3">Edit Account</p>
                    </a>
                    </Link>
                    <a href="#" onClick={logout} className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
)
}
export default Header;