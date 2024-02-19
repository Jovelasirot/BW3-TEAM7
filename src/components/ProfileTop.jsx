import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import profileTopImg from "../assets/profileBgTop.png";
import MyAnalisi from "./MyAnalisi";
import MyRisorse from "./MyRisorse";
import MyAttivita from "./MYAttivita";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addUserData } from "../redux/actions/actions";
import smEpiceLogo from "../assets/epicodeschool_logo.jpg";
import smLavoratorePrivato from "../assets/lavoratore_privato_logo.jpg";

const pasqualetoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzNGU4YzI0ZjYwNTAwMTkzN2Q0ODMiLCJpYXQiOjE3MDgzNDc3NDcsImV4cCI6MTcwOTU1NzM0N30.mthqNljgtCYQEBuKoZKcMpN6a22wDf15iDkgXjJsAoY";
const jovelToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMGRhMjI0ZjYwNTAwMTkzN2Q0NGIiLCJpYXQiOjE3MDgzMzA0MDIsImV4cCI6MTcwOTU0MDAwMn0.LYG5z94VApAqELv2LvNngtihtlh6Kyrv-RHbX7gxv0M";
const michelaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTZjNzI0ZjYwNTAwMTkzN2Q0NmMiLCJpYXQiOjE3MDgzMzI3NDQsImV4cCI6MTcwOTU0MjM0NH0.iLEv5uw64zS02f1yE-pYpnFtV3SUF3TBPtkQgQrr8ik";
const robertaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTE1YTI0ZjYwNTAwMTkzN2Q0NTAiLCJpYXQiOjE3MDgzMzEzNTQsImV4cCI6MTcwOTU0MDk1NH0.lLMwELubthCjSB0pm9ge5Sboz8l11VFsHgHTETuJSOs";
const filippoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0MTI0ZjYwNTAwMTkzN2Q0NjAiLCJpYXQiOjE3MDgzMzE1ODUsImV4cCI6MTcwOTU0MTE4NX0.Th8sgbTW3CgZXXpWkdeUdUQLB-SZvMattf9ctCL5H8M";

const ProfileTop = () => {
  const [randomCollegamenti, setRandomCollegamenti] = useState(0);
  const paramas = useParams();
  const id = paramas.username;
  const userData = useSelector((state) => state.user.content);

  console.log(`${id} data`, userData);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      let token;
      switch (id) {
        case "Pasquale":
          token = pasqualetoken;
          break;
        case "Jovel":
          token = jovelToken;
          break;
        case "Michela":
          token = michelaToken;
          break;
        case "Roberta":
          token = robertaToken;
          break;
        case "Filippo":
          token = filippoToken;
          break;
        default:
          console.log("no user");
          return;
      }
      dispatch(addUserData(token));
      const randomNum = Math.floor(Math.random() * 99) + 1;
      setRandomCollegamenti(randomNum);
    };

    fetchUserData();
  }, [id, dispatch]);

  return (
    <Col className="col-9">
      <Row className="flex-column gy-3 rounded-2 border border-muted overflow-auto mt-2 bg-white ">
        <Col className="p-0 position-relative mt-0  mb-4">
          <img
            src={profileTopImg}
            alt=""
            className="img-fluid w-100 z-0 h-100 "
          />
          <div className="z-1 position-absolute top-50 start-0 translate-right bg-dark border border-3 border-light rounded-circle d-flex  ms-4 overflow-auto">
            <img
              src={userData.image}
              alt=""
              className="profilePic flex-grow-1 imgUser "
            />
          </div>
        </Col>
        <Col className="text-end mb-5 ">
          <i className="bi bi-pen fs-4 text-muted"></i>
        </Col>
        <Col className="">
          <Row>
            <Col>
              <h3>
                {userData.name} {userData.surname}
              </h3>
              <p>{userData.title}</p>
              <div className="d-flex">
                <p className="text-muted me-2 ">
                  {userData.area}, Italia &#183;
                </p>
                <p className="text-secondary fw-semibold ">
                  Informazioni di contatto
                </p>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center ">
                <img
                  src={smLavoratorePrivato}
                  alt="smLavoratorePrivato"
                  style={{ height: "40px" }}
                />
                <p className="mb-0 ms-3">Lavoratore Privato</p>
              </div>
              <div className="d-flex align-items-center ">
                <img
                  src={smEpiceLogo}
                  alt="smEpiceLogo"
                  style={{ height: "50px" }}
                />
                <p className="mb-0 ms-1">EPICODE</p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <p className="fw-semibold text-secondary">
            {randomCollegamenti} collegamenti
          </p>
          <div>
            <Button variant="secondary" className="rounded-5 me-2 ">
              Disponibile per
            </Button>
            <Button
              className="rounded-5 border border-2 border-secondary me-2 bg-opacity-10 bg-secondary text-secondary "
              variant="muted"
            >
              Aggiungi sezione del profilo
            </Button>
            <Button
              className="rounded-5 text-muted border border-muted"
              variant="muted"
            >
              Altro
            </Button>
          </div>
        </Col>
        <Col className="mb-2">
          <Container>
            <Row>
              <Col className=" bg-opacity-10 bg-secondary rounded-3 p-3 me-2">
                <div className="d-flex justify-content-between">
                  <span>Disponibile a lavorare</span>
                  <i className="bi bi-pen "></i>
                </div>
                <p className="mb-0">
                  Ruoli di Sviluppatore Web, React Developer e UX...
                </p>
                <p className="text-secondary fw-semibold mb-0 ">
                  Mostra dettagli
                </p>
              </Col>
              <Col className="border border-muted rounded-3 p-3 ms-2 ">
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">
                    Fai sapere che stai facendo selezione e attrai
                  </span>
                  <i className="bi bi-x-lg"></i>
                </div>
                <p className="mb-0">candidati qualificati</p>
                <p className="text-secondary fw-semibold mb-0">Inizia</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="flex-column gy-4 mt-2 ">
        <Col className="px-0">
          <MyAnalisi />
        </Col>
        <Col className="px-0">
          <MyRisorse />
        </Col>
        <Col className="px-0">
          <MyAttivita />
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileTop;
