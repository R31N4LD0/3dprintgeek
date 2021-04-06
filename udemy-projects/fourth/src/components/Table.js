import React from 'react';
import TableField from './TableField';

const Table = ({booksList, removeBook, editBook}) => {
    return (
        <div className="table">
            <div className="tableHeading">
                <TableField fieldName='Title' />
                <TableField fieldName='Author' />
                <TableField fieldName='ISBN' />
                <TableField fieldName='Settings' />
            </div>
            {booksList.map((book) => (
                <div className="tableRow" key={book.bookId}>
                    <TableField fieldName={book.bookTitle} />
                    <TableField fieldName={book.bookAuthor} />
                    <TableField fieldName={book.bookIsbn} />
                    <TableField 
                        settingsField
                        editBook={() => editBook(book)}
                        removeBook={() => removeBook(book.bookId)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Table;