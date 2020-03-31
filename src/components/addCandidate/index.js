import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddCandidate = () => {
  const handleSubmit = e => {
    e.preventDefault(); 
    console.log(e);
  }
  return (
    <section className="AddCandidate">
      <Form onSubmit={handleSubmit}>
        <Form.Control type="text" name="name" placeholder="New Caniddate" />
          <Button value="submit">Add New Caniddate</Button>
      </Form>
    </section>
  )
}

export default AddCandidate