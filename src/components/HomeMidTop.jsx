import { Col, Container, InputGroup, Modal, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHomePagePost, saveHomePost } from "../redux/actions/actions";
import { useEffect, useState } from "react";

const HomeMidTop = () => {
  const [postContent, setPostContent] = useState({ text: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const profileImage = useSelector((state) => state.user.content.image);

  const token = useSelector((state) => state.token.token);

  const formData = new FormData();
  formData.append("post", selectedFile);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHomePagePost(token, postContent, formData));
    dispatch(saveHomePost(token));
    console.log(postContent);
    setPostContent({ text: "" });
  };

  return (
    <Row
      className="flex-column p-2 bg-white mt-3 border border-muted rounded-2 gy-3"
      style={{ height: "150px" }}
    >
      <Col className="d-flex align-items-center">
        {profileImage ? (
          <div className="rounded-circle overflow-auto ">
            <img src={profileImage} alt="" style={{ height: "50px" }} />
          </div>
        ) : (
          <i className="bi bi-person fs-4 "></i>
        )}

        <Form className="ms-2 flex-grow-1 " onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            placeholder="Avvia Un Post"
            onChange={(e) => setPostContent({ text: e.target.value })}
          ></Form.Control>
        </Form>
      </Col>

      <Col>
        <Container>
          <div className="d-flex fs-6 justify-content-between  ">
            <div
              className="d-flex addImg rounded-1 p-1 "
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-image text-secondary "></i>
              <span className="ms-2">Contenuti multimediali</span>
            </div>
            <div className="d-flex p-1 ">
              <i className="bi bi-calendar3 text-warning"></i>
              <span className="ms-2">Evento</span>
            </div>
            <div className="d-flex p-1 ">
              <i className="bi bi-layout-text-window text-danger"></i>
              <span className="ms-2">Scrivi un articolo</span>
            </div>
          </div>
        </Container>
      </Col>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="file" onChange={handleFileChange} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)}>Continua</button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default HomeMidTop;
