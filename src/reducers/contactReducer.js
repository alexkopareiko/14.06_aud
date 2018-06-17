
const initialState = [];


export default function contactReducer(state = initialState, action) {


  if (action.type === 'ADD_CONTACT') {
    return [
      ...state,
      action.payload
    ]
  }

  else if(action.type === 'DELETE_CONTACT') {
    const contactId = action.payload;
    return state.filter(contactState => contactState.id !== contactId);
  }

  else if(action.type === 'EDIT_CONTACT') {
    return state.map( (item, index) => {
        if(item.id!== action.payload.id) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.payload
        };
      });

    }
  return state;
}
