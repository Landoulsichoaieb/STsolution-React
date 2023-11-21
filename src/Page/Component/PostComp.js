import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

function PostComp() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [data, setData] = useState({ post: null, countint: 0, timeline: null });

  const fetchData = useCallback(async () => {
    try {
      const [postResponse, countintResponse, timelineResponse] = await Promise.all([
        axios.get(`http://localhost:8000/api/getbypost/${id}`),
        axios.get(`http://localhost:8000/api/countinter/${id}`),
        axios.get(`http://localhost:8000/api/gettimeline/${user.id}/${id}`)
      ]);

      setData({
        post: postResponse.data,
        countint: countintResponse.data,
        timeline: timelineResponse.data
      });
    } catch (error) {
      console.log(error);
      
    }
  }, [id, user.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const interrested = async () => {
    try {
      const item = { postid: id };
      const response = await fetch(`http://localhost:8000/api/interrested/${user.id}`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });
      const result = await response.json();
      alert(result[1]);
      if (result[0] === "success") {
        fetchData();
      }
    } catch (error) {
      console.error(error);

    }
  };

  const { post, countint, timeline } = data;

  if (!post) {
    return <div>Loading...</div>; 
  }

return(


<div className="container-fluid">

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 mx-3 border-bottom border-light" style={{textAlign:"left"}}>
        <Link to={{
            pathname: "/Profileforcomp",
            search: "?id="+post.user, 
        }}>
        <img src={`http://localhost:8000/${post.fileimg}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{float:"left",width:40,height:40,padding:0}} alt="..."/>
        <span style={{marginLeft:10,lineHeight:2}}>
            {post.name}
        </span>
        </Link>
        
        <span className="" style={{float:"right",fontSize:18,fontFamily:"calibri",color:"#386c91",lineHeight:2}}>
            <span className="badge badge-info fw-bold" style={{fontSize:16}}>{countint}</span> interrested
            </span>
        </div>
        <div className="card-dody  mt-2 mb-2" style={{textAlign:'left'}}>
        <div className="col-8 col-md-7" style={{float:"left"}}>
        {post.details}
        </div>
        <button type="button" onClick={interrested} class="btn btn-primary  m-0 pt-1 pb-1" style={{float:"right"}}><i class="ti ti-arrow-up-right mr-2"></i>interrested</button>
        </div>
        <div className="card-header mt-3 fw-bold text-primary" style={{textAlign:"left"}}>
                        {
                            post.myfield ? " #"+post.myfield : <i></i>
                        }{
                            post.prog1 ? " #"+post.prog1 : <i></i>
                        }{
                            post.prog2 ? " #"+post.prog2 : <i></i>
                        }{
                            post.frame1 ? " #"+post.frame1 : <i></i>
                        }{
                            post.frame2 ? " #"+post.frame2 : <i></i>
                        }
        {timeline && 
        <Link to={{
            pathname: "/projecttimeline",
            search: "?id="+timeline.id,
            }}>
            <button className="btn btn-sm btn-success" style={{float:"right"}}><i className="ti ti-clipboard-list mr-2"></i>Project Timeline</button>
        </Link>
        }
        </div>
    </div>

</div>             
)
}
export default PostComp;