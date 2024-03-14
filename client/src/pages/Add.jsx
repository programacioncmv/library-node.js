import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [Book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post("http://localhost:8800/books", Book);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };    

    console.log(Book);
    return (
        <div className="form">
            <div className="header">
                <h1>Add New Book</h1>
                <div className="navigation-buttons">
                    <button onClick={() => navigate("/")}>Home</button>
                    <button onClick={() => navigate("/books")}>All Books</button>
                </div>
            </div>
            <p className="instruction">Please fill out the form below to add a new book:</p>
            <input type="text" placeholder="Title" onChange={handleChange} name="title" />
            <input type="text" placeholder="Description" onChange={handleChange} name="desc" />
            <input type="number" placeholder="Price" onChange={handleChange} name="price" />
            <input type="text" placeholder="Cover URL" onChange={handleChange} name="cover" />
            
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    );
};

export default Add;
