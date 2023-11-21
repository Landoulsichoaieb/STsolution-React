import React, {useEffect,useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function SearchComp(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    let navigate = useNavigate();
    
    const [searchbar,setSearchbar]=useState("and");
    const [mydata,setMydata]=useState([]);

      async function search(){
        axios.get("http://localhost:8000/api/searchzone/"+searchbar)
        .then(res => {setMydata(res.data)})
        .catch(err => console.log(err))
     }

      console.warn(mydata)
    return(
        <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h5 className="card-title fw-semibold mb-4">Search</h5>
                  <div className="card">
                    <div className="card-header p-3">
                    <input type="text" value={searchbar} onChange={(e)=>setSearchbar(e.target.value)} class="form-control bg-white" id="search" placeholder="Search..."/>
                    </div>
                    <div className="card-body p-3">
                      <a href="#" className="btn btn-primary" onClick={search} style={{float:"left"}}>Search</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <h5 className="card-title fw-semibold mb-4 col-12" style={{float:"left"}}>Search Result</h5>
                    
                    { mydata.map((item)=>


                      <div class="card col-12 mr-4" style={{float:"left"}}>
                      <div class="card-body">
                        <h5 class="card-title"><h5 class="card-title mb-1" style={{textAlign:"left"}}>
                        <img src={`http://localhost:8000/${item.fileimg}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{float:"left",width:25,height:25,padding:0}} alt="..."/>
                        <span style={{marginLeft:10,lineHeight:1}}>
                          {item.name}
                        </span>
                          </h5></h5>
                        <p class="card-text" style={{textAlign:"left"}}>{item.description}</p>
                        <Link to={{
                          pathname: "/Profilefor",
                          search: "?id="+item.id, 
                        }}>
                        <a href="#" class="btn btn-sm btn-primary" style={{float:"left"}}>Visit Profile</a>
                        </Link>
                      </div>
                      </div>
                      

                    )}
                </div>
              </div>
            </div>
          </div>

    )
}
export default SearchComp;