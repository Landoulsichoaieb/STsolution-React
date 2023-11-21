import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProfileForPostsComp() {
    let user = JSON.parse(localStorage.getItem('user-info') || '{}');
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const post = queryParameters.get("post");
    const [records, setRecords] = useState([]);
    const [desc, setDesc] = useState([]);
    const [myuser, setMyuser] = useState([]);
    const [tag, setTag] = useState([]);
    const [tagdual, setTagdual] = useState([]);
    const [ifaccepted, setIfaccepted] = useState([]);
    const [timeline, setTimeline] = useState([]);
    const [message,setMessage]=useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [imgRes, descRes, userRes, tagRes, tagDualRes, ifAcceptedRes, timelineRes] = await Promise.all([
                    axios.get(`http://localhost:8000/api/getimg/${id}`),
                    axios.get(`http://localhost:8000/api/getdesc/${id}`),
                    axios.get(`http://localhost:8000/api/getuser/${id}`),
                    axios.get(`http://localhost:8000/api/getusertag/${id}`),
                    axios.get(`http://localhost:8000/api/getuserposttag/${id}/${post}`),
                    axios.get(`http://localhost:8000/api/getifaccepted/${id}/${post}`),
                    axios.get(`http://localhost:8000/api/gettimeline/${id}/${post}`)
                ]);
                setRecords(imgRes.data);
                setDesc(descRes.data);
                setMyuser(userRes.data);
                setTag(tagRes.data);
                setTagdual(tagDualRes.data);
                setIfaccepted(ifAcceptedRes.data);
                setTimeline(timelineRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id, post]);

    const acceptreq = async () => {
        let item = {id,post}
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/acceptreq",{
          method:"POST",
          body: JSON.stringify(item),
          headers:{
            "Content-Type": 'application/json',
            "Accept": 'application/json'
          }
        })
        result = await result.json()
          alert(result[1]);    
          if(result[0] == "success"){
                
            window.location.reload();

          }
        }
        const declinereq = async () => {
            let item = {id,post}
            console.warn(item)
            let result = await fetch("http://localhost:8000/api/declinereq",{
              method:"POST",
              body: JSON.stringify(item),
              headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
              }
            })
            result = await result.json()
              alert(result[1]);    
              if(result[0] == "success"){
                    
                window.location.reload();

              }
            }
            const Addtimeline = async () => {
              let item = {id,post,message}
              console.warn(item)
              let result = await fetch("http://localhost:8000/api/Addtimeline",{
                method:"POST",
                body: JSON.stringify(item),
                headers:{
                  "Content-Type": 'application/json',
                  "Accept": 'application/json'
                }
              })
              result = await result.json()
                alert(result[1]);    
                if(result[0] == "success"){
                      
                  window.location.reload();
  
                }
              }
            
return(
    <div className="card">
        <div className="card-body">
            <div className="row">
            <div className="col-12 col-md-4">
                <div className="col-12">
                    <h5 className="card-title fw-semibold mb-4">Personal informations</h5>
                    <div className="card">
                        <div className="card-header p-3">
                        <>
                            <img src={`http://localhost:8000/${records}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{float:"left"}} alt="..."/>
                        </>
                        <h5 className="card-title m-0 p-1" style={{textAlign: "left",lineHeight:2}}>{myuser.name}</h5>
                        <div className="col-12 mt-3">
                        <p className="card-text" style={{textAlign: "left"}}>{desc}</p>        
                        </div>
                        </div>
                            <div className="card-body p-3">
                            <Link to={{
                            pathname: "/ProfileFor",
                            search: "?id="+id, 
                            }}>
                                <button className="btn btn-primary" style={{float:"left"}}>Visit Profile</button>
                            </Link>
                            {!ifaccepted && <button  onClick={acceptreq} className="btn btn-success ml-1" style={{float:"left"}}>Accept</button> }
                            {!ifaccepted &&<button  onClick={declinereq} className="btn btn-warning ml-1" style={{float:"left"}}>Decline</button> }   
                            {(ifaccepted.status === 1) && <div class="alert alert-success p-2" style={{float:"right"}} role="alert"><i class="ti ti-heart mr-1"></i>Accepted</div>}
                            {(ifaccepted.status === 2) && <div class="alert alert-warning p-2" style={{float:"right"}} role="alert"><i class="ti ti-trash mr-1"></i>Refused</div>}
                                </div>
                    </div>
                </div>
                {(ifaccepted.status === 1) && !timeline && <div>
                  <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label" style={{float:"left"}}>Send a Message & Add to project</label>
                      <textarea class="form-control" onChange={(e)=>setMessage(e.target.value)} id="" rows="3"></textarea>
                      <div id="emailHelp" class="form-text p-0 col-12 mt-1" style={{float:"left",textAlign:"left"}}>It is optional to send a message.</div>
                    </div>
                    <button  onClick={Addtimeline} className="btn btn-success ml-1 mt-3" style={{float:"left"}}><i className="ti ti-send mr-2"></i>submit</button>
                </div>}
                {(ifaccepted.status === 1) && timeline && <div>
                  <div class="mb-3">
                  <center>
                  <Link to={{
                            pathname: "/projecttimeline",
                            search: "?id="+timeline.id,
                            }}>
                  <button className="btn btn-success ml-1 mt-3"><i className="ti ti-clipboard-list mr-2"></i>Project Timeline</button>
                  </Link>
                  </center>
                  </div>
                </div>}
            </div>
                <div className="col-12 col-md-8">
                    <h5 className="card-title fw-semibold mb-4 col-12" style={{float:"left"}}>Analysis</h5>
                    
                    <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 h-100">
              <div className="card-body p-4">
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <tbody>
                      <tr className="">
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">
                        <i class="ti ti-input-search" style={{float:"left"}}></i>
                        </h6></td>
                        <td className="border-bottom-0"  style={{float:"left"}}>
                            <h6 className="fw-semibold mb-1" style={{float:"left"}}>Field</h6>
                        </td>
                        <td className="border-bottom-0">
                            <p className="mb-0 fw-normal" style={{float:"left"}}>
                                {
                                    tag.myfield ?  tag.myfield : <i>No Field Added</i>
                                }
                            </p>
                        </td>
                        <td className="border-bottom-0">
                        <img src={`../assets/images/backgrounds/${tagdual[0]}.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/>
                        </td>
                      </tr> 
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">
                        <i class="ti ti-code" style={{float:"left"}}></i>
                        </h6></td>
                        <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-1" style={{float:"left"}}>First Programming Language</h6>
                        </td>
                        <td className="border-bottom-0">
                            <p className="mb-0 fw-normal" style={{float:"left"}}>
                                {
                                    tag.prog1 ?  tag.prog1 : <i>No Language Added"</i>
                                }
                            </p>
                        </td>
                        <td className="border-bottom-0">
                        <img src={`../assets/images/backgrounds/${tagdual[1]}.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/>
                        </td>
                      </tr> 
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">
                        <i class="ti ti-code" style={{float:"left"}}></i>
                        </h6></td>
                        <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-1" style={{float:"left"}}>Second Programming Language</h6>
                        </td>
                        <td className="border-bottom-0">
                            <p className="mb-0 fw-normal" style={{float:"left"}}>
                                {
                                    tag.prog2 ?  tag.prog2 : <i>No Second Language Added</i>
                                }
                            </p>
                        </td>
                        <td className="border-bottom-0">
                        <img src={`../assets/images/backgrounds/${tagdual[2]}.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/>
                        </td>
                      </tr>      
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">
                        <i class="ti ti-brand-vscode" style={{float:"left"}}></i>
                        </h6></td>
                        <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-1" style={{float:"left"}}>First Framework</h6>
                        </td>
                        <td className="border-bottom-0">
                            <p className="mb-0 fw-normal" style={{float:"left"}}>
                                {
                                    tag.frame1 ?  tag.frame1 : <i>No Framework Added</i>
                                }
                            </p>
                        </td>
                        <td className="border-bottom-0">
                        <img src={`../assets/images/backgrounds/${tagdual[3]}.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">
                        <i class="ti ti-brand-vscode" style={{float:"left"}}></i>
                        </h6></td>
                        <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-1" style={{float:"left"}}>Second Framework</h6>
                        </td>
                        <td className="border-bottom-0">
                            <p className="mb-0 fw-normal" style={{float:"left"}}>
                                {
                                    tag.frame2 ?  tag.frame2 : <i>No Second Framework Added</i>
                                }
                            </p>
                        </td>
                        <td className="border-bottom-0">
                        <img src={`../assets/images/backgrounds/${tagdual[4]}.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/>
                        </td>
                      </tr>                      
                    </tbody>
                  </table>
                  <div className="col-12 mb-5" style={{float:"left"}}>
                    <h5 className="card-title fw-semibold mb-4">Rating</h5>
                    <ProgressBar now={tagdual[5]} label={`${tagdual[5]}%`} />
                  </div>
                <span class="card-title m-0 p-4 bg-light" style={{fontSize:16,lineHeight:1}}>{tagdual[6]}</span>
                </div>
              </div>
            </div>
          </div>


                </div>
            </div>
        </div>
    </div>
)
}
export default ProfileForPostsComp;







