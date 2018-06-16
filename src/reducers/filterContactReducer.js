const initialState = '';

export default function filterContactReducer(state = initialState, action) {
  if (action.type === 'FIND_CONTACT') {
    return action.payload;
  }
  return state;
}
