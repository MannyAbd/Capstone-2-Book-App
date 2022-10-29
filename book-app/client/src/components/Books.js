import React, { useState } from 'react';
import Book from './Book';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    const [books, setBooks] = useState({ items: [] });
    const fetchBooks = async () => {
        const result = await axios.get(`${API_URL}?q=${searchTerm}`);
        setBooks(result.data);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetchBooks();
    }
    //bookAuthors function found from webpage: https://learnwithparam.com/blog/learn-react-hooks-by-building-books-search/
    const bookAuthors = authors => {
        if (authors.length <= 2) {
            authors = authors.join(' and ');
        } else if (authors.length > 2) {
            let lastAuthor = ' and ' + authors.slice(-1);
            authors.pop();
            authors = authors.join(', ');
            authors += lastAuthor;
        }
        return authors;
    };

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <label>
                    <span>Search for books</span>
                    <input
                        type="search"
                        placeholder="microservice, restful design, etc.,"
                        value={searchTerm}
                        onChange={onInputChange}
                    />
                    <button type="submit">Search</button>
                </label>
            </form>
            <ul>
                {
                    books.items.map((book, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <Link to={`/books/${book.id}`} {...book}>
                                        <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                                        <h3>{book.volumeInfo.title}</h3>
                                        {/* <Book book = {book} /> */}
                                    </Link>
                                    
                                        <p>{bookAuthors(book.volumeInfo.authors)}</p>
                                        <p>{book.volumeInfo.publishedDate}</p>
                                </div>

                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default Books