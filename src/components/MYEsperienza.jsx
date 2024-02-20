import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MyAttivita.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Modal,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newUserPost } from "../redux/actions/actions";

import { addUserPost } from "../redux/actions/actions";
import MyForm from "./MyForm";
import pictureExperience from "../assets/esperienzepx.avif";

const MyEsperienza = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const reduxPosts = useSelector((state) => state.post.content);
  const token = useSelector((state) => state.token.token) || undefined;
  const id = useSelector((state) => state.user.content._id) || undefined;
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== undefined && id !== undefined) {
      console.log("id", id);
      dispatch(addUserPost(id, token));

      setPosts(reduxPosts);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, id, dispatch]);
  console.log(posts);
  return (
    <Card className="mb-2 p-0">
      <CardBody className="p-0 pt-3">
        <div className="d-flex justify-content-between ms-4  me-4">
          <div>
            <h3 className="mb-0 fw-bold">Esperienze</h3>
          </div>
          <Modal show={showForm} onHide={() => setShowForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Crea un post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MyForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowForm(false)}>
                Chiudi
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="d-flex align-items-center ">
            <div
              className="me-3 fs-4 addPost "
              onClick={() => setShowForm(true)}
            >
              <i className="bi bi-plus-lg"></i>
            </div>

            <div>
              <i className="bi bi-pen "></i>
            </div>
          </div>
        </div>
        <Row>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Col key={post._id} className="col-12 mt-4 d-flex ms-2">
                <Image
                  style={{ width: "150px", height: "150px" }}
                  src={pictureExperience}
                  className="rounded-circle  "
                />
                <div className=" ms-3">
                  <h5>{post.role}</h5>
                  <p>{post.description}</p>
                  <p>Incominciato il: {post.startDate.split("T")[0]}</p>
                  <p>
                    Terminato il:{" "}
                    {post.endDate !== null
                      ? post.endDate.split("T")[0]
                      : "Fino ad Oggi..."}
                  </p>
                </div>
              </Col>
            ))
          ) : (
            <Col className="ms-4 fs-6 mb-4 ">
              Le tue esperieneze verrano mostrate qua
            </Col>
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default MyEsperienza;
