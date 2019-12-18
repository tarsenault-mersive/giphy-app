import React, { useState, FunctionComponent } from "react";
import { InputGroup, FormControl, Button, Navbar } from "react-bootstrap";
import "./App.css";
import Slider from "rc-slider";
import { useActions } from "./store/hooks";
import { useSelector } from "react-redux";
import { gifSelector, likedGifsSelector } from "./store/selector";

const App: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weirdness, setWeirdness] = useState(0);
  const { search, likeGif } = useActions();
  const gif = useSelector(gifSelector);
  const likedGifs = useSelector(likedGifsSelector);
  return (
    <div className="app">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Weirdness Calculator</Navbar.Brand>
      </Navbar>
      <div className="instructions">
        <p>
          Find out how weird you are by selecting GIFs that make you laugh.
          We'll show you the least weird ones to start, but you can move the
          slider to make them weirder.
        </p>
        <p>
          When you find a GIF that you like, press the <i>Like</i> button. Once
          you like 5 GIFs, we'll who you how weird you are.
        </p>
        <InputGroup>
          <FormControl
            placeholder="search"
            value={searchTerm}
            onChange={(e: any) => {
              setSearchTerm(e.target.value);
            }}
            className="mr-sm-2"
          />
          <InputGroup.Append>
            <Button
              onClick={() => {
                search(searchTerm, weirdness);
              }}
            >
              SEARCH
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="result">
        <h2>YOUR RESULT</h2>
        {gif && (
          <div className="showResults">
            <div className="resultImage">
              <img alt="gif result" src={gif.url} width={300} />
            </div>
            <Button onClick={() => likeGif()}>Thumbs Up</Button>
            <div className="slider">
              <Slider
                min={0}
                max={10}
                defaultValue={0}
                onChange={val => {
                  setWeirdness(val);
                  search(searchTerm, weirdness);
                }}
              />
              <p>Weirdness: {weirdness}</p>
            </div>
          </div>
        )}
      </div>
      <div className="liked">
        <h2>YOUR LIKED GIFS</h2>
        <div className="liked-gifs">
          {likedGifs.map(gif => (
            <img alt="liked-gif" src={gif.url} width={250} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
