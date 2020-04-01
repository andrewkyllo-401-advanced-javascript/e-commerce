import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { addCandidate } from '../../actions'
import { connect } from 'react-redux'

const AddCandidate = ({ addCandidate }) => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    addCandidate(data.name)
    reset()
  }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control type="text" placeholder="Name" name="name" ref={register} />
        <Button type="submit">Add New AddCandidate</Button>
    </Form>
  )
}

export default connect(null, { addCandidate })(AddCandidate)