import React, {useEffect,useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import FollowButtonComp from "./FollowButtonComp";
import UnfollowButtonComp from "./UnfollowButtonComp";

import axios from "axios";
function TopProfileFor(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")
  const [records, setRecords] = useState([])
  const [desc,setDesc] = useState([])
  const [myuser,setMyuser] = useState([])
  const [follow,setFollow] = useState(false)
  const [countfollower,setCountfollower] = useState([])
  
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getfollow/"+user.id+"/"+id)
    .then(ress => {setFollow(ress.data)})
    .catch(erro => console.log(erro))
  },[])
  useEffect(() => {
    console.warn(follow);
  if(follow === "false"){
    setFollow(follow => !follow);
  }
},[])


  useEffect(()=>{
    axios.get("http://localhost:8000/api/getimg/"+id)
    .then(res => {setRecords(res.data)})
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getdesc/"+id)
    .then(result => {setDesc(result.data)})
    .catch(error => console.log(error))
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getuser/"+id)
    .then(result => {setMyuser(result.data)})
    .catch(error => console.log(error))
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getuser/"+id)
    .then(result => {setMyuser(result.data)})
    .catch(error => console.log(error))
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/followerbyid/"+id)
    .then(result => {setCountfollower(result.data)})
    .catch(error => console.log(error))
  },[])
  
  
    return(
        <div className="container-fluid">  
        <div className="card">
          <div className="card-body">
            <div className="card-body col-12 col-md-9 col-sm-9" style={{float:"left"}}>
              
              <>
            <img src={`http://localhost:8000/${records}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{float:"left"}} alt="..."/>
            </>
            
            <div className="col-8 col-md-7 col-sm-6" style={{float:'left',marginLeft:20}}>
                <h5 className="card-title" style={{textAlign: "left"}}>{myuser.name}</h5>
                <p className="card-text" style={{textAlign: "left"}}>{desc}</p>
                <span style={{float:"left",fontSize:15,color:"#888",textAlign:"left"}}><span className="badge badge-info fw-bold" style={{fontSize:16}}>
                  {countfollower} followers
                  </span>
                </span>
            </div> 
            </div>
            <div className="col-12 col-md-3 col-sm-3 mt-4" style={{float:"right"}}>
            <div style={{ display : follow ? "inline" : "none" }}>
                <FollowButtonComp/>
            </div>
            <div style={{ display : follow ? "none" : "inline"}}>
                <UnfollowButtonComp/>
            </div>
            </div>
          </div>
        </div>
        </div>

    )
}
export default TopProfileFor;