import { Link } from "react-router-dom";
import Logo from "./booklogo.png";
import NewBook from "./newbook.jpg";
import "../components/Credits.css";
import Info from "./book_info.jpg";
import Home from "./books-shelf.jpg";


const Credits = () => {

    return (
        <div>
            <table className="table table-hover">
                <thead className="credits">
                    <tr>
                        <th>Imagen</th>
                        <th>By</th>
                        <th>From</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={Logo} alt="book logo" className="img-fluid credits"/>
                        </td>
                        <td>
                            <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">bqlqn</a>
                        </td>
                        <td>
                            <a href="https://www.flaticon.com">Flaticon</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={NewBook} alt="new book background" className="img-fluid credits"/>
                        </td>
                        <td>
                            <a href="https://unsplash.com/@gulfergin_01?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gülfer ERGİN</a>
                        </td>
                        <td>
                            <a href="https://unsplash.com/photos/LUGuCtvlk1Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={Info} alt="book info background" className="img-fluid credits"/>
                        </td>
                        <td>
                            <a href="https://www.freepik.com/free-photo/book-library-with-open-textbook_3737798.htm#query=books&position=27&from_view=search&track=sph">jcomp</a>
                        </td>
                        <td>
                            <a href="https://www.freepik.com/author/jcomp">Freepik</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={Home} alt="book info background" className="img-fluid credits"/>
                        </td>
                        <td>
                            <a href="https://www.freepik.com/free-photo/books-shelf_18422156.htm#query=bookshelf&position=3&from_view=search&track=sph">rawpixel.com</a>
                        </td>
                        <td>
                            <a href="https://www.freepik.com/author/rawpixel-com">Freepik</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Credits;