import React, {useEffect,useState} from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function ProfileForPostsComp(){
    let user = JSON.parse(localStorage.getItem('user-info'))
  const [userinter,setUserinter] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getuserinter/"+user.id)
    .then(result => {setUserinter(result.data)})
    .catch(error => console.log(error))
  },[])

return(
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-12">
                { userinter.map((item)=>
                    
                    <div className="card col-12">
                        <div className="card-header p-3 mt-3">
                        <div className="col-12 mt-3">
                        <p className="card-text" style={{textAlign: "left"}}>{item.details}</p>        
                        </div>
                        </div>
                            <div className="card-body p-3">
                            <Link to={{
                            pathname: "/Post",
                            search: "?id="+item.id, 
                            }}>
                                <button className="btn btn-primary" style={{float:"left"}}>Visit Post</button>
                            </Link>
                            <img src={`../assets/images/backgrounds/${item.status}.png`} style={{float:"right",marginTop:1,opacity:0.8,width:38,height:38,padding:0}} alt="..."/>
                            </div>
                    </div>
                    )}
                </div>
                
            </div>
        </div>
    </div>
)
}
export default ProfileForPostsComp;







