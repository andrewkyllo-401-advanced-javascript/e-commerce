import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

const Header = ({ shoppingCart }) => {
  return (
    <div className="Header">
      AmazNom ({shoppingCart.length})
    </div>
  )
}

export default connect(mapStateToProps)(Header)