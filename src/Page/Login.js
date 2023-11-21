import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Alert, Button, Container } from "react-bootstrap";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/Home");
        }
    }, [navigate]);

    async function logto() {
        let item = { email, password };
        try {
            let response = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify(item)
            });
            let result = await response.json();
            if (result[0] !== "error") {
                localStorage.setItem("user-info", JSON.stringify(result));
                navigate("/Home");
            } else {
                setIsVisible(true);
            }
        } catch (error) {
            console.error('Login error:', error);
            setIsVisible(true);
        }
    }

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed">
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <Link to="/" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                        <img src="../assets/images/logos/dark-logo.png" width="180" alt="" />
                                    </Link>
                                    <p className="text-center">Connect to your account</p>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <Link to="/forgot-password" className="text-primary fw-bold">Forgot Password ?</Link>
                                    </div>
                                    <Button onClick={logto} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</Button>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-bold">New Member ?</p>
                                        <Link to="/Register" className="text-primary fw-bold ms-2">Create an account</Link>
                                    </div>
                                    {isVisible && (
                                        <Container className='p-4'>
                                            <Alert variant="warning">
                                                Email or password is not matched
                                            </Alert>
                                        </Container>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
