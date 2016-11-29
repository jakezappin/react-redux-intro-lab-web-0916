export default function inventoryListItemReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_INVENTORY_LIST_ITEM':
      return [...state, action.payload]
    case 'GET_INVENTORY_LIST_ITEMS':
      return action.payload
    default:
      return state;
  }
}
