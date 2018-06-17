const initialState = 'bam-bam';

export default function selectContactReducer(state = initialState, action) {
  if (action.type === 'SELECT_CONTACT') {
    return action.payload;
  }
  return state;
}
