import React from 'react'

export default function Pagination({ loadNextPage, loadPrevPage }) {
    return (
        <div>
            {loadPrevPage && <button onClick={loadPrevPage}>Previous Page</button>}
            {loadNextPage && <button onClick={loadNextPage}>Next Page</button>}
        </div>
    )
}
