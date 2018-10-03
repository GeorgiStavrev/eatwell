import React, { Component } from "react";
import _ from "lodash";

class Form extends Component {
  handleChange = ({ currentTarget: input }) => {
    let data = { ...this.state.data };
    _.set(data, input.name, input.value);
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();

    let data = { ...this.state.data };
    this.doSubmit(data);
  };

  renderInput = (name, label, type = "text", autofocus = false) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className="form-control"
          value={this.state.data[name]}
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
