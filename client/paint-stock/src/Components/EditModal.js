import { React, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import Axios from "axios";
import PaintForm from "./PaintForm";

const EditModal = ({ Paint}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    //append new form values
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove from error object:
    if (errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    //get paint and status
    const { paintName, status } = form;
    const newErrors = {};
    //if paint name is null notify user
    if (!paintName || paintName === "")
      newErrors.paintName = "Please enter paint name";
    //if status is not selected notify user
    if (!status || status === "") newErrors.status = "Please select status";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get errors
    const newErrors = findFormErrors();
    // check for errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      editPaint();
    }
  };

  const editPaint = () => {
    Axios.put(`http://localhost:5000/api/paint/${Paint.id}`,form);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {Paint.paintName} paint</Modal.Title>
        </Modal.Header>
        <PaintForm xs={10}
            submitBttnText={"Update Paint"}
            statusFieldText={"Select new status"}
            paintFieldText={"Enter new paint name"}
            paintID={Paint.id}
            method={'PUT'}
          ></PaintForm>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
