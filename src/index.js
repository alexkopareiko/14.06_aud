import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './App';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// const addConactBtn = document.querySelectorAll('.addContact')[0];
// const list = document.querySelectorAll('.list')[0];
// const contactInput = document.querySelectorAll('.contactInput')[0];
//
//
//
// function contact(state = [], action) {
//   if (action.type === 'ADD_CONTACT') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// }
//
//
// const store = createStore(contact);
//
// store.subscribe(() => {
//   list.innerHTML = ''; //очистка контейнера
//   contactInput.value = '';
//
//   store.getState().forEach(contactIndex => {
//     const li = document.createElement('li');
//     li.textContent = contactIndex;
//     list.appendChild(li);
//   })
//
// })
//
// addConactBtn.addEventListener('click', () =>  {
//   const contactName = contactInput.value;
//   store.dispatch({ type: 'ADD_CONTACT', payload: contactName });
//
// });
