import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RoleSection from "./RoleSection";

function TopHome() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user-info')));
  const [records, setRecords] = useState([]);
  const [role, setRole] = useState(false);
  const [desc, setDesc] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      axios.get(`http://localhost:8000/api/getimg/${user.id}`)
        .then(res => {
          setRecords(res.data);
          setIsDataFetched(true);
        })
        .catch(err => console.error('Error fetching images:', err));
    }
  }, [user.id, isDataFetched]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getrole/"+user.id)
    .then(result => {setRole(result.data)})
    .catch(error => console.log(error))
  },[])
  useEffect(() => {
    console.warn(role);
  if(role == "false"){
    setRole(role => !role);
  }
},[])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getdesc/${user.id}`)
      .then(result => setDesc(result.data))
      .catch(error => console.error('Error fetching description:', error));
  }, [user.id]);

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <div className="card-body col-12 col-md-9 col-sm-9" style={{ float: "left" }}>
            <img src={`http://localhost:8000/${records}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{ float: "left" }} alt="Profile" />
            <div className="col-8 col-md-7 col-sm-6" style={{ float: 'left', marginLeft: 20 }}>
              <h5 className="card-title" style={{ textAlign: "left" }}>{user?.name}</h5>
              <p className="card-text" style={{ textAlign: "left" }}>{desc}</p>
              <p className="card-text text-primary" style={{ textAlign: "left" }}>{user?.email}</p>
            </div>
          </div>
          <div className="col-12 col-md-3 col-sm-3 mt-4" style={{ float: "right" }}>
            <Link to="/Search" className="btn btn-primary col-8">Search Page</Link>
            <Link to="/Editprofile" className="btn btn-dark col-8 mt-2">Update Profile</Link>
          </div>
        </div>
      </div>
      {role && <RoleSection />}
    </div>
  );
}

export default TopHome;