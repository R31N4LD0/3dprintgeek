import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroupIcon from '@material-ui/core/ButtonGroup';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

export default function Pagination({ loadNextPage, loadPrevPage, loadDivisor }) {
    return (
        <>
            <ButtonGroupIcon>
                <Button
                    startIcon={<CallSplitIcon />}
                    endIcon={<FingerprintIcon />}
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
            </ButtonGroupIcon>
        </>
    )
}
