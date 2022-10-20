import React from 'react'
import { Link } from 'react-router-dom';
import Book from './Book'
import PropTypes from 'prop-types';
import { useState } from "react";
import * as BooksAPI from '../BooksAPI'


export default function SearchPage({ books, moveBook }) {

    const [showingBooks, setShowingBooks] = useState([])

    const searchBooks = async (query) => {
        if (query) {
            try {
                const apiBooks = await BooksAPI.search(query)
                console.log(apiBooks)
                console.log(query)
                //assign shelves to books already in our shelves
                let booksWithShelves = apiBooks.map(b => {
                    if (books.some(item => item.id === b.id)) {
                        b.shelf = books.find(x => x.id === b.id).shelf
                    }
                    return b
                });
                setShowingBooks(booksWithShelves && (!books.error) ? booksWithShelves : [])
            }
            catch (err) {
                setShowingBooks([])
            }
        }
        //user cleared search query
        else {
            setShowingBooks([])
        }

    }
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => searchBooks(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        showingBooks.map(book => (<Book moveBook={moveBook} key={book.id} book={book} />)
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
}