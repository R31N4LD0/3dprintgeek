import React from 'react';
import TableField from './TableField';

const Table = ({booksList}) => {
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
                    <TableField settingsField />
                </div>
            ))}
        </div>
        // <table>
        //     <thead>
        //         <tr>
        //             <td>1</td>
        //             <td>2</td>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>1</td>
        //             <td>2</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default Table;