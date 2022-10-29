
// import Post from './Post'

// const ListPage = ({ searchResults }) => {
//     const results = searchResults.map(post => <Post key={post.id} post={post} />)
//     const content = results?.length ? results : <article><p>No match</p> </article>
//     return (
//         <main>{content}</main>
//     )
// }

// export default ListPage

// import Book from './Post'

// const ListPage = ({searchResults}) => {
//     const results = searchResults.map(book => <Book key={book.id} book={book} />)
//     // const content = results?.length ? results : <article><p>No match</p> </article>
//   return (
//     <main>{results}</main>
//   )
// }

// export default ListPage
import React from 'react';
import { Link } from "react-router-dom";



const Book = ({ book }) => {
    return (
        <li>
            <div>
                <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                <div>
                    <h3>{book.volumeInfo.title}</h3>

                    <p>{book.volumeInfo.publishedDate}</p>
                    <Link to={`/book/${book.id}`}>Show details</Link>
                </div>
            </div>
            <hr />
        </li>
    )
};

const BooksList = ({ books }) => {
    return (
        <ul>
            {
                books.items.map((book, index) => {
                    return (
                        <Book book={book} key={index} />
                    );
                })
            }
        </ul>
    );
};

export default BooksList;