import React, { Component } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
