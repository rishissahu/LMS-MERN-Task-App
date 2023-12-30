import React, { useEffect, useState } from "react";
import "./Allbooks.css";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

function Allbooks() {

  const [books, setBooks] = useState([]);

  useEffect(async () => {
    console.log("first")
    const response = await axios.get(API_URL + "api/books/allbooks")
    setBooks(response.data)
  }, [])

  console.log("books", books)

  return (
    <div className="books-page">
      <div className="books">

        {books?.map((book) => (
          <div className="book-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
              alt=""
            ></img>
            <p className="bookcard-title">{book?.bookName}</p>
            <p className="bookcard-author">By {book?.author}</p>
            <div className="bookcard-category">
              <p>{book?.categories[0]?.categoryName}</p>
            </div>
            <div className="bookcard-emptybox"> </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allbooks;
