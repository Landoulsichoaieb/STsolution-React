import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function ProfileForPostsComp() {
    let user = JSON.parse(localStorage.getItem('user-info') || '{}');
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [timeline, setTimeline] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [requestmeeting, setRequestmeeting] = useState([]);
    const [thetype, seThetype] = useState("Request meeting");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [getmessage, setGetmessage] = useState([]);

    useEffect(() => {
      const source = axios.CancelToken.source();
      const fetchData = async () => {
          try {
              const [timelineRes, feedbackRes] = await Promise.all([
                  axios.get(`http://localhost:8000/api/gettimelinebyid/${id}`),
                  axios.get(`http://localhost:8000/api/feedback/${id}`)
              ]);
              setTimeline(timelineRes.data);
              setFeedback(feedbackRes.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();

      const interval = setInterval(async () => {
          try {
              const getmessageRes = await axios.get(`http://localhost:8000/api/getmessage/${id}`, {
                  cancelToken: source.token
              });
              setGetmessage(getmessageRes.data);
          } catch (error) {
              if (axios.isCancel(error)) {
                  console.log('Request canceled:', error.message);
              } else {
                  console.error('Error fetching getmessage data:', error);
              }
          }
      }, 2000);

      return () => {
          clearInterval(interval);
          source.cancel('Component unmounted, canceling getmessage requests');
      };
  }, [id]);

 /*
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [timelineRes , feedbackRes , getmessageRes] = await Promise.all([
                    axios.get(`http://localhost:8000/api/gettimelinebyid/${id}`),
                    axios.get(`http://localhost:8000/api/feedback/${id}`),
                    axios.get(`http://localhost:8000/api/getmessage/${id}`)
                ]);
                setTimeline(timelineRes.data);
                setFeedback(feedbackRes.data);
                setGetmessage(getmessageRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);
    */
    const Schedule = async () => {
      let item = {id,date}
      console.warn(item)
      let result = await fetch("http://localhost:8000/api/schedule",{
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
      const requestmeet = async () => {
        let item = {id,requestmeeting,thetype}
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/requestmeet",{
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

        const sendmessage = async () => {
          const sender = user.id;
          let item = {id,sender,message}
          console.warn(item)
          let result = await fetch("http://localhost:8000/api/sendmessage",{
            method:"POST",
            body: JSON.stringify(item),
            headers:{
              "Content-Type": 'application/json',
              "Accept": 'application/json'
            }
          })
          result = await result.json()
            if(result[0] == "success"){
                  
              setMessage('');
    
            }
          }

        if((user.id !== timeline.user)&&(user.id !== timeline.company) ){
            navigate("/Home")
        }else{
return(
    <div className="card">
        <div className="card-body">
            <div className="row">
            <div className="col-12 col-md-8" style={{minHeight:700}}>
            <div className="col-12" style={{height:550,overflow: "auto"}}>
                    <h5 className="card-title fw-semibold mb-4 col-12" style={{float:"left"}}>Project Timeline</h5>
                    
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 h-100">
              <div className="card-body p-4" style={{minHeight:470}}>
                

              <ul class="timeline-widget mb-0 position-relative mb-n5">
                  { feedback.map((item)=>
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">{item.date}</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    {timeline.company == item.user && <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span> }
                    {timeline.user == item.user && <span class="timeline-badge border-2 border border-info flex-shrink-0 my-8"></span> }
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1" style={{textAlign:"left"}}>
                    <b>{item.title} :</b> {item.description}
                    {item.type == "meeting" && " for "+item.datemeeting}
                    </div>
                  </li>
                  )}
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">{timeline.date}</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1" style={{textAlign:"left"}}><b>Company</b> Launched Project timeline{timeline.message !== "" && ", And sent a message"}.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-0">
        <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100 h-100">
              <div className="card-body p-4" style={{minHeight:180}}>
              {timeline.company == user.id &&
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" style={{float: "left"}}>
                  Schedule meeting (date & time) :
                </label>
                <br/>
                <div className="col-12 px-0" style={{float:"left"}}>
                <div class="container">
                <center>
                  <input type="datetime-local" className="form-control col-8 mt-2" style={{float:"left"}} onChange={(e)=>setDate(e.target.value)} />
                </center>
                </div>
              </div>
                <button onClick={Schedule} className="btn btn-success ml-1 mt-3" style={{float:"left"}}><i className="ti ti-calendar-plus mr-2"></i>Create meeting</button>
                </div>
                }{timeline.user == user.id && 
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{float: "left"}}>
                      Add to timeline :
                    </label>
                    <br/>
                    <div className="col-12 p-0" style={{float: "left"}}>
                    <select class="form-control mb-2 p-2" onChange={(e)=>seThetype(e.target.value)}>
                      <option>Request meeting</option>
                      <option>demonstrate progress</option>
                    </select>
                    <textarea className="form-control" id="" rows="2" onChange={(e)=>setRequestmeeting(e.target.value)}></textarea>
                    <div id="" className="form-text p-0 col-12 mt-1" style={{float:"left",textAlign:"left"}}>Request meetings and demonstrate progress to the company <b>{timeline.name}</b>.</div>
                    <button onClick={requestmeet} className="btn btn-success mt-1" style={{float:"left"}}><i className="ti ti-calendar-plus mr-2"></i>Submit</button></div>
                    
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
    </div>
            <div className="col-12 col-md-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header p-1">
                        
                        <div className="col-12 mt-3" style={{height: 235, overflow: "auto"}}>
                        <p className="card-text" style={{textAlign: "left"}}>
                        { getmessage.map((item)=>
                            <div className="p-3 rounded mb-2" style={{backgroundColor:"#F3F3F3"}}>
                            <b>{item.name} :</b>
                            <p>{item.message}</p>
                            </div>
                        )}
                        {timeline.message !== "" &&
                            <div className="p-3 rounded mb-2" style={{backgroundColor:"#F3F3F3"}}>
                            <b>{timeline.name} :</b>
                            <p>{timeline.message}</p>
                            </div>
                        }
                        </p>        
                        </div>
                        </div>
                            <div className="card-body p-3">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label" style={{float:"left"}}>Send a Message</label>
                                <textarea class="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} rows="3"></textarea>
                                <div id="" class="form-text p-0 col-12 mt-1" style={{float:"left",textAlign:"left"}}>Direct contact between student and company.</div>
                                </div>
                                <button onClick={sendmessage} className="btn btn-success ml-1 mt-3" style={{float:"left"}}><i className="ti ti-send mr-2"></i>Send</button>
                            </div>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    </div>
    
)
}
}
export default ProfileForPostsComp;







