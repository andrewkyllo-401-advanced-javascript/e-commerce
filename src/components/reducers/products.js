

const productHandler = ( state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      let deleteState = [...state]
      deleteState.forEach(product => 
        product === action.payload
          ? product.stock--
          : null
      )
      return deleteState
    case 'GET_ALL_PRODUCTS':
      return action.payload;
    case 'ADD_TO_STOCK':
      let addState = [...state]
      addState.forEach(product => 
        product === action.payload
          ? product.stock++
          : null
      )
      return addState 
    default:
      return state;
  }
}

export default productHandler