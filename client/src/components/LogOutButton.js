import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {

    const navigate = useNavigate();

    const logOut = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => navigate("/login"))
            .catch(err => console.log(err));
    }


    return(
        <button className='button_nav float-right' onClick={logOut}>Log Out</button>
    )

}

export default LogOutButton;