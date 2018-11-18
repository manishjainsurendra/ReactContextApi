import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   contacts: [
    //     {
    //       id: 1,
    //       name: "kiran",
    //       email: "kiran@gmail.com",
    //       phone: "1111-111-111"
    //     },
    //     {
    //       id: 2,
    //       name: "abhi",
    //       email: "abhi@gmail.com",
    //       phone: "2222-222-222"
    //     },
    //     {
    //       id: 3,
    //       name: "akash",
    //       email: "akash@gmail.com",
    //       phone: "3333-333-333"
    //     }
    //   ]
    // };
  }

  onDelete = id => {
    const newArray = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newArray
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div className="container">
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  onDelete={this.onDelete}
                />
              ))}
            </div>
          );
        }}
      </Consumer>

      // <div className="container">
      //   {this.state.contacts.map(contact => (
      //     <Contact
      //       key={contact.id}
      //       id={contact.id}
      //       name={contact.name}
      //       email={contact.email}
      //       phone={contact.phone}
      //       onDelete={this.onDelete}
      //     />
      //   ))}
      // </div>
    );
  }
}
