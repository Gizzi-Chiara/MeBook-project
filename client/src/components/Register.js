import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [favorite, setFavorite] = useState("");
    const [birthday, setBirthday] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        console.log("Entró a register")
        axios.post("http://localhost:8000/api/register", {
            firstName,
            email,
            password,
            confirmPassword,
            favorite,
            birthday
        }, { withCredentials: true })
            .then(res => {
                navigate("/login");
            })
            .catch(err => {
                if(err.response.status === 401) {
                    navigate("/register")
                } else {
                    setErrors(err.response.data.errors)
                }
            });
    }

    return (
        <div className="register_login">
            <div className="register">
                <form onSubmit={register} className="form_register">
                    <h2>Become a member of MeBook!</h2>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <h3>Already registered?</h3>
                    </Link>
                    <div>
                        <label htmlFor="firstName">Name</label>
                        <input type="text" name="firstName" id="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
                        {errors.firstName ? <span className="error">{errors.firstName.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                        {errors.email ? <span className="error">{errors.email.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                        {errors.password ? <span className="error">{errors.password.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
                        {errors.confirmPassword ? <span className="error">{errors.confirmPassword.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="favorite">What's your favorite book?</label>
                        <input type="text" name="favorite" id="favorite" className="form-control" value={favorite} onChange={(e) => setFavorite(e.target.value)} placeholder="Insert your favorite book" />
                        {errors.favorite ? <span className="error">{errors.favorite.message}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="birthday">Enter your birthday</label>
                        <input type="date" name="birthday" id="birthday" className="form-control" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                        {errors.birthday ? <span className="error">{errors.birthday.message}</span> : null}
                    </div>
                    <input type="submit" value="Register" className="button"/>
                </form>
            </div>
        </div>
    )
}

export default Register;