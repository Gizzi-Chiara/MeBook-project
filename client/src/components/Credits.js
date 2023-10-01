import { Link } from "react-router-dom";
import Logo from "./booklogo.png";
import NewBook from "../components/newbook1.jpg";
import "../components/Credits.css";
import Info from "./infobook.jpg";
import Home from "./background2.jpg";
import LogoLogIn from "./login1.jpg";
import Delete from "./trash.png";
import Edit from "./editbook.jpg";
import Eye from "./eye-alt.svg";


const Credits = () => {

    return (
        <div className="credits_all">
            <div className="background_credits">
                <div className="title_credits">
                    <h2>Credits</h2>
                    <Link to="http://localhost:3000/books" className="home_credits">Home</Link>
                </div>
                <table className="table-light table1">
                    <thead className="credits">
                        <tr className="rows">
                            <th>Imagen</th>
                            <th>By</th>
                            <th>From</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr className="rows">
                            <td>
                                <img src={LogoLogIn} alt="login background" className="img-fluid credits2" />
                            </td>
                            <td>
                                <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23974710.htm#from_view=detail_serie">Freepik</a>
                            </td>
                            <td>
                                <a href="https://www.freepik.com">Freepik</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={Home} alt="home background" className="img-fluid credits2" />
                            </td>
                            <td>
                                <a href="https://unsplash.com/@caleb_woods?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Caleb Woods</a>
                            </td>
                            <td>
                                <a href="https://unsplash.com/photos/fulXJYIvRi8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={NewBook} alt="new book background" className="img-fluid credits2" />
                            </td>
                            <td>
                                <a href="https://unsplash.com/@rey_7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rey Seven</a>
                            </td>
                            <td>
                                <a href="https://unsplash.com/photos/_nm_mZ4Cs2I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={Info} alt="book info background" className="img-fluid credits2" />
                            </td>
                            <td>
                                <a href="https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clay Banks</a>
                            </td>
                            <td>
                                <a href="https://unsplash.com/photos/z_DkoUqgx6M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={Edit} alt="edit background" className="img-fluid credits2" />
                            </td>
                            <td>
                                <a href="https://unsplash.com/@jaredd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jaredd Craig</a>
                            </td>
                            <td>
                                <a href="https://unsplash.com/photos/HH4WBGNyltc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={Logo} alt="book logo" className="img-fluid credits1" />
                            </td>
                            <td>
                                <a href="https://www.flaticon.com/free-icons/books" title="books icons">Freepik</a>
                            </td>
                            <td>
                                <a href="https://www.flaticon.com">Flaticon</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={Delete} alt="trash can" className="img-fluid credits1" />
                            </td>
                            <td>
                                <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Freepik</a>
                            </td>
                            <td>
                                <a href="https://www.flaticon.com">Flaticon</a>
                            </td>
                        </tr>
                        <tr className="rows">
                            <td>
                                <img src={Eye} alt="see icon" className="img-fluid credits1" />
                            </td>
                            <td>
                                <a href="https://www.flaticon.com/free-icons/eye">Freepik</a>
                            </td>
                            <td>
                                <a href="https://www.flaticon.com">Flaticon</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Credits;