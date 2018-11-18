import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "kiran",
          email: "kiran@gmail.com",
          phone: "1111-111-111"
        },
        {
          id: 2,
          name: "kiran",
          email: "kiran@gmail.com",
          phone: "2222-222-222"
        },
        {
          id: 3,
          name: "kiran",
          email: "kiran@gmail.com",
          phone: "3333-333-333"
        }
      ],
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }
  componentWillMount() {
    console.log("context api exicuted!");
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
