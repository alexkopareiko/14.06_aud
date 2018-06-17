const initialState = 'bam-bam';

export default function toggleReducer(state = initialState, action) {
  if (action.type === 'TOGGLE_BTN') {
    return action.payload;
  }
  return state;
}
