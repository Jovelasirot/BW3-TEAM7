import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHomePagePost } from "../redux/actions/actions";
import { useEffect, useState } from "react";
const HomeMidTop = () => {
  const [postContent, setPostContent] = useState({ text: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const formData = new FormData();
  formData.append("image", selectedFile);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHomePagePost(token, postContent, formData));
    console.log(postContent);
    setPostContent({ text: "" });
  };
  return (
    <Row className="flex-column p-2 bg-white mt-3 border border-muted rounded-2 ">
      <Col className="d-flex ">
        <i className="bi bi-person fs-4 "></i>
        {/* <img src="" alt="" /> */}
        <Form className="ms-2 flex-grow-1 " onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            placeholder="Avvia Un Post"
            onChange={(e) => setPostContent({ text: e.target.value })}
          ></Form.Control>
        </Form>
      </Col>
      <Col className="d-flex fs-4 justify-content-between ">
        <div className="d-flex">
          <form>
            <input type="file" onChange={handleFileChange} />
            <i className="bi bi-image text-secondary "></i>
            <span className="ms-2">Contenuti multimediali</span>
          </form>
        </div>
        <div className="d-flex">
          <i className="bi bi-calendar3 text-warning"></i>
          <span className="ms-2">Evento</span>
        </div>
        <div className="d-flex">
          <i className="bi bi-layout-text-window text-danger"></i>
          <span className="ms-2">Scrivi un articolo</span>
        </div>
      </Col>
    </Row>
  );
};

export default HomeMidTop;
