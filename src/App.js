import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
