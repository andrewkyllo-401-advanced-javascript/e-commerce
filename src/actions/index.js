// These functions are called 'action creators' since they just create an object that represents an action

export function getAllProducts() {
  return async function(dispatch) {
    const raw = await fetch('http://localhost:3001/products')
    const data = await raw.json()
    return dispatch(getAllProductsAction(data))
  }
}

export function addToStock(data) {
  return {
    type: "ADD_TO_STOCK",
    payload: data
  }
}

export function changeView() {
  return {
    type: 'CHANGE_VIEW'
   } 
}

function getAllProductsAction(data) {
  return {
    type: 'GET_ALL_PRODUCTS',
    payload: data
  }
}

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