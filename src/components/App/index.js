import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap'
import Voter from '../Voter'
import store from '../Store'
import { Provider } from 'react-redux'
import AddCandidate from '../addCandidate'

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <h1>Vote!</h1>
        <Voter />
        <AddCandidate />
      </Container>
    </Provider>
  );
}

export default App;
