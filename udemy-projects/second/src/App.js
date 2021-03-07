import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const firstRender = useRef(true);

  const addTodo = (e) => {
    e.preventDefault();

    if(inputValue.trim() !== "") {
      setTodos([...todos, {
        text: inputValue,
        id: uuidv4()
      }]);
    }

    setInputValue("");
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem("Todos", JSON.stringify([...todos]));
      document.getElementsByName('insertNewItem')[0].focus();
    }
  }, [todos]);

  useEffect(() => {
    if(localStorage.getItem("Todos") !== null) {
      const newTodos = localStorage.getItem("Todos");
      setTodos(JSON.parse([...todos, newTodos]));
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo}>
          <input 
            autoFocus
            name="insertNewItem"
            type="text"
            placeholder="Add new item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {todos.map(todo => (
          <div key={todo.id} className="todo">
            <p>{todo.text}</p>
            <i 
              className="fas fa-trash-alt"
              onClick={() => removeTodo(todo.id)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
