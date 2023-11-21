import React, {useEffect,useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
function PostsCompanyForComp(){
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const [post,setPost] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/getmyposts/"+id)
        .then(result => {setPost(result.data)})
        .catch(error => console.log(error))
      },[])
    return(
        <div className="col-9">
            { post.map((item)=>
            <div class="card col-12">
                        <div className="card-header mt-3 fw-bold text-primary" style={{textAlign:"left"}}>
                        {
                            item.myfield ? " #"+item.myfield : <i></i>
                        }{
                            item.prog1 ? " #"+item.prog1 : <i></i>
                        }{
                            item.prog2 ? " #"+item.prog2 : <i></i>
                        }{
                            item.frame1 ? " #"+item.frame1 : <i></i>
                        }{
                            item.frame2 ? " #"+item.frame2 : <i></i>
                        }
                        <Link to={{
                            pathname: "/Post",
                            search: "?id="+item.id, 
                         }}>
                        <button className="btn btn-sm btn-success" style={{float:"right"}}>Open</button>
                        </Link>
                        </div>
                        <div className="card-header fw-bold fw-bold px-3 py-2" style={{textAlign:"left",background:"#f6f6f6"}}>
                        {
                            item.postdate
                        }
                        </div>
                        <div class="card-body px-1 py-3">
                        <p class="card-text" style={{textAlign:"left",fontSize:15}}>{item.details}</p>
                        </div>
                    </div>
            )}
            </div>
    )
} export default PostsCompanyForComp;