import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />

        <div className="container">
          <Contact
            name="kiran ninave"
            email="kiran@gmail.com"
            phone="1234-5678-90"
          />
          <Contact
            name="kiran ninave"
            email="kiran@gmail.com"
            phone="1234-5678-90"
          />
        </div>
      </div>
    );
  }
}

export default App;
