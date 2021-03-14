import React, {useState} from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  const initialURL = 'https://source.unsplash.com/random/';
  const [images, setImages] = useState([
    {url: `${initialURL}1`},
    {url: `${initialURL}2`},
    {url: `${initialURL}3`},
    {url: `${initialURL}4`},
    {url: `${initialURL}5`},
    {url: `${initialURL}6`}
  ]);

  const getNewImage = () => {
    let randomImage = Math.floor(Math.random() * 100);

    setImages([...images, {
      url: `${initialURL}${randomImage}`
    }])
  }

  const removeImage = () => {
    if(images.length > 6)
      setImages(images.slice(0, -1));
  }

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card images={images}/>
      </div>
      <div className="btnContainer">
        <button onClick={removeImage}>Remove</button>
        <button onClick={getNewImage}>Add</button>
      </div>
    </section>
  );
}

export default App;
