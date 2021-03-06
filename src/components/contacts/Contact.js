import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {this.props.name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={() => this.setState({ show: !this.state.show })}
                  style={{ cursor: "pointer" }}
                />{" "}
                <i
                  className="fas fa-times"
                  style={{ color: "red", cursor: "pointer", float: "right" }}
                  onClick={async () => {
                    try {
                      axios
                        .delete(
                          `https://jsonplaceholder.typicode.com/users/${
                            this.props.id
                          }`
                        )
                        .then(respose => {
                          dispatch({
                            type: "DELETE_CONTACT",
                            payload: this.props.id
                          });
                          console.log("data deleted!");
                        })
                        .catch(error => dispatch({ type: "DELETE_CONTACT" }));
                    } catch (error) {
                      dispatch({ type: "DELETE_CONTACT" });
                    }
                  }}
                />
              </h4>
              {this.state.show && (
                <ul className="list-group">
                  <li className="list-group-item">
                    Email : {this.props.email}
                  </li>
                  <li className="list-group-item">
                    Phone No: {this.props.phone}
                  </li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
