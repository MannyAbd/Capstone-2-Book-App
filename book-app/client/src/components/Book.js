// import React from "react";
// import img from './NotFound.png'

// const Book = ({ book }) => {
//   const covers =
//     book.Covers === "N/A" ? img : book.Covers;
//   return (
//     <div className="book">
//       <h2>{book.Title}</h2>
//       <div>
//         <img
//           width="200"
//           alt={`The book titled: ${book.Title}`}
//           src={covers}
//         />
//       </div>
//       <p>({book.Year})</p>
//     </div>
//   );
// };

// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// // import Books from './Books';
// import NotFound from './NotFound.png'

// let URL = `https://www.googleapis.com/books/v1/volumes`;

// function Book() {
//   const {bookId} = useParams()
//   const [book, setBook] = useState(null);
//   const navigate = useNavigate();
//   // const book = Books.find(book => book.title === bookId)

//   useEffect(() => {
    
//     async function getBookDetails() {
//       try {
//         const response = await fetch(`${URL}${bookId}.json`);
//         const data = await response.json();
//         console.log(data);

//         if (data) {
//           const { description, title, isbn,  } = data;
//           const newBook = {
//             description: description ? description.value : "No description found",
//             title: title,
//             cover_img: isbn ? `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}` : NotFound
//           };
//           setBook(newBook);
//         } else {
//           setBook(null);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getBookDetails();
//   }, [bookId]);

//   const bookAuthors = authors => {
//     if (authors.length <= 2) {
//       authors = authors.join(' and ');
//     } else if (authors.length > 2) {
//       let lastAuthor = ' and ' + authors.slice(-1);
//       authors.pop();
//       authors = authors.join(', ');
//       authors += lastAuthor;
//     }
//     return authors;
//   };
//   return (
//     <>
//       {/* <h1>
//         {book.title}
//       </h1>
//       {book.content.map(summary =>(
//         <p>{summary}</p>
//       ))} */}
//       <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
      
//         <h3>{book.volumeInfo.title}</h3>
//         <p>{bookAuthors(book.volumeInfo.authors)}</p>
//         <p>{book.volumeInfo.publishedDate}</p>
//       <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}></button>
//     </>
//   )
// }

// export default Book
import React from 'react';
import { Link } from 'react-router-dom';


const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/books/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>
      </div>
    </div>
  )
}

export default Book