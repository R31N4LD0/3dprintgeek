import React, {useState} from 'react';
import { v4 as uuidv4} from 'uuid';

import Form from './components/Form';
import Table from './components/Table';

import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [currentBookId, setCurrentBookId] = useState(null);
  const [booksList, setBooksList] = useState([{
    bookTitle: title,
    bookAuthor: author,
    bookIsbn: isbn,
    bookId: uuidv4()
  }]);

  const checkEmptyInputs = () => {
    // TODO: better way to check empty inputs
    let titleContent = title.trim();
    let authorContent = author.trim();
    let isbnContent = isbn.trim();

    return(titleContent === "", authorContent === "", isbnContent === "");
  }

  const addBook = () => {
    setBooksList([...booksList, 
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4()
      }
    ]);
  }

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    setCurrentBookId(book.bookId);
  }

  const updateBook = () => {
    setBooksList( booksList.map( (book) => book.bookId === currentBookId ? {...booksList, bookTitle: title, bookAuthor: author, bookIsbn: isbn} : book ) );

    // TODO: verify error 'Warning: Each child in a list should have a unique "key" prop.' AND duplicate items on update 2x same item
  }

  const removeBook = (id) => {
    setBooksList(booksList.filter(book => book.bookId !== id))
  }
  
  const resetForm = () => {
    // TODO: verify red border after applying this reset (Firefox)
    setTitle('');
    setAuthor('');
    setIsbn('');
    setCurrentBookId(null);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!checkEmptyInputs) return
    
    resetForm();
    !currentBookId ? addBook() : updateBook();
  }

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
        <Table
          booksList={booksList}
          editBook={editBook}
          removeBook={removeBook}
        />
      </div>
    </div>
  );
}

export default App;
