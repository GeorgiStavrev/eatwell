import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

class Login extends Component {
  state = { data: { email: "", password: "" } };
  handleSubmit = e => {
    let data = { ...this.state.data };
    const { onLogin } = this.props;
    e.preventDefault();
    onLogin(data);
  };

  handleChange = ({ currentTarget: input }) => {
    let data = { ...this.state.data };
    _.set(data, input.name, input.value);
    this.setState({ data });
  };
  render() {
    const { authData } = this.props;
    return !authData.loginSuccess ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="login">Username</label>
        <input
          type="text"
          name="email"
          value={this.state.data.email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.data.password}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Login;
