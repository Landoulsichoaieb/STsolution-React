import React, { useState } from "react";

function SelectFrameAComp() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const [myfield, setMyfield] = useState("Laravel");

    const frameworks = [
        "Laravel", "Ruby on rails", "Django", "Meteor", "Flask", 
        "ReactJS", "Phoenix (Elixir)", "Spring", "PLAY", "Express", 
        "TensorFlow", "Symfony", "Yii", "CakePHP", "Vue.js", 
        "Ember", "Backbone", "Bootstrap", "Google Web Toolkit", "Flutter", 
        "Polymer", "Mojolicious", "ASP.NET", "Angular JS", "Node.js", "Pyramid"
    ];

    async function myfieldupdate() {
        let item = { myfield };
        try {
            let response = await fetch(`http://localhost:8000/api/edittag/4/${user.id}`, {
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
                <label htmlFor="exampleSelect" className="form-label m-0 p-0" style={{ float: "left" }}>Framework</label>
                <br />
                <select name="select" value={myfield} onChange={(e) => setMyfield(e.target.value)} id="exampleSelect" style={{ float: "left", position: "relative", top: 10 }} className="mt-0 p-1">
                    {frameworks.map(framework => <option key={framework} value={framework}>{framework}</option>)}
                </select>
            </div>
            <br />
            <button type="button" onClick={myfieldupdate} className="btn btn-primary mt-3" style={{ float: "left" }}>Update</button>
        </form>
    );
}

export default SelectFrameAComp;
