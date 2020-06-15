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

      memeTemplatesLoadingState: 'IDLE', // 'STARTED', 'SUCCEED', 'FAILED'
      memeTemplatesLoadingError: null,
      memeTemplates: [],

      currentImage: null,
    };
  }

  render() {
    const {
      topText,
      bottomText,
      memeTemplatesLoadingState,
      memeTemplatesLoadingError,
    } = this.state;

    const isLoading = memeTemplatesLoadingState === 'IDLE' || memeTemplatesLoadingState === 'STARTED';
    const isError = memeTemplatesLoadingState === 'FAILED';

    if (isLoading) {
      return (
        <div className="react-meme-generator react-meme-generator--loading">
          Loading...
        </div>
      );
    }

    if (isError) {
      return (
        <div className="react-meme-generator react-meme-generator--error">
          ERROR: {memeTemplatesLoadingError}
        </div>
      );
    }

    const { memeTemplates, currentImage } = this.state;

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

            <button
              onClick={() => {
                const nextCurrentImageValue = (currentImage === memeTemplates.length)
                    ? 0
                    : currentImage + 1;

                this.setState({ currentImage: nextCurrentImageValue });
              }}
              className="react-meme-generator__button"
            >
              Change picture
            </button>

            <button
              className="react-meme-generator__button"
            >
              Load image
            </button>

            <button
              className="react-meme-generator__button"
            >
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
              src={memeTemplates[currentImage].url}
              alt=""
            />
          </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      memeTemplatesLoadingState: 'STARTED',
    }, () => {
      fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(resultObject => {
          this.setState({
            memeTemplatesLoadingState: 'SUCCEED',
            memeTemplates: resultObject.data.memes,
            currentImage: 0,
          });
        })
        .catch(error => {
          this.setState({
            memeTemplatesLoadingState: 'FAILED',
            memeTemplatesLoadingError: error.message,
          });
        });
    })
  }
}
