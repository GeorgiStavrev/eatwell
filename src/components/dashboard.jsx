import React, { Component } from "react";
import DishCard from "./dishCard";

class Dashboard extends Component {
  render() {
    const { dishes } = this.props;
    return (
      <div className="mt-5 mr-5">
        <div className="row">
          {dishes
            ? dishes.map(d => (
                <div key={d._id} className="col-4">
                  <DishCard dish={d} showButton={true} />
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Dashboard;
