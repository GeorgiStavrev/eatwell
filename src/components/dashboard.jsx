import React, { Component } from "react";
import DishCard from "./dishCard";

//Services
import { getDishes } from "../services/fakeDishService";

class Dashboard extends Component {
  state = { dishes: [] };

  async componentDidMount() {
    this.setState({ dishes: await getDishes() });
  }

  render() {
    return (
      <div className="mt-5 mr-5">
        <div className="row">
          {this.state.dishes.map(d => (
            <div key={d._id} className="col-4">
              <DishCard dish={d} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
