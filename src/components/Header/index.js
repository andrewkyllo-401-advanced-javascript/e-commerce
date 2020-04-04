import React from 'react'
import { connect } from 'react-redux'
import './Header.scss'

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

const Header = ({ shoppingCart }) => {
  return (
    <div className="Header">
      AmazNom (<span className="cart-num">{shoppingCart.length}</span>)
    </div>
  )
}

export default connect(mapStateToProps)(Header)