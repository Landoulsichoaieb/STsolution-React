import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function PostManageComp() {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info') || '{}');
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [post, setPost] = useState([]);
    const [countint, setCountint] = useState([]);
    const [userinter, setUserinter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postRes, countRes, userRes] = await Promise.all([
                    axios.get(`http://localhost:8000/api/getbypost/${id}`),
                    axios.get(`http://localhost:8000/api/countinter/${id}`),
                    axios.get(`http://localhost:8000/api/getinterrested/${id}`)
                ]);
                setPost(postRes.data);
                setCountint(countRes.data);
                setUserinter(userRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const delpost = async () => {
        let postid = id;
        let item = {postid}
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/delpost/"+user.id,{
          method:"POST",
          body: JSON.stringify(item),
          headers:{
            "Content-Type": 'application/json',
            "Accept": 'application/json'
          }
        })
        result = await result.json()
          alert(result[1]);    
          if(result[0] == "Success"){
            navigate('/Profile');
          }
        }

return(


<div className="container-fluid">

    <div className="card p-3 pt-3 fs-4">
        <div className="card-title fw-bold fs-5 pb-2 border-3 mx-3 border-bottom border-light" style={{textAlign:"left"}}>
        <Link to={{
            pathname: "/Profilefor",
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
        <button type="button" onClick={delpost} class="btn btn-dark  m-0 pt-1 pb-1" style={{float:"right"}}><i class="ti ti-x mr-2 mt-1"></i>Delete</button>
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
        </div>
    </div>
    <h5 class="card-title fw-semibold mb-4 p-4 bg-light" style={{textAlign:"left"}}>Interrested ({countint})</h5>
    { userinter.map((item)=>
    <div class="card p-2 col-6 col-sm-4 col-md-3 col-lg-3 shadow-none" style={{float:"left"}}>
        
        <div class="card-body border border-1 shadow rounded py-4">
        <img src={`http://localhost:8000/${item.fileimg}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{float:"left",width:25,height:25,padding:0}} alt="..."/>
        <Link to={{
            pathname: "/ProfileFor",
            search: "?id="+item.id, 
            }}>
        {item.name.length > 20 ? (
          <>
            {item.name.substring(0, 20)}...
          </>
        ) : (
          item.name
        )}
        </Link>
        <div className="card-header mt-3" style={{height:50}}>
        <span className="fw-bold" style={{float:"left"}}>Curriculum vitae</span>
        {
          item.cv ? <img src={`http://localhost:8000/storage/profileimg/accept.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/> : <i><img src={`http://localhost:8000/storage/profileimg/notyet.png`} style={{float:"right",marginTop:1,opacity:0.8,width:18,height:18,padding:0}} alt="..."/></i>
        }
        </div>
        <div className="card-header mt-3">
        <Link to={{
            pathname: "/ProfileFor",
            search: "?id="+item.id, 
            }}>
        <button className="btn btn-sm btn-secondary col-8 mt-1">Open Profile</button>
        </Link>
        <Link to={{
            pathname: "/Analysis",
            search: "?id="+item.id+"&post="+id, 
            }}>
        <button className="btn btn-sm btn-success col-8 mt-1">Analysis</button>
        </Link>
        </div>
        </div>
        
        
    </div>
    )}
</div>             
)
}
export default PostManageComp;