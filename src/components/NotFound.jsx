import { Col, Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Col className="d-flex vh-100 justify-content-center flex-column align-items-center ">
        <iframe
          src="https://giphy.com/embed/1fnnX7RL2JrlUvII1V"
          width="480"
          height="480"
          allowFullScreen
        ></iframe>

        <h1>404 error</h1>
      </Col>
    </Container>
  );
};

export default NotFound;
