import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost, saveHomePost } from "../redux/actions/actions";

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
  }, [token, dispatch]);

  const handleDelete = (postID) => {
    dispatch(deletePost(postID, token));
    dispatch(saveHomePost(token));
  };

  return (
    <div>
      {post.map((post) => (
        <Container
          key={post._id}
          className="bg-white rounded-2  border mt-3 py-2"
        >
          <Col className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                {post.image !== undefined ? (
                  <img
                    src={post.image}
                    alt="img"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <i className="bi bi-person fs-1 me-2"></i>
                )}
              </div>
              <div className="ms-2">
                <p className="mb-0">{post.user.username}</p>

                <p className="mb-0 text-muted">
                  {post.createdAt.split("T")[0]}
                </p>
                <p className="mb-0">{post.text}</p>
              </div>
            </div>
            <div>
              <Button
                onClick={() => {
                  handleDelete(post._id);
                }}
              >
                Delete
              </Button>
              <i className="bi bi-three-dots"></i>
              <i className="bi bi-x-lg"></i>
            </div>
          </Col>
        </Container>
      ))}
    </div>
  );
};

export default SinglePost;
