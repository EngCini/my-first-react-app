// imports React
import React from "react";
// these components come from the React-Bootstrap package. Importing lets us use them in our App component.
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// container keeps the navbar content neatly aligned and spaced
import Container from "react-bootstrap/Container";
// gives us the card component.
import Card from "react-bootstrap/Card";
// helps arrange cards in a row.
import Row from "react-bootstrap/Row";
// creates columns to hold individual cards.
import Col from "react-bootstrap/Col";

// defines your component App is the name of your component;
function App() {
  // describes the interface the component should display.
  return (
    // <>...</> is the fragment wrapping the returned JSX.
    <>
      {/* creates the container where we'll put the navbar, heading, and cards.
      "App" is also the name of a CSS class you happen to assign to the div */}
      <div className="App">
        {/*navbar gets a dark background.*/}
        {/*variant="dark" tells Bootstrap to use a suitable dark-navbar colour scheme for its contents */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My First React App</Navbar.Brand>

            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <h1>Welcome to My First React App!</h1>
        {/* mt-4 is a Bootstrap utility class that adds some space above the cards. */}
        <Container className="mt-4">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>This is my first React card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>This is my second React card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>This is my third React card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

// allows index.js to import your component.
export default App;
