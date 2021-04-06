import React from 'react';

const Form = (props) => {
    const {
        title,
        setTitle,
        author,
        setAuthor,
        isbn,
        setIsbn,
        currentBookId,
    } = props;
    return (
        <form>
            <label for="title">title</label>
            <input
                autoFocus
                required
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <label for="author">author</label>
            <input
                required
                type="text"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            
            <label for="isbn">isbn</label>
            <input
                required
                type="text"
                name="isbn"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
            />
            <button tabIndex="0" type="submit">
                {currentBookId !== null ? 'Update' : 'Add'}
            </button>
        </form>
    )
}

export default Form;