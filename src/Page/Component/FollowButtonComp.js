import React, { useEffect, useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function FollowButtonComp() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [companyid, setCompanyid] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getuser/${id}`)
            .then(result => setCompanyid(result.data.id))
            .catch(error => console.error('Error fetching user:', error));
    }, [id]);

    const followcomp = useCallback(async () => {
        if (companyid) {
            try {
                const response = await fetch(`http://localhost:8000/api/followcomp/${user.id}`, {
                    method: "POST",
                    body: JSON.stringify({ companyid }),
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json'
                    }
                });

                const result = await response.json();
                alert(result[1]);

                if (result[0] === "success") {
                    window.location.reload();
                }
            } catch (error) {
                console.error('Error in follow:', error);
            }
        }
    }, [companyid, user.id]);

    return (
        <Button onClick={followcomp} className="btn btn-primary">Follow</Button>
    );
}

export default FollowButtonComp;