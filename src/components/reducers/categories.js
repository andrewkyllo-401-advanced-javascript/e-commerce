const categorySelector = ( state = [{id: 1, name : 'All'}], action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      return action.payload;
    case 'SELECT-CATEGORY':
      return action.payload;
    default:
      return state
  }
}

export default categorySelector