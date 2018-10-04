import React from "react";
import { Redirect } from "react-router-dom";

// Components
import Form from "./form";

class SignIn extends Form {
  formKey = () => {
    return "SignIn";
  };

  doSubmit = data => {
    const { onSignIn } = this.props;
    onSignIn({ email: data.email, password: data.password });
  };

  render() {
    const { authData } = this.props;
    return !authData.loginSuccess ? (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} className="mt-30">
          {this.renderInput("email", "Email", "text", true)}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Sign In")}
        </form>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default SignIn;
