import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { newUserPost } from "../redux/actions/actions";

const MyForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token) || undefined;
  const id = useSelector((state) => state.user.content._id) || undefined;

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const { role, company, startDate, endDate, description, area } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const experience = {
      role,
      company,
      startDate,
      endDate,
      description,
      area,
    };

    dispatch(newUserPost(id, token, experience));
    console.log("Submitted");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter role"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="company">
        <Form.Label>Compagnia</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter company"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Inizio Attività</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter start date"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label>Fine Attività</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter end date"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="area">
        <Form.Label>Area</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter area"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
