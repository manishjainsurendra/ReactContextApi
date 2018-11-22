import React from "react";
import { Consumer } from "../../Context";
import FormInput from "./FormInput";
import axios from "axios";

export default class EditContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      email: "",
      phone: "",
      error: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.id
        }`
      )
      .then(responce =>
        this.setState({
          id: responce.data.id,
          name: responce.data.name,
          email: responce.data.email,
          phone: responce.data.phone
        })
      )
      .catch(error => console.log(error));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({ error: { name: "name is required!" } });
      return;
    } else if (this.state.email === "") {
      this.setState({ error: { email: "email is required!" } });
      return;
    } else if (this.state.phone === "") {
      this.setState({ error: { phone: "phone no is required!" } });
      return;
    }
    this.setState({ id: "", name: "", email: "", phone: "", error: {} });
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then(respons => dispatch({ type: "ADD_CONTACT", payload: this.state }))
      .catch(error => console.log(error));
    this.props.history.push("/");
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">add contacts</div>
              <div className="card-body">
                <form
                  className="form-group"
                  onSubmit={this.onSubmit.bind(this, dispatch)}
                >
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={this.state.error.name}
                  />
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={this.state.error.email}
                  />
                  <FormInput
                    type="text"
                    name="phone"
                    placeholder="Enter phone no"
                    value={this.state.phone}
                    onChange={this.onChange}
                    error={this.state.error.phone}
                  />
                  <p>
                    <button type="submit" className="form-control btn-info">
                      {" "}
                      add{" "}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
