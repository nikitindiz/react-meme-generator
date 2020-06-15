import React from 'react';
import './App.css';

import initialImage from './img/meme-initial.jpg';

function App() {
  return (
    <div className="react-meme-generator">
        <h1>I Can Has Memes?</h1>

        <div className="react-meme-generator__form">
          <input
            type="text"
            className="react-meme-generator__input"
            placeholder="Text Top"
          />

          <input
            type="text"
            className="react-meme-generator__input"
            placeholder="Text Bottom"
          />

          <br/>

          <button className="react-meme-generator__button">
            Change picture
          </button>

          <button className="react-meme-generator__button">
            Load image
          </button>

          <button className="react-meme-generator__button">
            Generate
          </button>
        </div>

        <img
          className="react-meme-generator__meme"
          src={initialImage}
          alt=""
        />
    </div>
  );
}

export default App;
