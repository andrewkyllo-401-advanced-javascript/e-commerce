export const allProducts = [
  { name: 'Furbie', category: 'Animals', description: 'Brown and furry', stock: 34, price: 34 },
  { name: 'Fox', category: 'Animals', description: 'Red and furry', stock: 34, price: 34 },
  { name: 'Flamingo', category: 'Animals', description: 'Pink and furry', stock: 34, price: 34 },
  { name: 'Bird', category: 'Animals', description: 'Bird and furry', stock: 34, price: 34 },
  { name: 'Camaro', category: 'Cars', description: 'Brown and fast', stock: 34, price: 34 },
  { name: 'Pickup', category: 'Cars', description: 'Brown and slow', stock: 34, price: 34 },
  { name: 'Sedan', category: 'Cars', description: 'Brown and not like a hot dog', stock: 34, price: 34 },
  { name: 'Hot Dog Mobile', category: 'Cars', description: 'Brown and and like a hot dog', stock: 34, price: 34 },
  { name: 'Chair', category: 'Furniture', description: 'Brown and sturdy', stock: 34, price: 34 },
  { name: 'Swing', category: 'Furniture', description: 'Brown and swingy', stock: 34, price: 34 },
  { name: 'Desk', category: 'Furniture', description: 'Brown and flat', stock: 34, price: 34 },
  { name: 'I love Lamp', category: 'Furniture', description: 'Shines stuff', stock: 34, price: 34 },
  { name: 'Milkshake', category: 'Food', description: 'Brown and flurry', stock: 34, price: 34 },
  { name: 'Pizza', category: 'Food', description: 'life blood', stock: 34, price: 34 },
  { name: 'Tapioca', category: 'Food', description: 'Brown and furry', stock: 34, price: 34 },
  { name: 'Green Onion Pancake', category: 'Food', description: 'Brown and furry', stock: 34, price: 34 },
  { name: 'Frizbee Golf', category: 'Sports', description: 'Brown and furry', stock: 34, price: 34 },
  { name: 'Ping Pong', category: 'Sports', description: 'Brown and furry', stock: 34, price: 34 },
  { name: 'Basketball', category: 'Sports', description: 'Brown and furry', stock: 34, price: 34 },
  { name: 'Sleeping', category: 'Sports', description: 'Brown and furry', stock: 34, price: 34 },
]

const productHandler = ( state = allProducts, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      let tempProducts = state
      tempProducts.forEach(product => 
        product === action.payload
          ? product.stock--
          : null
      )
      console.log(tempProducts)
      return tempProducts
    default:
      return state;
  }
}

export default productHandler