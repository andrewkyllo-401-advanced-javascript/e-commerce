import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions";

const mapStateToProps = state => {
    console.log(state.categories)
    console.log(state.products[0].category)
    let somith = state.products.filter(product => product.category === state.categories)
    console.log(somith)
  
  return {
    products:
      state.categories === 'All'
        ? state.products
        : state.products.filter(
            product => product.category === state.categories
          ),
    categories: state.categories
  };
};

const mapDispatchToProps = { deleteProduct };

const Product = ({ products, deleteProduct }) => {
  return (
    <section className="Product">
      <Table variant="sm" striped bordered>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                <Button
                  variant="outline-primary"
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
