import React, { useState, FunctionComponent } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Navbar
} from "react-bootstrap";
import "./App.css";
import { useSearch } from "./store/hooks";
import { useSelector } from "react-redux";
import { gifSelector } from "./store/selector";

const App: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useSearch();
  const gif = useSelector(gifSelector);
  return (
    <div className="app">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Weirdness Calculator</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col sm={12} md={7}>
            <div className="instructions">
              <p>
                Find out how weird you are by selecting GIFs that make you
                laugh. We'll show you the least weird ones to start, but you can
                move the slider to make them weirder.
              </p>
              <p>
                When you find a GIF that you like, press the <i>Like</i> button.
                Once you like 5 GIFs, we'll who you how weird you are.
              </p>
              <InputGroup>
                <FormControl
                  placeholder="search"
                  value={searchTerm}
                  onChange={(e: any) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <InputGroup.Append>
                  <Button
                    onClick={() => {
                      search(searchTerm);
                    }}
                  >
                    SEARCH
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="result">
              <h2>YOUR RESULT</h2>
              <div className="resultImage">
                {gif && (
                  <img
                    alt="christmas vacation GIF"
                    height={gif.height}
                    src={gif.url}
                    width={gif.width}
                  />
                )}
              </div>
              <Button>Thumbs Up</Button>
              <div className="slider">Slider</div>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <div className="liked-gifs">
              <h2>YOUR LIKED GIFS</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
