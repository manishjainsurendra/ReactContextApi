import React from "react";

export default class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
  }
  static defaultProps = {
    name: null,
    email: null,
    phone: null
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: this.phoneRef.current.value
    };
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card">
        <div className="card-header">add contacts</div>
        <div className="card-body">
          <form className="form-group" onSubmit={this.onSubmit}>
            <p>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                defaultValue={name}
                ref={this.nameRef}
              />
            </p>
            <p>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter email"
                defaultValue={email}
                ref={this.emailRef}
              />
            </p>
            <p>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter phone no"
                defaultValue={phone}
                ref={this.phoneRef}
              />
            </p>
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
  }
}
