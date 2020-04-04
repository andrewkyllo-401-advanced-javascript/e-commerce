import React from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { removeFromCart, addToStock } from '../../actions'


const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

const mapDispatchToProps = { removeFromCart }

const SimpleCart = ({ shoppingCart, removeFromCart }) => {
  return (
    <section className="SimpleCart">
      <Table variant="sm" striped bordered>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <Button 
                  variant='outline-danger'
                  onClick={() => {
                    removeFromCart(product)
                    addToStock(product)
                  }}
                >
                  Remove From Cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)