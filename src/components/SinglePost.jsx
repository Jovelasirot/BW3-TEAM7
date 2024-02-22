import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Placeholder,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addComment,
  deletePost,
  fetchAllUser,
  fetchCommentPosts,
  saveHomePost,
} from "../redux/actions/actions";
import CommentArea from "./CommentArea";

const SinglePost = () => {
  const loading = useSelector((state) => state.post.loading);
  const post = useSelector((state) => state.homePage.content);
  const currentUserData = useSelector((state) => state.user.content);
  const profileImage = useSelector((state) => state.user.content.image);

  const token =
    useSelector((state) => state.token.token) ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0MTI0ZjYwNTAwMTkzN2Q0NjAiLCJpYXQiOjE3MDgzMzE1ODUsImV4cCI6MTcwOTU0MTE4NX0.Th8sgbTW3CgZXXpWkdeUdUQLB-SZvMattf9ctCL5H8M";
  const dispatch = useDispatch();
  console.log("post", post);

  useEffect(() => {
    if (token !== undefined) {
      dispatch(saveHomePost(token));
    }
  }, [token, dispatch]);

  const handleDelete = (postID) => {
    const resetConfirm = window.confirm(
      "Sei sicuro di voler eliminare il post?"
    );

    if (resetConfirm) {
      dispatch(deletePost(postID, token));
      dispatch(saveHomePost(token));
    } else {
      console.log("Il post è statp eliminato");
    }
  };

  const [selectedPostId, setSelectedPostId] = useState(null);

  const toggleCommentSection = (postId) => {
    if (selectedPostId === postId) {
      setSelectedPostId(null);
    } else {
      setSelectedPostId(postId);
      dispatch(fetchCommentPosts(postId));
    }
  };

  const commentData = useSelector((state) => state.comment.content);
  console.log(commentData);

  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "",
    elementId: post._id,
  });

  const [showModalComment, setShowModalComment] = useState(false);

  const handleComment = (e, postId) => {
    e.preventDefault();
    dispatch(addComment(newComment));
    setShowModalComment(false);
    dispatch(fetchCommentPosts(postId));
  };

  return (
    <div>
      {loading ? (
        <>
          <div className="mb-3">
            <Placeholder xs={6} />
            <Placeholder /> <Placeholder xs={12} />
            <Placeholder /> <Placeholder xs={12} />
            <Placeholder />
          </div>
          <div className="mb-3">
            <Placeholder xs={6} />
            <Placeholder /> <Placeholder xs={12} />
            <Placeholder /> <Placeholder xs={12} />
            <Placeholder />
          </div>
          <div className="mb-3">
            <Placeholder xs={6} />
            <Placeholder /> <Placeholder xs={12} />
            <Placeholder /> <Placeholder xs={12} />
            <Placeholder />
          </div>
        </>
      ) : (
        post.map((post) => (
          <Container
            fluid
            key={post._id}
            className="bg-white rounded-2  border mt-3 py-2"
          >
            <Row className="gy-2">
              <Col className="d-flex justify-content-between" xs={12}>
                <div className="d-flex align-items-center">
                  <div>
                    {post.user.username === currentUserData.username ? (
                      <img
                        src={profileImage}
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
                  <div className="ms-2 w-100 ">
                    <p className="mb-0">{post.user.username}</p>

                    <p className="mb-0 text-muted">
                      {post.createdAt.split("T")[0]}
                    </p>
                    <span className="mb-0" style={{ wordWrap: "break-word" }}>
                      {post.text}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-content-center ">
                  <div>
                    <i className="bi bi-three-dots me-2 "></i>
                  </div>
                  <div>
                    <i
                      className="bi bi-x-lg deletePost "
                      onClick={() => {
                        handleDelete(post._id);
                      }}
                    ></i>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                {post.image !== undefined ? (
                  <img src={post.image} alt="img" className="w-100" />
                ) : (
                  ""
                )}
              </Col>
              <Col className="border-top" xs={12}>
                <Row className="justify-content-between mt-2 ">
                  <Col>
                    <div className="d-flex justify-content-center addImg rounded-2  ">
                      <i className="bi bi-hand-thumbs-up me-2 "></i>
                      <span>Consiglia</span>
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div
                      className="d-flex justify-content-center addImg rounded-2 "
                      onClick={() => toggleCommentSection(post._id)}
                    >
                      <i className="bi bi-chat-left-dots me-2 "></i>
                      <span>Commenti</span>
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div className="d-flex justify-content-center addImg rounded-2 ">
                      <i className="bi bi-arrow-left-righ me-2 "></i>
                      <span>Diffondi il post</span>
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div className="d-flex justify-content-center addImg rounded-2 ">
                      <i className="bi bi-send-arrow-up-fill me-2 "></i>
                      <span>Invia</span>
                    </div>
                  </Col>
                </Row>
              </Col>
              {selectedPostId === post._id && (
                <CommentArea
                  comments={commentData}
                  postId={post._id}
                  // handleComment={handleComment}
                />
              )}
            </Row>
          </Container>
        ))
      )}
    </div>
  );
};

export default SinglePost;
