import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIndex from "./Component/HeaderIndex";
import FooterIndex from "./Component/FooterIndex";
import DescriptionIndex from "./Component/DescriptionIndex";
function Home(){

    const navigate = useNavigate(); 
    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
          navigate("/Home")
        }
      }, [])
          

return (
    <div className="App">
        <Fragment>
            <HeaderIndex/>
            <DescriptionIndex/>
            <FooterIndex/>
        </Fragment>
    </div>
)
}
export default Home;