import React, { useState } from "react";

function SelectFieldComp() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const [myfield, setMyfield] = useState("Web Developer");

    const fields = [
        "Web Developer", "Mobile Applications Developer", "Software Engineering Manager", 
        "Artificial Intelligence (AI) Engineer", "Front-End Developer", "Back-End Developer", 
        "Full-Stack Developer", "Cloud Architect", "DevOps Engineer", "Big Data Engineer", 
        "Data Scientist", "Database Manager", "Data Security Analyst", "Product Manager", 
        "Blockchain Engineer", "Software Architect", "Internet of Things Solutions Architect", 
        "Cyber Security Engineer", "IT Systems Security Manager", "Applications Architect", 
        "Data Architect", "Development Operations Manager", "IT Security Specialist", 
        "Application Analyst", "User Interface Designer", "Application Developer", 
        "Business Intelligence Analyst", "Software Test Engineer", "Information Technology Manager", 
        "User Experience Designer", "Business Intelligence Developer", "Solutions Engineer", 
        "Data Warehouse Architect", "Cloud Engineer", "Enterprise Architect", 
        "Computer Programmer", "Computer Systems Analyst", "Digital Marketing Manager"
    ];

    async function myfieldupdate() {
        let item = { myfield };
        try {
            let response = await fetch(`http://localhost:8000/api/edittag/1/${user.id}`, {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            let result = await response.json();
            alert(result[1]);
            if (result[0] === "success") {
                window.location.reload();
            }
        } catch (error) {
            console.error('Update error:', error);
        }
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleSelect" className="form-label m-0 p-0" style={{ float: "left" }}>Field</label>
                <br />
                <select name="select" value={myfield} onChange={(e) => setMyfield(e.target.value)} id="exampleSelect" style={{ float: "left", position: "relative", top: 10 }} className="mt-0 p-1">
                    {fields.map(field => <option key={field} value={field}>{field}</option>)}
                </select>
            </div>
            <br />
            <button type="button" onClick={myfieldupdate} className="btn btn-primary mt-3" style={{ float: "left" }}>Update</button>
        </form>
    );
}

export default SelectFieldComp;
