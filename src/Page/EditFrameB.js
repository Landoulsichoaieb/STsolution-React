import React, { Fragment, useEffect } from "react";
import SideBar from './Component/SideBar';
import Header from './Component/Header';
import Footer from "./Component/Footer";
import { useNavigate } from "react-router-dom";
import SelectFrameBComp from "./Component/SelectFrameBComp";
function EditFrameB(){

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
                    <div className="card p-2 pt-3 border border-light fw-bold">
                        <div className="card-title" style={{textAlign:'left'}}>
                            Edit Second Framework Tag
                        </div>
                    </div>
                <div className="card">
                <div className="card-body">
                      <SelectFrameBComp/>
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        </div>
        
        </Fragment>
    </div>
)
}
export default EditFrameB;