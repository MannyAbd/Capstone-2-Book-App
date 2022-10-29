import React from "react";

const BookSearchForm = ({
    onSubmitHandler,
    searchTerm,
    onInputChange
}) => {
    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="search"
                placeholder="Search for books"
                value={searchTerm}
                onChange={onInputChange}
                required
            />
            <button type="submit">Search</button>

        </form>
    );
};

export default BookSearchForm;