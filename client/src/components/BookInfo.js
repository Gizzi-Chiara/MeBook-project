import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/BookInfo.css";


const BookInfo = () => {
    const [book, setBook] = useState([]);
    const { id } = useParams();
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const date = new Date

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id, { withCredentials: true })
            .then((res) => {
                setBook(res.data)
            })
            .catch(err => console.log(err));
    }, [id, book])

    const deleteBook = (id) => {
        axios.delete("http://localhost:8000/api/books/" + id, { withCredentials: true })
            .then(res => {
                let newList = list.filter(book => book._id !== id);
                setList(newList)
                navigate("/books");
            })
            .catch(err => console.log(err));
    }

    const editbook = (id) => {
        navigate("/books/edit/" + id)
    }

    const goBack = () => {
        axios.get("http://localhost:8000/api/books", { withCredentials: true })
            .then(res => navigate("/books"))
    }

    return (
        <div className="bookinfo">
            <div className="info">
                <div className="book_left">
                    <img src={book.cover} alt="book's cover" />
                </div>
                <div className="book_right">
                    <h2>{book.title}</h2>
                    <p className="description">Book Description:</p>
                    <p className="lh-base">{book.description}</p>
                    <div className="book_details">
                        <p className="description">Page number:</p>
                        <p>{book.pages}</p>
                    </div>
                    <div className="book_details">
                        <p className="description">Author:</p>
                        <p>{book.publisher}</p>
                    </div>
                    <div className="book_details">
                        <p className="description">Publication date:</p>
                        <p>{book.year}</p>
                    </div>
                    <div className="rating_info">
                        <span className="description">Rating: </span>
                        {
                            book.rating === 1 ?
                            <span className="star">&#9733;</span>
                            : book.rating === 2 ?
                            <span className="star">&#9733;&#9733;</span>
                            : book.rating === 3 ?
                            <span className="star">&#9733;&#9733;&#9733;</span>
                            : book.rating === 4 ?
                            <span className="star">&#9733;&#9733;&#9733;&#9733;</span>
                            : book.rating === 5 ?
                            <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            : 0
                        }
                    </div>
                    <div className="bottom_btn">
                        <button onClick={goBack} className="button_info">Home</button>
                        <button onClick={() => editbook(book._id)} className="button_info">Edit book</button>
                        <button onClick={() => deleteBook(book._id)} className="button_info">Delete book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfo;