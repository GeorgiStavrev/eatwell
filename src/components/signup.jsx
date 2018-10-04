import React from "react";
import { Redirect } from "react-router-dom";

// Componentes
import Form from "./form";

class SignUp extends Form {
  formKey = () => {
    return "SignUp";
  };

  doSubmit = data => {
    const { onSignUp } = this.props;
    onSignUp({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password
    });
  };

  render() {
    const { authData } = this.props;
    return !authData.loginSuccess ? (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("first_name", "First Name", "text", true)}
          {this.renderInput("last_name", "Last Name", "text")}
          {this.renderInput("email", "Email", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default SignUp;
