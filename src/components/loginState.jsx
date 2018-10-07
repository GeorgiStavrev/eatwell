import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LoginState extends Component {
  render() {
    const { authData } = this.props;
    return !authData.loginSuccess ? (
      <ul
        className="nav navbar-nav navbar-right"
        style={{ marginLeft: "10px" }}
      >
        <li>
          <span>
            <i className="fa fa-user-plus" />{" "}
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        </li>
        <li style={{ marginLeft: "10px" }}>
          <span>
            <i className="fa fa-sign-in" />{" "}
            <NavLink to="/signin">Sign In</NavLink>
          </span>
        </li>
      </ul>
    ) : (
      <ul
        className="nav navbar-nav navbar-right"
        style={{ marginLeft: "10px" }}
      >
        <li>
          <span>{authData.currentUser.first_name}</span>
        </li>
        <li className="ml-2">
          <span>
            <i className="fa fa-sign-out" />{" "}
            <NavLink to="/signout">Logout</NavLink>
          </span>
        </li>
      </ul>
    );
  }
}

export default LoginState;
