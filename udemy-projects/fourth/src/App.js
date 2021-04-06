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
        />
        <Table
          booksList={booksList}
        />
      </div>
    </div>
  );
}

export default App;
