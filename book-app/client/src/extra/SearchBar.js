
// const SearchBar = ({posts, setSearchResults}) => {
//     const handleSubmit = (e) => e.preventDefault()
//     const handleSearchChange = (e) => {
//         if (!e.target.value) return setSearchResults(posts)
//         const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
//         setSearchResults(resultsArray)
//     }

//   return (
//       <header>
//           <form className="search" onSubmit={handleSubmit}>
//               <input
//                   className="search__input"
//                   type="text"
//                   id="search"
//                   onChange={handleSearchChange}
//               />
//               <button className="search__button">
//                   enter
//               </button>
//           </form>
//       </header>
//   )
// }


// // const SearchBar = ({ books, setSearchResults }) => {
// //     const handleSubmit = (e) => e.preventDefault()
// //     const handleSearchChange = (e) => {
// //         if (!e.target.value) return setSearchResults(books)
// //         const resultsArray = books.filter(book => book.title.includes(e.target.value) || book.body.includes(e.target.value))
// //         setSearchResults(resultsArray)
// //     }

// //     return (
// //         <header>
// //             <form className="search" onSubmit={handleSubmit}>
// //                 <input
// //                     className="search__input"
// //                     type="text"
// //                     id="search"
// //                     onChange={handleSearchChange}
// //                 />
// //                 <button className="search__button">
// //                     enter
// //                 </button>
// //             </form>
// //         </header>
// //     )
// // }
import React, { useState } from "react";

function SearchBar(props) {
    const [searchValue, setSearchVal] = useState("");

    function handleSearch(e) {
        setSearchVal(e.target.val);
    }
    
    const resetInputField = () => {
        setSearchVal("")
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       props.search(searchValue)
       resetInputField()
    }
    
    
    return (
        <div className="center">
            {/* <input
                className="input-field"
                type="text"
                value={term}
                placeholder="Enter the book name"
                onChange={handleSearch}
            ></input> */}
            <form className="search">
                <input 
                    className="input-field"
                    type="text"
                    value={searchValue}
                    placeholder="Enter the book name"
                    onChange={handleSearch}
                     />
                     <button onClick={handleSubmit} value="search">enter</button>
            </form>
        </div>
    );
}




export default SearchBar