import React, { useState } from "react";
import Heart from "./heart.svg";

const BookCard = ({ book }) => {
    const [fav, setFav] = useState([]);

    const addToFav = (e) => {
        console.log(e + " added to fav");
        setFav(e);
        console.log(fav);
    }

    return (
        <div>
            {
                book.map((item, index) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    if (thumbnail != undefined) {
                        return (
                            <div className="cards_row">
                                <div className="card_back">
                                    <div className="card1" key={index}>
                                        <img src={thumbnail} alt="book cover" />
                                        <label className="title">{item.volumeInfo.title}</label>
                                        <div className="book_buttons">
                                            <label>Add to favorites</label>
                                            <img src={Heart} alt="like button" className="heart" onClick={e => addToFav(item.volumeInfo.title)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default BookCard;