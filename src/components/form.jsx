import React, { Component } from "react";
import _ from "lodash";
import { actions as formActions } from "../actions/form";

class Form extends Component {
  handleChange = ({ currentTarget: input }) => {
    const { dispatch } = this.props;
    dispatch(
      formActions.changeFieldValue(this.formKey(), input.name, input.value)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit(this.props.formData[this.formKey()]);
  };

  renderInput = (name, label, type = "text", autofocus = false) => {
    const { formData } = this.props;
    const myFormData = formData[this.formKey()];
    const fieldData = myFormData ? myFormData[name] : "";
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className="form-control"
          value={fieldData}
          autoFocus={autofocus}
          onChange={this.handleChange}
        />
      </div>
    );
  };

  renderButton = label => {
    return <button className="btn btn-primary">{label}</button>;
  };

  render() {
    return <form />;
  }
}

export default Form;
