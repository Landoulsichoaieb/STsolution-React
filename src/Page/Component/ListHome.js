import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListHome() {


  const user = JSON.parse(localStorage.getItem('user-info') || '{}');
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/getcompany");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    const fetchPosts = async () => {
      try {
        const result = await axios.get(`http://localhost:8000/api/getfollowedposts/${user.id}`);
        setPost(result.data);
      } catch (error) {
        console.error('Error fetching followed posts:', error);
      }
    };

    fetchCompanies();
    fetchPosts();
  }, [user.id]); // Fetch data only when user.id changes


  return (
    <div className="row p-5 pt-0">
      <div className="col-lg-8 d-flex align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-semibold mb-4" style={{ textAlign: "left" }}>Suggested Offers</h5>
            {post.map((item) => (
              <div key={item.id} className="card col-12 mr-4" style={{ float: "left" }}>
                <div className="card-body">
                  <h5 className="card-title mb-1" style={{ textAlign: "left" }}>
                    <img src={`http://localhost:8000/${item.fileimg}`} className="rounded-circle" style={{ width: 25, height: 25 }} alt="..." />
                    <span style={{ marginLeft: 10 }}>{item.name}</span>
                  </h5>
                  <p className="card-text mb-2" style={{ textAlign: "left" }}>{item.details}</p>
                  <p className="col-12 mb-0 fw-normal mb-2 p-0" style={{ textAlign: "left", fontSize: 14, color: "#236BB2" }}>
                    {item.myfield && ` #${item.myfield}`}
                    {item.prog1 && ` #${item.prog1}`}
                    {item.prog2 && ` #${item.prog2}`}
                    {item.frame1 && ` #${item.frame1}`}
                    {item.frame2 && ` #${item.frame2}`}
                  </p>
                  <Link to={{ pathname: "/Post", search: "?id=" + item.id }} className="btn btn-sm btn-primary" style={{ float: "left" }}>
                    Open Post
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-lg-4 d-flex align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-semibold mb-4" style={{ textAlign: "left" }}>Suggested companies</h5>
            <div className="table-responsive">
              <table className="table text-nowrap mb-0 align-middle">
                <tbody>
                  {data.map((item) => (
                     <div class="card">
                     <div class="card-body">

                        <Link to={{ pathname: "/Profileforcomp" , search: "?id=" + item.user }}>
                            <h5 class="card-title" style={{textAlign:"left"}}>
                            <img src={`http://localhost:8000/${item.fileimg}`} className="rounded-circle" style={{ width: 25, height: 25 }} alt="..." />
                            <span style={{ marginLeft: 10 }}>{item.name}</span>
                            </h5>
                        </Link>
                        <h6 className="card-subtitle mb-2 text-muted" style={{ textAlign: "left" }}>{item.field}</h6>
                        <p className="card-text" style={{ textAlign: "left" }}>{item.address}</p>
                        <Link to={{ pathname: "/ProfileFor", search: "?id=" + item.user }} className="card-link" style={{ float: "left" }}>
                          See more about
                        </Link>
                      </div>
                      </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHome;