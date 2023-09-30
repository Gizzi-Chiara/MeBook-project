import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LogOutButton from "./LogOutButton";
import '../components/Dashboard.css';
import Trash from "./trash.png";
import Eye from "./eye-alt.svg";
import Logo from "./booklogo.png";
import BookCard from "./BookCard";
import "../App.css";

const Dashboard = () => {
    const [booksList, setBooksList] = useState(0);
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books", { withCredentials: true })
            .then(res => setList(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate("/register");
                }
            });
    }, [])

    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyCrqkBRFhEzdgj7oaGOXE83K0jyCZP3cuI" + "&maxResults=21")
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err))
        }
    }

    const deleteBook = (id) => {
        axios.delete("http://localhost:8000/api/books/" + id, { withCredentials: true })
            .then(res => {
                let newList = list.filter(book => book._id !== id);
                setList(newList);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary nav_top">
                <div class="container-fluid">
                    <img src={Logo} alt="logo" className="logo" />
                    <label class="navbar-brand">MeBook</label>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav_links" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/books">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/books/profile">My Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/books/newbook">Add new book</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/books/credits">Credits</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <LogOutButton />
                        </span>
                    </div>
                </div>
            </nav>
            <div className="background">
                <div className="dashboard">
                    <div className="books_left">
                        <div className="top_search">
                            <label>Get inspired!</label>
                            <input type="text" value={search} name="search" placeholder="Search new inspirations" onChange={e => setSearch(e.target.value)} onKeyDown={searchBook} />
                        </div>
                        <div className="left_search">
                            <div className="book_result">
                                {
                                    <BookCard book={bookData} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="books_right">
                        {
                            list.map((book, index) => (
                                <div key={index} className="book_single">
                                    <img src={book.cover} alt="book's cover" className="img-fluid images"></img>
                                    <div>
                                        <div className="book">
                                            <span>{book.title}</span>
                                            <div className="book_bottom">
                                                <Link to={`/books/${book._id}`}>
                                                    <img src={Eye} alt="see your book" className="book_cover"></img>
                                                </Link>
                                                <img src={Trash} alt="trash can" onClick={() => deleteBook(book._id)} className="trash" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;