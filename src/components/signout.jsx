import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignOut extends Component {
  render() {
    const { onSignOut } = this.props;

    onSignOut();
    return <Redirect to="/" />;
  }
}

export default SignOut;
