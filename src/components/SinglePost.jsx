import { Col, Container, Row } from "react-bootstrap";

const SinglePost = () => {
  return (
    <Container className="bg-white rounded-1  border">
      <Row className="flex-column">
        <Col className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div>
              <i className="bi bi-person fs-1 me-2"></i>
            </div>
            <div>
              <p className="mb-0">User Name placeholder</p>
              <p className="mb-0">Role placeholder</p>
              <p className="mb-0">Date placeholder</p>
            </div>
          </div>
          <div>
            <i className="bi bi-three-dots"></i>
            <i className="bi bi-x-lg"></i>
          </div>
        </Col>
        <Col>user text</Col>
      </Row>
    </Container>
  );
};

export default SinglePost;
