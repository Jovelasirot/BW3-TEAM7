import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentPosts } from "../redux/actions/actions";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Stars from "./Stars";

const CommentArea = () => {
  const commentData = useSelector((state) => state.comment.content);

  return (
    <Container>
      <Row className="flex-column gy-2 m-2 ">
        {commentData.map((comment, index) => (
          <Col key={index} className="bg-light p-2 rounded-1  ">
            <div>
              <div>
                <span className="fw-semibold me-2">{comment.author}</span>
                <span style={{ fontSize: "12px" }}>
                  {comment.createdAt.split("T")[0]}
                </span>
              </div>
              <div>
                <Stars Stars={comment.rate} />
              </div>
              <span>&rdquo;{comment.comment}&rdquo;</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CommentArea.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentArea;
