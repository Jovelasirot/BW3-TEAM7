
import { Container, Row, Col } from "react-bootstrap";
import HomeDxFooter from "./HomeDxFooter";
import JobSidebarSx from "./JobSidebarSx";

function Job() {
  return (
      <Container fluid>
        <Row>
          <JobSidebarSx/>
          <Col className="col-lg-7 col-md-10 col-s-12"></Col>
          <Col lg={3} className="d-none d-md-block"><HomeDxFooter />
          </Col>
        </Row>
      </Container>
  );
}

export default Job;
