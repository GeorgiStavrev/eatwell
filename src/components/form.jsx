import React, { Component } from "react";
import { actions as formActions } from "../actions/form";

class Form extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(formActions.resetForm(this.formKey(), this.formInitialState()));
  }

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
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className="form-control"
          value={formData[this.formKey()][name]}
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
