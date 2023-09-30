import React, { useState } from "react";
import axios from "axios";
import Heart from "./heart.svg";
import "../components/BookCard.css";

const BookCard = ({ book }) => {
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState();
    const [publisher, setPublisher] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState(0);

    /* const addToFav = (e) => {
        setTitle("book.volumeInfo.title");
        setCover("book.imageLinks.smallThumbnail");
        setDescription("Add your description");
        setPages("book.volumeInfo.pageCount");
        setPublisher("book.volumeInfo.authors[0]");
        setYear("book.volumeInfo.publishedDate");
        setRating("Math.floor(book.volumeInfo.averageRating");

        axios.post("http://localhost:8000/api/books/save", {
            title,
            cover,
            description: "Add your description",
            pages,
            publisher,
            year,
            rating
        }, { withCredentials: true })
            .then(res => console.log(book))
            .catch(err => {
                console.log(err)
            });
    } */

    return (
        <div className="fila">
            {
                book.map((item, index) => (
                    <div key={index} className="BookCard">
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="book cover" className="cover_fila" />
                        <label className="title">{item.volumeInfo.title}</label>
                        <div className="book_buttons">
                            <label>Add to my books</label>
                            <img src={Heart} alt="like button" className="heart" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BookCard;