import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
     this.contactInput.focus();
   }


  addContact() {
    this.props.onAddContact(this.contactInput.value);
    this.contactInput.value = '';
    this.contactInput.focus();
  }

  findContact() {
    console.log('FindContact', this.searchInput.value);
    this.props.onFindContact(this.searchInput.value);
  }


  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.contactInput = input; }}/>
          <button onClick={this.addContact.bind(this)}>Add contact</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchInput = input; }}/>
            <button onClick={this.findContact.bind(this)}>Find contact</button>
        </div>
    
        <ul>
        {

          this.props.contactState.map((contact, index) =>
          <li key={index}>
              {contact.contactName} &nbsp;
              <button onClick={() => this.props.onDeleteContact(contact.id)}>Delete</button>  &nbsp;
              <button onClick={() => this.props.onDeleteContact(contact.id)}>Edit</button>
              <div>
                <input type="text" defaultValue={contact.contactName} ref={(input) => { this.editInput = input; }}/>
                <button onClick={() => this.props.onEditContact(contact.id, this.editInput.value)}>Ok</button>
              </div>
          </li>

        )
          }
        </ul>
      </div>
    );
  }




}

export default connect(
  state => ({
    contactState: state.contactReducer.filter(contactTemp => contactTemp.contactName.includes(state.filterContactReducer))
  }),
  dispatch => ({
    onAddContact: (contactName) => {
      const payload = {
        id: Date.now().toString(),
        contactName
      }
      dispatch({ type: 'ADD_CONTACT', payload})
    },

    onFindContact: (contactName) => {
      dispatch({ type: 'FIND_CONTACT', payload: contactName})
    },

    onDeleteContact: (contactId) => {
      dispatch({ type: 'DELETE_CONTACT', payload: contactId})
    },

    onEditContact: (contactId, contactName) => {
      dispatch({ type: 'EDIT_CONTACT', payload: {id: contactId, contactName: contactName}})
    },

    onVisibility: (toggle) => {
      dispatch({ type: 'TOGGLE_BTN', payload: !toggle})
    },


  }
)) (App);
