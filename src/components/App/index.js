import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap'
// import Voter from '../Voter'
import store from '../Store'
import { Provider } from 'react-redux'
import AddCandidate from '../addCandidate'
import Header from '../Header';
import Footer from '../Footer';
import Categories from '../Categories';
import Product from '../Products'

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Header />
        <Categories />
        <Product />
        {/* <Voter /> */}
        <AddCandidate />
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
