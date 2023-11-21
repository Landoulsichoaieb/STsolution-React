import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TopProfile() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  const [data, setData] = useState({ records: [], desc: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imgResponse, descResponse] = await Promise.all([
          axios.get(`http://localhost:8000/api/getimg/${user.id}`),
          axios.get(`http://localhost:8000/api/getdesc/${user.id}`)
        ]);

        setData({
          records: imgResponse.data,
          desc: descResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user.id]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-body col-12 col-md-9 col-sm-9" style={{ float: "left" }}>
          <img src={`http://localhost:8000/${data.records}`} className="col-3 col-md-3 col-sm-3 rounded-circle" style={{ float: "left" }} alt="Profile" />
          <div className="col-8 col-md-7 col-sm-6" style={{ float: 'left', marginLeft: 20 }}>
            <h5 className="card-title" style={{ textAlign: "left" }}>{user?.name}</h5>
            <p className="card-text" style={{ textAlign: "left" }}>{data.desc}</p>
            <Link to="/EditDescription" className="card-link" style={{ float: "left" }}>Edit Description</Link>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-3 mt-4" style={{ float: "right" }}>
          <Link to="/EditProfile" className="btn btn-primary">Edit Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default TopProfile;