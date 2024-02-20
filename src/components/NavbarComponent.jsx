import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
import LogoNav from "../assets/LogoNav.png";
import { useSelector } from "react-redux";
import { Badge, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function NavbarComponent() {
  const [showSecondContainer, setShowSecondContainer] = useState(false);
  const userData = useSelector((state) => state.user.content);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSecondContainer(true);
      } else {
        setShowSecondContainer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className=" sticky-lg-top px-0">
      <Container fluid className="border-bottom bg-white">
        <Container>
          <Row className="justify-content-between align-items-center ">
            <Col>
              <Col className="d-flex flex-row mt-1">
                <span className="me-1 mt-1">
                  <img
                    src={LogoNav}
                    width="35"
                    height="35"
                    alt="linkedinLogo"
                  />
                </span>

                <span>
                  <Form className="mt-1">
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1" className="bg-primary">
                        <i className="bi bi-search"></i>
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Cerca"
                        aria-label="Cerca"
                        aria-describedby="basic-addon1"
                        className="bg-primary"
                        width={60}
                      />
                    </InputGroup>
                  </Form>
                </span>
              </Col>
            </Col>

            <Col>
              <Col>
                <Row className="align-items-center">
                  <Col className="d-flex flex-column text-center g-0">
                    <span href="#">
                      <i className="bi bi-house-door-fill icons py-0"></i>
                    </span>
                    <span className="navbar-text py-0">Home</span>
                  </Col>
                  <Col className="d-flex flex-column text-center g-0">
                    <span href="#">
                      <i className="bi bi-people-fill icons"></i>
                    </span>
                    <span className="navbar-text py-0">Rete</span>
                  </Col>
                  <Col className="d-flex flex-column text-center g-0">
                    <span href="#">
                      <i className="bi bi-suitcase-lg icons py-0"></i>
                    </span>
                    <span className="navbar-text py-0">Lavoro</span>
                  </Col>
                  <Col className="d-flex flex-column text-center g-0">
                    <span href="#">
                      <i className="bi bi-chat-dots icons"></i>
                    </span>
                    <span className="navbar-text py-0">Messaggistica</span>
                  </Col>
                  <Col className="d-flex flex-column text-center g-0">
                    <span href="#">
                      <i className="bi bi-bell-fill icons"></i>
                    </span>
                    <span className="navbar-text py-0">Notifiche</span>
                  </Col>
                  <Col className=" d-flex flex-column text-center px-0 border-end ">
                    <span className="me-1 mt-1 ">
                      <img
                        src={userData.image}
                        alt={userData.name}
                        className="rounded-circle"
                        style={{ height: "35px" }}
                      />
                    </span>

                    <Dropdown className="d-flex justify-content-center ">
                      <Dropdown.Toggle className="bg-white border border-0 p-0 d-flex align-items-center">
                        <span className="mb-0" style={{ fontSize: "12px" }}>
                          Tu
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Link className="nav-link ms-3" to={"profile/Filippo"}>
                          Filippo Borelli
                        </Link>
                        <Link className="nav-link ms-3" to={"profile/Jovel"}>
                          Jovel Asirot
                        </Link>
                        <Link className="nav-link ms-3" to={"profile/Pasquale"}>
                          Pasquale Andriano
                        </Link>
                        <Link className="nav-link ms-3" to={"profile/Michela"}>
                          Michela Vivacqua
                        </Link>
                        <Link className="nav-link ms-3" to={"profile/Roberta"}>
                          Roberta Stira
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col className="d-flex flex-column text-center g-0 ms-1 ">
                    <span href="#">
                      <i className="bi bi-grid-3x3-gap-fill icons"></i>
                    </span>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="bg-white border border-0 p-0"
                        style={{ fontSize: "12px" }}
                      >
                        Per le aziende
                      </Dropdown.Toggle>
                    </Dropdown>
                  </Col>
                  <Col className=" navbar-text2 mt-1  ">
                    <div>Prova Premium per</div>
                    <div>0 EUR</div>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`shadow bg-white  ${
          showSecondContainer
            ? "slideInAnimation d-block"
            : "slideOutAnimation "
        }`}
      >
        <Container className="animated-container">
          <Row>
            <Col className="d-flex align-items-center ">
              <img
                src={userData.image}
                alt={userData.name}
                className="rounded-circle "
                style={{ height: "40px" }}
              />
              <div>
                <p className="ms-2 mb-0 miniNavText fw-semibold ">
                  {userData.name} {userData.surname}
                </p>
                <p className="ms-2 mb-0 miniNavText ">{userData.title}</p>
              </div>
            </Col>

            <Col className="d-flex align-items-center justify-content-end ">
              <Button
                className="bg-white border border-1 border-dark rounded-5 px-4 me-3 my-2"
                size="md"
              >
                Altro
              </Button>

              <Button
                className="bg-white border  border-secondary rounded-5 px-4 me-3 my-2 fw-semibold text-secondary "
                size="md"
              >
                Aggiungi sezione del profilo
              </Button>
              <Button
                className="border border-muted rounded-5 px-4 my-2  fw-semibold text-white"
                size="md"
                variant="secondary"
              >
                Disponibile per
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default NavbarComponent;
