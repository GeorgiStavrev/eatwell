import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DishCard extends Component {
  render() {
    const { dish, showButton } = this.props;
    const dishRecipesUrl = `/dish/${dish.permalink}/recipes`;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={dish.imgUrl}
          width="180"
          height="180"
          alt={dish.name}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Pad Thai</h5>
          <p className="card-text">{dish.description}</p>
          {showButton ? (
            <NavLink to={dishRecipesUrl} className="btn btn-primary">
              See recipes
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default DishCard;
