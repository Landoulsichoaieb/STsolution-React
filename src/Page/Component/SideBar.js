import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SideBar(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate =useNavigate();
  const [role,setRole]= useState(false)
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
<aside className="left-sidebar">

      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/Home">
          <a className="text-nowrap logo-img">
            <img src="../assets/images/logos/dark-logo.png" width="180" alt="" />
          </a>
          </Link>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>

        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="sidebar-item">
            <Link to="/Home">
              <a className="sidebar-link" aria-expanded="false">
                <span>
                  <i className="ti ti-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
              </Link>
            </li>
            <li className="sidebar-item">
            <Link to={
             role ?  "/ProfileComp" : "/Profile"
            }>
            
              <a className="sidebar-link" aria-expanded="false">
                <span>
                  <i className="ti ti-user"></i>
                </span>
                <span className="hide-menu">Profile</span>
              </a>
              </Link>
            </li>
            <Link to="/Search">
            <li className="sidebar-item">
              <a className="sidebar-link" aria-expanded="false">
                <span>
                  <i className="ti ti-search"></i>
                </span>
                <span className="hide-menu">Search Page</span>
              </a>
            </li>
            </Link>
            <li className="sidebar-item">
            <Link to="/Editprofile">
              <a className="sidebar-link" aria-expanded="false">
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Settings</span>
              </a>
              </Link>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" onClick={logout} aria-expanded="false">
                <span>
                  <i className="ti ti-x"></i>
                </span>
                <span className="hide-menu">Logout</span>
              </a>
            </li>
            
          </ul>
          
        </nav>

      </div>

    </aside>
    </Fragment>
)
}
export default SideBar;