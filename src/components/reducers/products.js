export const allProducts = [
  { name: 'Furbie', category: 'Animals' },
  { name: 'Fox', category: 'Animals' },
  { name: 'Flamingo', category: 'Animals' },
  { name: 'Bird', category: 'Animals' },
  { name: 'Camaro', category: 'Cars' },
  { name: 'Pickup', category: 'Cars' },
  { name: 'Sedan', category: 'Cars' },
  { name: 'Hot Dog Mobile', category: 'Cars' },
  { name: 'Chair', category: 'Furniture' },
  { name: 'Adult Swing', category: 'Furniture' },
  { name: 'Desk', category: 'Furniture' },
  { name: 'I love Lamp', category: 'Furniture' },
  { name: 'Milkshake', category: 'Food' },
  { name: 'Pizza', category: 'Food' },
  { name: 'Tapioca', category: 'Food' },
  { name: 'Green Onion Pancake', category: 'Food' },
  { name: 'Frizbee Golf', category: 'Sports' },
  { name: 'Ping Pong', category: 'Sports' },
  { name: 'Basketball', category: 'Sports' },
  { name: 'Sleeping', category: 'Sports' },
]

const productHandler = ( state = allProducts, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      return state.filter(product => product !== action.payload);
    default:
      return state;
  }
}

export default productHandler