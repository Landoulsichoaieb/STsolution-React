import React, {useEffect,useState} from "react"
import { Link } from "react-router-dom";
import ManagePostComp from "./ManagePostComp";
import PostsCompanyComp from "./PostsCompanyComp";
import axios from "axios";
function FieldsProfileComp(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const [phonenbr,setPhonenbr] = useState([])
  const [role,setRole]= useState(false)

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getphone/"+user.id)
    .then(result => {setPhonenbr(result.data)})
    .catch(error => console.log(error))
  },[])


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
        <div className="row">
            <PostsCompanyComp/>

          <div className="col-lg-3 align-items-stretch">
            <ManagePostComp/>
            <div className="unlimited-access hide-menu bg-light-primary position-relative mb-3 rounded">
            <div class="card bg-transparent shadow-none p-0 m-0">
            <div class="d-flex">
                    <div class="card-body p-0">
                      <h5 class="card-title col-12 p-0" style={{float:"left",textAlign:"left"}}>Phone number</h5>
                      <p class="card-text col-12 p-0"  style={{float:"left",textAlign:"left"}}>
                        {
                          phonenbr ?  phonenbr : <i>No Phone number</i>
                        }
                      </p>
                      <Link to="/EditPhone">
                        <a href="#" class="btn btn-primary btn-sm" style={{float:"left"}}>Manage Phone</a>
                      </Link>
                    </div>
                    <div class="">
                      <img src="../assets/images/backgrounds/phone.png" alt="" style={{width:140,height:"auto"}} class="img-fluid mt-2 d-none d-lg-block"/>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>

    )
}
export default FieldsProfileComp;