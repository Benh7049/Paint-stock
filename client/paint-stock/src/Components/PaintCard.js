import React from 'react'
import { Button } from 'react-bootstrap'
import EditModal from './EditModal'

const PaintCard = ({paint}) => {
  return (
    <div>
        <p>{paint.paintName}</p>
        <EditModal Paint={paint.paintName} id={paint.id}>Edit</EditModal>
        <Button>Remove</Button>
    </div>
  )
}

export default PaintCard