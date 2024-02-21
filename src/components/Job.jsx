<<<<<<< HEAD

import { Container, Row, Col } from "react-bootstrap";
=======
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
>>>>>>> main
import HomeDxFooter from "./HomeDxFooter";
import JobSidebarSx from "./JobSidebarSx";

function Job() {
  return (
<<<<<<< HEAD
      <Container fluid>
        <Row>
          <JobSidebarSx/>
          <Col className="col-lg-7 col-md-10 col-s-12"></Col>
          <Col lg={3} className="d-none d-md-block"><HomeDxFooter />
          </Col>
        </Row>
      </Container>
=======
    // <BrowserRouter>
    <Container>
      <Row>
        {/* <Routes>
            <Route />
          </Routes> */}
        <HomeDxFooter />
      </Row>
    </Container>
    // </BrowserRouter>
>>>>>>> main
  );
}

export default Job;
