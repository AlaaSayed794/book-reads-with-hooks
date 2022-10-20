import React from 'react'
import PropTypes from 'prop-types';

export default function Book({ book, moveBook }) {
    const onChange = (e) => {
        moveBook(book, e.target.value)
    }
    let authors = ""
    try {
        authors = book.authors.join(",").replace(/(^,)|(,$)/g, "")
    } catch {
        authors = ""
    }
    let url = ""
    try {
        url = book.imageLinks.thumbnail
    }
    catch {
        url = ""
    }
    return (
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${url})` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf ? book.shelf : "none"} onChange={onChange}>
                            <option value="move" disabled >Move to...</option>
                            <option disabled={book.shelf === "currentlyReading"} value="currentlyReading">Currently Reading</option>
                            <option disabled={book.shelf === "wantToRead"} value="wantToRead">Want to Read</option>
                            <option disabled={book.shelf === "read"} value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
    , moveBook: PropTypes.func.isRequired
}