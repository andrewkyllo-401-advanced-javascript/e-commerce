// These functions are called 'action creators' since they just create an object that represents an action

export function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export function deleteProduct(product) {
  return {
    type: 'DELETE_PRODUCT',
    payload: product
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}

export function changeCategory(name) {
  return {
    type: 'SELECT-CATEGORY',
    payload: name
  }
}


export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name
  };
}

export function decrement(name) {
  return {
    type: 'DECREMENT',
    payload: name
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}

export function addCandidate(name) {
  return {
    type: 'ADD_CANDIDATE',
    payload: name
  }
}