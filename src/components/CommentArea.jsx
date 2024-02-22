import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  deleteComment,
  fetchCommentPosts,
} from "../redux/actions/actions";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Stars from "./Stars";

const CommentArea = ({ postId }) => {
  const commentData = useSelector((state) => state.comment.content);
  const [showModalComment, setShowModalComment] = useState(false);
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: postId,
  });

  const handleComment = (e, postId) => {
    e.preventDefault();
    dispatch(addComment(newComment));
    setShowModalComment(false);
    dispatch(fetchCommentPosts(postId));
  };

  const handleDeleteComment = (commentID) => {
    dispatch(deleteComment(commentID));
  };

  return (
    <Container>
      <Row className="flex-column gy-2 m-2 ">
        {commentData.map((comment, index) => (
          <Col key={index} className="bg-light p-2 rounded-1  ">
            <div>
              <div className="d-flex justify-content-between ">
                <div>
                  <span className="fw-semibold me-2">{comment.author}</span>
                  <span style={{ fontSize: "12px" }}>
                    {comment.createdAt.split("T")[0]}
                  </span>
                </div>
                <div>
                  <i
                    className="bi bi-x-lg"
                    onClick={() => handleDeleteComment(comment._id)}
                  ></i>
                </div>
              </div>

              <div>
                <Stars Stars={comment.rate} />
              </div>
              <span>&rdquo;{comment.comment}&rdquo;</span>
            </div>
          </Col>
        ))}
        <div className="px-0">
          <Form>
            <Form.Control
              placeholder="Aggiungi un Commento"
              onClick={() => setShowModalComment(true)}
            ></Form.Control>
          </Form>
        </div>
        {showModalComment && (
          <Modal
            show={showModalComment}
            onHide={() => setShowModalComment(false)}
          >
            <Form className="mt-4 " onSubmit={handleComment}>
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi un Commento</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Valuta il Post</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    id="rate"
                    required
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        rate: e.target.value,
                        postId: postId,
                      });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Scrivici la tua</Form.Label>
                  <Form.Control
                    value={newComment.comment}
                    required
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        comment: e.target.value,
                        elementId: postId,
                      });
                    }}
                    id="comment"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  disabled={newComment.comment ? false : true}
                  variant="secondary"
                  type="submit"
                >
                  Invia
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        )}
      </Row>
    </Container>
  );
};

CommentArea.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentArea;
