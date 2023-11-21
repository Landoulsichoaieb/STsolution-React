import React, { Fragment, useEffect } from "react";
import SideBar from './Component/SideBar';
import Header from './Component/Header';
import Footer from "./Component/Footer";
import { useNavigate } from "react-router-dom";
import TopProfile from "./Component/TopProfile";
import FieldsProfileComp from "./Component/FieldsProfileComp";
function Home(){

    const navigate = useNavigate(); 
    useEffect(()=>{
        if(!localStorage.getItem("user-info"))
        {
          navigate("/Login")
        }
      }, [])
      

return (
    <div className="App">
        <Fragment>
        <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <SideBar/>
            <div class="body-wrapper">
                <Header/>
                <div className="container-fluid">  
                <TopProfile/>
                <FieldsProfileComp/>
                </div>
                <Footer/>
            </div>
        </div>
        
        </Fragment>
    </div>
)
}
export default Home;