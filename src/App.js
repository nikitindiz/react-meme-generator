import React from 'react';
import './App.css';

import initialImage from './img/meme-initial.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: '',
      bottomText: '',
      memeImage: initialImage,
    };
  }

  render() {
    const { topText, bottomText, memeImage } = this.state;

    return (
      <div className="react-meme-generator">
          <h1>I Can Has Memes?</h1>

          <div className="react-meme-generator__form">
            <input
              value={topText}
              onChange={(event) => {
                this.setState({ topText: event.target.value })
              }}
              type="text"
              className="react-meme-generator__input"
              placeholder="Text Top"
            />

            <input
              value={bottomText}
              onChange={(event) => {
                this.setState({ bottomText: event.target.value })
              }}
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




          <div className="react-meme-generator__meme-container">
            <h2
              className="
                react-meme-generator__meme-text
                react-meme-generator__meme-text--top
              "
            >
              {topText}
            </h2>

            <h2
              className="
                react-meme-generator__meme-text
                react-meme-generator__meme-text--bottom
              "
            >
              {bottomText}
            </h2>

            <img
              className="react-meme-generator__meme"
              src={memeImage}
              alt=""
            />
          </div>
      </div>
    );
  }
}
