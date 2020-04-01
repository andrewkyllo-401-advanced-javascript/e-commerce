export const allCategories = 
  { 
    All: 'All',
    Animals: 'Animals' ,
    Cars: 'Cars' ,
    Furniture: 'Furniture' ,
    Food: 'Food' ,
    Sports: 'Sports' 
  };


const categorySelector = ( state = allCategories.All, action) => {
  switch (action.type) {
    case 'SELECT-CATEGORY':
      return action.payload;
    default:
      return state
  }
}

export default categorySelector