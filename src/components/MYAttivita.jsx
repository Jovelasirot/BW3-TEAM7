import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MyAttivita.css";
import { Card, CardBody, CardFooter } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addUserPost } from "../redux/actions/actions";

const MyAttivita = () => {
  const [posts, setPosts] = useState([]);
  const reduxPosts = useSelector((state) => state.post.content);
  const token = useSelector((state) => state.token.token) || undefined;
  const id = useSelector((state) => state.user.content._id) || undefined;
  console.log("id", id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUserPost(id, token));
    setPosts(reduxPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token !== undefined, id !== undefined]);
  return (
    <Card className="mb-2 p-0">
      <CardBody className="p-0 pt-3">
        <div className="d-flex justify-content-between ms-4 mt-3 me-4">
          <div>
            <h5 className="mb-0 fw-bold">Attività</h5>
            <p className="fw-semibold text-underline follower">0 follower</p>
          </div>
          <div className="d-flex align-items-top">
            <div className="me-1 mt-1">
              <button
                type="button"
                className="rounded-pill px-3 py-1 btn btn-outline-primary me-2 fw-semibold sezioneprof"
              >
                Crea un post
              </button>
            </div>
            <div className="ms-1 pencildivexp mb-2">
              <i className="bi bi-pencil-fill"></i>
            </div>
          </div>
        </div>
        <div className="ms-4">
          <p className="mb-0 fw-semibold lh">Non hai ancora pubblicato nulla</p>
          <p>I post che condividi appariranno qui</p>
        </div>
      </CardBody>
      <CardFooter className="box-gray fw-semibold">
        <p className="mostra mb-0">Mostra tutte le attività ➝</p>
      </CardFooter>
    </Card>
  );
};

export default MyAttivita;
