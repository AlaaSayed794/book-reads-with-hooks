import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

export default function Home({ books, moveBook }) {
    const getBooks = (filter) => books.filter(book => {
        return (book.shelf === filter)
    }).map(book => {
        return (
            <Book moveBook={moveBook} key={book.id} book={book} />
        )
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    getBooks("currentlyReading")
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    getBooks("currentlyReading")
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    getBooks("read")
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <Link className="open-search" to="/search">Add a book</Link>
            </div>
        </div>
    )
}
Home.propTypes = {
    books: PropTypes.array.isRequired
    , moveBook: PropTypes.func.isRequired
}