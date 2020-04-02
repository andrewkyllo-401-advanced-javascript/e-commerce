import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteProduct, addToCart } from "../../actions";

const mapStateToProps = state => {
  console.log('hello')
  return {
    products:
      state.categories === "All"
        ? state.products
        : state.products.filter(
            product => product.category === state.categories
          ),
    categories: state.categories
  };
};

const mapDispatchToProps = { deleteProduct, addToCart };

const Product = ({ products, deleteProduct, addToCart }) => {
  return (
    <section className="Product">
      <Table variant="sm" striped bordered>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add To Cart
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    deleteProduct(product);
                  }}
                >
                  Delete Product
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
