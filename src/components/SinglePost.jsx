import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveHomePost } from "../redux/actions/actions";

const SinglePost = () => {
  const post = useSelector((state) => state.homePage.content);
  const token =
    useSelector((state) => state.token.token) ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0MTI0ZjYwNTAwMTkzN2Q0NjAiLCJpYXQiOjE3MDgzMzE1ODUsImV4cCI6MTcwOTU0MTE4NX0.Th8sgbTW3CgZXXpWkdeUdUQLB-SZvMattf9ctCL5H8M";
  console.log(token);
  const dispatch = useDispatch();
  console.log("post", post);
  useEffect(() => {
    if (token !== undefined) {
      dispatch(saveHomePost(token));
    }
  }, [token]);
  return (
    <Container className="bg-white rounded-1  border">
      <Row className="flex-column">
        {post.map((post) => (
          <div key={post._id}>
            <Col className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div>
                  <i className="bi bi-person fs-1 me-2"></i>
                </div>
                <div>
                  <p className="mb-0">{post.user.username}</p>

                  <p className="mb-0">{post.createdAt}</p>
                </div>
              </div>
              <div>
                <i className="bi bi-three-dots"></i>
                <i className="bi bi-x-lg"></i>
              </div>
            </Col>
            <Col>{post.text}</Col>
          </div>
        ))}
        <Col className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div>
              <i className="bi bi-person fs-1 me-2"></i>
            </div>
            <div>
              <p className="mb-0"></p>
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
