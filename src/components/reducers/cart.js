export const shoppingCart = [
  { name: 'Furbie', category: 'Animals', description: 'Brown and furry' },
];

const cartHandler = (state = shoppingCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return !state.includes(action.payload)
        ? [...state, action.payload]
        : state
    case "REMOVE_FROM_CART":
      return state.filter(product => product !== action.payload);
    default:
      return state;
  }
};

export default cartHandler;
