import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const NewBook = () => {
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState();
    const [publisher, setPublisher] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const saveBook = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/books/save", {
            title,
            cover,
            description,
            pages,
            publisher,
            year,
            rating
        }, { withCredentials: true })
            .then(res => navigate("/books"))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate("/register")
                } else {
                    setErrors(err.response.data.errors)
                }
            });
    }

    return (
        <div className="newbook">
            <form onSubmit={saveBook} className="newbook_form">
                <h3>Add New Book</h3>
                <div className="edit_book1">
                    <div className="left">
                        <div>
                            <label>Title:</label>
                            <input type="text" name="title" value={title} className="form-control" onChange={e => setTitle(e.target.value)} placeholder="Insert the title" />
                            {errors.title ? <p className="error">{errors.title.message}</p> : null}
                        </div>
                        <div>
                            <label>Cover:</label>
                            <input type="text" name="cover" value={cover} className="form-control" onChange={e => setCover(e.target.value)} placeholder="Paste the link of your cover" />
                            {errors.cover ? <p className="error">{errors.cover.message}</p> : null}
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea type="text" rows="3" cols="30" name="description" value={description} className="form-control" onChange={e => setDescription(e.target.value)} placeholder="Add a description" />
                            {errors.description ? <p className="error">{errors.description.message}</p> : null}
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <label>Pages:</label>
                            <input type="number" name="pages" value={pages} className="form-control" onChange={e => setPages(e.target.value)} />
                            {errors.pages ? <p className="error">{errors.pages.message}</p> : null}
                        </div>
                        <div>
                            <label>Author:</label>
                            <input type="text" name="publisher" value={publisher} className="form-control" onChange={e => setPublisher(e.target.value)} placeholder="Add author's name" />
                            {errors.publisher ? <p className="error">{errors.publisher.message}</p> : null}
                        </div>
                        <div>
                            <label>Publication date:</label>
                            <input type="date" name="year" value={year} className="form-control" onChange={e => setYear(e.target.value)} />
                            {errors.year ? <p className="error">{errors.year.message}</p> : null}
                        </div>
                        <div>
                            <label className="newbook_rating">Rate your book</label>
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={index <= (hover || rating) ? "on" : "off"}
                                        onClick={() => setRating(index)}
                                        onMouseEnter={() => setHover(index)}
                                        onMouseLeave={() => setHover(rating)}
                                        value={rating}
                                        name="rating"
                                    >
                                        <span className="star">&#9733;</span>
                                    </button>
                                );
                            })}
                            {errors.rating ? <p className="error">{errors.rating.message}</p> : null}
                        </div>
                    </div>
                </div>
                <div className="button_new">
                    <input type="submit" value="Add Book" className="button" />
                    <Link to="/books">
                        <button className="button">Back to Dashboard</button>
                    </Link>
                </div>
            </form >
        </div>
    )
}

export default NewBook;