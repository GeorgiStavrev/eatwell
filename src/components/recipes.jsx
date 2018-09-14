import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import EmbededVideo from "./embededVideo";

class Recipes extends Component {
  render() {
    const { dish, items, selected, onClickRecipe } = this.props;
    const recipeLinkBase = "/dish/" + dish.permalink + "/recipes/";

    return (
      <div className="mt-5">
        <h2>{dish.name} Recipes</h2>
        {items.map(d => {
          const recipeLink = recipeLinkBase + d.permalink;

          return (
            <div key={d._id} className="row recipe-row mt-2">
              {d && selected && d._id === selected._id ? (
                <div className="col-6">
                  <EmbededVideo videoUrl={d.videoUrl} />
                </div>
              ) : (
                <React.Fragment>
                  <NavLink to={recipeLink}>
                    <div className="col-4">
                      <a onClick={() => onClickRecipe(d._id)}>
                        <img width="110" src={d.thumbnail} alt="thumbnail" />
                      </a>
                    </div>
                    <div className="col">
                      <span>{d.name}</span>
                    </div>
                  </NavLink>
                </React.Fragment>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Recipes;
