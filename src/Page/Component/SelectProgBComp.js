import React, { useState } from "react";

function SelectProgBComp() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const [myfield, setMyfield] = useState("Javascript");

    const programmingLanguages = [
        "Javascript", "Python", "Go", "Java", "Kotlin", "PHP", "C#", "Swift", "R", "Ruby", 
        "C and C++", "Matlab", "TypeScript", "Scala", "SQL", "HTML", "CSS", "NoSQL", "Rust", 
        "Perl", ".NET", "Assembly language", "Scratch", "Julia", "Lua", "Ada", "Dart", "Prolog"
    ];

    async function myfieldupdate() {
        let item = { myfield };
        try {
            let response = await fetch(`http://localhost:8000/api/edittag/3/${user.id}`, {
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
                <label htmlFor="exampleSelect" className="form-label m-0 p-0" style={{ float: "left" }}>Second Programming Language</label>
                <br />
                <select name="select" value={myfield} onChange={(e) => setMyfield(e.target.value)} id="exampleSelect" style={{ float: "left", position: "relative", top: 10 }} className="mt-0 p-1">
                    {programmingLanguages.map(language => <option key={language} value={language}>{language}</option>)}
                </select>
            </div>
            <br />
            <button type="button" onClick={myfieldupdate} className="btn btn-primary mt-3" style={{ float: "left" }}>Update</button>
        </form>
    );
}

export default SelectProgBComp;
