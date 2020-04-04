import React from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import Categories from "../Categories";
import Product from "../Products";
import AddProduct from "../AddProduct";
import SimpleCart from "../SimpleCart";
import If from "../conditionals/If";
import { changeView } from "../../actions";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    view: state.view,
  };
};

function App({ view, changeView }) {
  return (
    <Container className="App">
      <Header />
      <Button onClick={changeView}>
        View {view.hidden.toUpperCase()}
      </Button>
      <If condition={view.view === "main"}>
        <Categories />
        <Product />
        <AddProduct />
      </If>
      <If condition={view.view === "cart"}>
        <h2>Your Cart</h2>
        <SimpleCart />
      </If>
      <Footer />
    </Container>
  );
}

export default connect(mapStateToProps, { changeView })(App);
