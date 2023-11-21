import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddPostComp(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const Navigate = new useNavigate();
  const [myfield,setMyfield]=useState("My field");
  const [prog1,setProg1]=useState("Programming language");
  const [prog2,setProg2]=useState("Programming language");
  const [frame1,setFrame1]=useState("Framework");
  const [frame2,setFrame2]=useState("Framework");
  const [details,setDetails]=useState("");

  async function addpost(){
    let item = {myfield,prog1,prog2,frame1,frame2,details}
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/addpost/"+user.id,{
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
        setDetails("");
        Navigate("/Profile");
      }
    }

return(
<div className="container-fluid">
<div className="card p-2 pt-3 border border-light fw-bold">
        <div className="card-title" style={{textAlign:'left'}}>
            Add Post
        </div>
    </div>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="myfield" style={{float: "left"}} class="form-label">Field</label>
                      
                      <select value={myfield} onChange={(e)=>setMyfield(e.target.value)} class="form-select" id="myfield">
                        
                      <option>My field</option><option>Web Developer</option><option>Mobile Applications Developer</option><option>Software Engineering Manager</option><option>Artificial Intelligence (AI) Engineer</option><option>Front-End Developer</option><option>Back-End Developer</option><option>Full-Stack Developer</option><option>Cloud Architect</option><option>DevOps Engineer</option><option>Big Data Engineer</option><option>Data Scientist</option><option>Database Manager</option><option>Data Security Analyst</option><option>Product Manager</option><option>Blockchain Engineer</option><option>Software Architect</option><option>Big Data Engineer</option><option>Internet of Things Solutions Architect</option><option>Cyber Security Engineer</option><option>IT Systems Security Manager</option><option>Applications Architect</option><option>Data Architect</option><option>Development Operations Manager</option><option>IT Security Specialist</option><option>Application Analyst</option><option>User Interface Designer</option><option>Application Developer</option><option>Applications Architect</option><option>Business Intelligence Analyst</option><option>Software Test Engineer</option><option>Information Technology Manager</option><option>User Experience Designer</option><option>Business Intelligence Developer</option><option>Solutions Engineer</option><option>Data Warehouse Architect</option><option>Cloud Engineer</option><option>Enterprise Architect</option><option>Computer Programmer</option><option>Computer Systems Analyst</option><option>Digital Marketing Manager</option>
                      
                      </select>
                      <label for="prog1" style={{float: "left"}} class="form-label mt-3">Programming language first option</label>
                      <select value={prog1} onChange={(e)=>setProg1(e.target.value)} class="form-select" id="prog1">
                        
                      <option>Programming language</option><option>Javascript</option><option>Python</option><option>Go</option><option>Java</option><option>Kotlin</option><option>PHP</option><option>C#</option><option>Swift</option><option>R</option><option>Ruby</option><option>C and C++</option><option>Matlab</option><option>TypeScript</option><option>Scala</option><option>SQL</option><option>HTML</option><option>CSS</option><option>NoSQL</option><option>Rust</option><option>Perl</option><option>.NET</option><option>Assembly language</option><option>Scratch</option><option>Julia</option><option>Lua</option><option>Ada</option><option>Dart</option><option>Prolog</option>

                      </select>
                      <label for="prog2" style={{float: "left"}} class="form-label mt-3">Programming language second option</label>
                      <select value={prog2} onChange={(e)=>setProg2(e.target.value)} class="form-select" id="prog2">
                      
                      <option>Programming language</option><option>Javascript</option><option>Python</option><option>Go</option><option>Java</option><option>Kotlin</option><option>PHP</option><option>C#</option><option>Swift</option><option>R</option><option>Ruby</option><option>C and C++</option><option>Matlab</option><option>TypeScript</option><option>Scala</option><option>SQL</option><option>HTML</option><option>CSS</option><option>NoSQL</option><option>Rust</option><option>Perl</option><option>.NET</option><option>Assembly language</option><option>Scratch</option><option>Julia</option><option>Lua</option><option>Ada</option><option>Dart</option><option>Prolog</option>

                      </select>
                      <label for="frame1" style={{float: "left"}} class="form-label mt-3">Framework first option</label>
                      <select value={frame1} onChange={(e)=>setFrame1(e.target.value)} class="form-select" id="frame2">
                        
                      <option>Framework</option><option>Laravel</option><option>Ruby on rails</option><option>Django</option><option>Meteor</option><option>Flask</option><option>ReactJS</option><option>Phoenix (Elixir)</option><option>Spring</option><option>PLAY</option><option>Express</option><option>TensorFlow</option><option>Symfony</option><option>Yii</option><option>CakePHP</option><option>Vue.js</option><option>Ember</option><option>Backbone</option><option>Bootstrap</option><option>Google Web Toolkit</option><option>Flutter</option><option>Polymer</option><option>Mojolicious</option><option>ASP.NET</option><option>Angular JS</option><option>Node.js</option><option>Pyramid</option>

                      </select>
                      <label for="frame2" style={{float: "left"}} class="form-label mt-3">Framework second option</label>
                      <select value={frame2} onChange={(e)=>setFrame2(e.target.value)} class="form-select" id="frame2">
                      
                      <option>Framework</option><option>Laravel</option><option>Ruby on rails</option><option>Django</option><option>Meteor</option><option>Flask</option><option>ReactJS</option><option>Phoenix (Elixir)</option><option>Spring</option><option>PLAY</option><option>Express</option><option>TensorFlow</option><option>Symfony</option><option>Yii</option><option>CakePHP</option><option>Vue.js</option><option>Ember</option><option>Backbone</option><option>Bootstrap</option><option>Google Web Toolkit</option><option>Flutter</option><option>Polymer</option><option>Mojolicious</option><option>ASP.NET</option><option>Angular JS</option><option>Node.js</option><option>Pyramid</option>

                      </select>
                      <label for="details" style={{float: "left"}} class="form-label mt-3">Post Details</label>
                      <textarea value={details} onChange={(e)=>setDetails(e.target.value)} class="form-control" rows="3" placeholder="Post Details..."></textarea>
                    </div>
                    <button type="button" onClick={addpost} className="btn btn-primary"  style={{float: "left"}}>Post</button>
                  </form>
                </div>
              </div>
</div>             
)
}
export default AddPostComp;