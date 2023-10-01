import React, { useEffect, useState } from "react";
import Heart from "./heart.svg";
import axios from "axios";
import "../components/BookCard.css";

const BookCard = ({ book }) => {
    const [fav, setFav] = useState(false);
    const [title, setTitle] = useState("Titulo por defecto");
    const [cover, setCover] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
    const description = "Add your description";
    const [pages, setPages] = useState(0);
    const [publisher, setPublisher] = useState("Add the author");
    const [year, setYear] = useState("1000-01-01");
    const [rating, setRating] = useState(1);

    useEffect(() => {
        // const addToFav = () => {
        if (fav === true) {
            axios.post("http://localhost:8000/api/books/save", {
                title,
                cover,
                description,
                pages,
                publisher,
                year,
                rating
            }, { withCredentials: true })
                .then(res => console.log(res))
                .catch(err => {
                    console.log(err)
                });
        }
        setFav(false);
        // };

    }, [fav]);

    const handleSets = (fav) => {
        if (fav.volumeInfo.hasOwnProperty("title")) {
            setTitle(fav.volumeInfo.title);
            console.log(fav.volumeInfo.title)
        }
        if (fav.volumeInfo.hasOwnProperty("imageLinks")) {
            console.log(fav.volumeInfo.imageLinks.smallThumbnail)
            setCover(fav.volumeInfo.imageLinks.smallThumbnail);
        }
        if (fav.volumeInfo.hasOwnProperty("pageCount")) {
            console.log(fav.volumeInfo.pageCount)
            setPages(fav.volumeInfo.pageCount);
        }
        if (fav.volumeInfo.hasOwnProperty("authors")) {
            console.log(fav.volumeInfo.authors[0])
            setPublisher(fav.volumeInfo.authors[0]);
        }
        if (fav.volumeInfo.hasOwnProperty("publishedDate")) {
            console.log(fav.volumeInfo.publishedDate)
            setYear(fav.volumeInfo.publishedDate);
        }
        if (fav.volumeInfo.hasOwnProperty("averageRating")) {
            console.log(fav.volumeInfo.averageRating)
            setRating(Math.floor(parseFloat(fav.volumeInfo.averageRating)));
        }
        return setFav(true);
    }

    return (
        <div className="fila">
            {
                book.map((item, index) => (
                    <div key={index} className="BookCard">
                        {item.volumeInfo.imageLinks ? <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="book cover" className="cover_fila" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="No book cover" className="cover_fila" />
                        }

                        <label className="title">{item.volumeInfo.title}</label>
                        <div className="book_buttons">
                            <label>Add to favorites</label>
                            <img src={Heart} alt="like button" className="heart"
                                onClick={
                                    e => handleSets(book.find((element, i) => i === index))
                                }
                            />
                            {/* <img src={Heart} alt="like button" className="heart" onClick={e => {
                                // book.find((element, i) => i === index)
                                
                                setFav(book.find((element, i) => i === index));
                                }} /> */}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BookCard;