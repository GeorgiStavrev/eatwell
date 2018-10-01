import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import LoginState from "./loginState";
import Login from "./login";

class NavBar extends Component {
  render() {
    const { options, toggled, onToggle } = this.props;
    const { shoppingListItemsCount } = options;
    const navBarClasses = "collapse navbar-collapse" + (toggled ? " show" : "");

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">EatWell</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={navBarClasses} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item|">
              <NavLink className="nav-link" to="/menu">
                Menus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                My meals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shoppingList">
                <span>Shopping list</span>
                <span className="ml-1 badge badge-pill badge-info">
                  {shoppingListItemsCount ? shoppingListItemsCount : "..."}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/meals/plan">
                Create meal plan
              </NavLink>
            </li>
            <button className="btn btn btn-success my-2 my-sm-0" type="submit">
              I feel lucky
            </button>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for a dish..."
              aria-label="Search for a dish..."
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Find recipe
            </button>
          </form>
          <LoginState authData={this.props.authData} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
