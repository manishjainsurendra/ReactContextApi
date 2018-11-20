import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const FormInput = props => (
  <p>
    <input
      type={props.type}
      name={props.name}
      className={classnames("form-control", {
        "is-invalid": props.error
      })}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    {props.error && <div className="invalid-feedback">{props.error}</div>}
  </p>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

FormInput.defaultProps = {
  type: "text"
};

export default FormInput;
