import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newUserPost } from "../redux/actions/actions";

const MyForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token) || undefined;
  const id = useSelector((state) => state.user.content._id) || undefined;

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(newUserPost(id, token, "testo"));
    console.log("cliccato");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Enter role" />
      </Form.Group>

      <Form.Group controlId="company">
        <Form.Label>Compagnia</Form.Label>
        <Form.Control type="text" placeholder="Enter company" />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Inizio Attività</Form.Label>
        <Form.Control type="text" placeholder="Enter start date" />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label>Fine Attività</Form.Label>
        <Form.Control type="text" placeholder="Enter end date" />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group controlId="area">
        <Form.Label>Area</Form.Label>
        <Form.Control type="text" placeholder="Enter area" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
