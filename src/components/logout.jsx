import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  render() {
    const { onLogout } = this.props;

    onLogout();
    return <Redirect to="/" />;
  }
}

export default Logout;
