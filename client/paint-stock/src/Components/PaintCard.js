import React from "react";
import { Button } from "react-bootstrap";
import EditModal from "./EditModal";
import Axios from "axios";

const PaintCard = ({ paint }) => {
  const deletePaint = (id) => {
    Axios.delete(`http://localhost:5000/api/paint/${id}`);
  };
  return (
    <div>
      <p>{paint.paintName}</p>
      <EditModal Paint={paint}>
        Edit
      </EditModal>
      <Button onClick={()=>deletePaint(paint.id)}>Remove</Button>
    </div>
  );
};

export default PaintCard;
