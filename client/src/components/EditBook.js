import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../components/EditBook.css";

const EditBook = () => {
    const [book, setBook] = useState([]);
    const { id } = useParams();
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

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id, { withCredentials: true })
            .then(res => {
                setTitle(res.data.title)
                setCover(res.data.cover)
                setDescription(res.data.description)
                setPages(res.data.pages)
                setPublisher(res.data.publisher)
                setYear(res.data.year)
                setRating(res.data.rating)
            })
            .catch(err => console.log(err));
    }, [id])

    const updateBook = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/books/edit/" + id, {
            title,
            cover,
            description,
            pages,
            year,
            publisher,
            rating
        }, { withCredentials: true })
            .then(res => navigate("/books/" + id))
            .catch(err => setErrors(err.response.data.errors));
    }

    const cancel = (id) => {
        axios.get("http://localhost:8000/api/books/" + id, { withCredentials: true })
            .then(res => navigate("/books/" + id))
    }

    return (
        <div className="edit_book">
            <div className="edit_center">
                <form onSubmit={updateBook} className="edit">
                    <h3>Edit Your Book</h3>
                    <div className="edit_book1">
                        <div className="left">
                            <div>
                                <label>Title:</label>
                                <input type="text" name="title" value={title} className="form-control" onChange={e => setTitle(e.target.value)} placeholder="Edit title" />
                                {errors.title ? <p className="error_edit">{errors.title.message}</p> : null}
                            </div>
                            <div>
                                <label>Cover:</label>
                                <input type="text" name="cover" value={cover} className="form-control" onChange={e => setCover(e.target.value)} placeholder="Edit cover" />
                                {errors.cover ? <p className="error_edit">{errors.cover.message}</p> : null}
                            </div>
                            <div>
                                <label>Description:</label>
                                <textarea type="text" rows="3" cols="30" name="description" value={description} className="form-control" onChange={e => setDescription(e.target.value)} placeholder="Edit description" />
                                {errors.description ? <p className="error_edit">{errors.description.message}</p> : null}
                            </div>
                        </div>
                        <div className="right">
                            <div>
                                <label>Page Number:</label>
                                <input type="number" name="pages" value={pages} className="form-control" onChange={e => setPages(e.target.value)} />
                                {errors.pages ? <p className="error_edit">{errors.pages.message}</p> : null}
                            </div>
                            <div>
                                <label>Author:</label>
                                <input type="text" name="publisher" value={publisher} className="form-control" onChange={e => setPublisher(e.target.value)} placeholder="Add author's name" />
                                {errors.publisher ? <p className="error_edit">{errors.publisher.message}</p> : null}
                            </div>
                            <div>
                                <label>Publication date:</label>
                                <input type="date" name="year" value={year} className="form-control" onChange={e => setYear(e.target.value)} />
                                {errors.year ? <p className="error_edit">{errors.year.message}</p> : null}
                            </div>
                            <div>
                                <label className="newbook_rating">New Rating:</label>
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
                                {errors.rating ? <p className="error_edit">{errors.rating.message}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className="button_new">
                        <input type="submit" value="Save Changes" className="button_info" />
                        {/*<button onClick={() => cancel(book._id)} className="button_info">Return to book's details</button>*/}
                    </div>
                </form >
            </div>
        </div>
    )
}

export default EditBook;