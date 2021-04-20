import React from 'react';
import Button from '@material-ui/core/Button';

export default function Pagination({ loadNextPage, loadPrevPage, loadDivisor }) {
    return (
        <div>
            <Button
                onClick={loadDivisor}
                size="small" 
                variant="contained" 
                color="secondary">
                Divisor
            </Button>
            <Button
                onClick={loadPrevPage}
                disabled={!loadPrevPage}
                size="small" 
                variant="contained" 
                color="primary">
                Prev
            </Button>
            {loadNextPage && <Button
                onClick={loadNextPage}
                disabled={!loadNextPage}
                size="small" 
                variant="contained" 
                color="primary">
                Next
            </Button>}
        </div>
    )
}
