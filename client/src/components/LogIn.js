import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginImage from "./login1.jpg";
import "../components/LogIn.css";

const LogIn = () => {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const navigate = useNavigate();
    const [errorsLogin, setErrorsLogin] = useState("");

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        }, { withCredentials: true })
            .then(res => {
                console.log(res);

                if (res.data.error) {
                    setErrorsLogin(res.data.message);
                } else {
                    navigate("/books");
                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className="background_login">
            <div className="front_login">
                <div>
                    <img src={LoginImage} alt="bookshelf" className="imagen_login"></img>
                </div>
                <form onSubmit={login} className="login">
                    <h2>Welcome to MeBook!</h2>
                    <div className="form-group">
                        <label htmlFor="emailLogin">E-mail</label>
                        <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordLogin">Password</label>
                        <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} placeholder="Enter your password"/>
                    </div>
                    <div>
                        {errorsLogin !== "" ? <span className="error">{errorsLogin}</span> : null}
                    </div>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <h3>Not a member yet?</h3>
                    </Link>
                    <input type="submit" value="Log In" className="button" />
                </form>
            </div>
        </div>
    )

}

export default LogIn;