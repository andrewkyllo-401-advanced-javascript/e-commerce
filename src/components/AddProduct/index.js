import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addProduct } from "../../actions";
import { connect } from "react-redux";

const AddProduct = ({ addProduct }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    addProduct(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            ref={register}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Category"
            name="category"
            ref={register}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            ref={register}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Stock"
            name="stock"
            ref={register}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Price"
            name="price"
            ref={register}
          />
        </Col>
      </Form.Row>
      <Button type="submit">Add Product</Button>
    </Form>
  );
};

export default connect(null, { addProduct })(AddProduct);
