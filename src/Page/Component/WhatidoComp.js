import React, {useEffect,useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
function WhatidoComp(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const [tag,setTag] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/getusertag/"+user.id)
        .then(result => {setTag(result.data)})
        .catch(error => console.log(error))
      },[])
    return(
        <div className="col-lg-9 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4 " style={{float:"left"}}>What i do</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <tbody>
                      <tr className="">
                        <td className="border-bottom-0"><h6 className="fw-semibold mb-0">
                        <i class="ti ti-input-search" style={{float:"left"}}></i>
                        </h6></td>
                        <td className="border-bottom-0"  style={{float:"left"}}>
                            <h6 className="fw-semibold mb-1" style={{float:"left"}}>My Field</h6>
                        </td>
                        <td className="border-bottom-0">
                            <p className="mb-0 fw-normal" style={{float:"left"}}>
                                {
                                    tag.myfield ?  tag.myfield : <i>No Field Added</i>
                                }
                            </p>
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

                      </tr>                      
                    </tbody>
                  </table>
                  <Link to="/EditTags">
                  <button className="btn btn-sm btn-primary" style={{float:"left"}}>Manage Tags</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    )
} export default WhatidoComp;