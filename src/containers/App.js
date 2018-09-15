import React, {
  Component
} from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import {
  connect
} from "react-redux";

// Actions
import {
  actions as dishActions
} from "../actions/dish";
import {
  actions as uiActions
} from "../actions/ui";
import {
  actions as shoppingListActions
} from "../actions/shoppingList";

// Components
import Menus from "./menus"
import ShoppingList from "./shoppingList";
import DishRecipes from "./dishRecipes";
import NavBar from "../components/navBar";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import Recipe from "./recipe";
import NotFound404 from "../components/notFound404";

// CSS
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  async componentDidMount() {
    const {
      dispatch
    } = this.props;
    dispatch(dishActions.getAllDishes());
    dispatch(shoppingListActions.loadAllItems());
  }

  render() {
    const {
      ui,
      shoppingList
    } = this.props;
    const navBarOptions = {
      shoppingListItemsCount: shoppingList.items ? shoppingList.items.length : 0
    };
    return (
      <BrowserRouter>
        <div>
          <NavBar
            toggled={ui.navBarToggled}
            onToggle={this.handleToggleNavBar}
            options={navBarOptions}
          />
          <main role="main" className="container">
            <Switch>
              <Route path="/menu" component={Menus} />
              <Route path="/shoppingList" component={ShoppingList} />
              <Route
                path="/dish/:dish/recipes/:recipe"
                render={this.renderRecipePage}
              />
              <Route
                path="/dish/:dish/recipes"
                render={this.renderDishRecipePage}
              />
              <Route path="/dashboard" render={this.renderDashboard} />
              <Route path="/404" component={NotFound404} />
              <Route path="/" render={this.renderHome} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }

  handleToggleNavBar = () => {
    const {
      dispatch
    } = this.props;
    dispatch(uiActions.toggleNavBar());
  };

  renderDishRecipePage = routerProps => {
    return <DishRecipes {...routerProps
    }
    />;
  };

  renderRecipePage = routerProps => {
    return <Recipe {...routerProps
    }
    />;
  };

  renderDashboard = routerProps => {
    const {
      dishData
    } = this.props;
    return <Dashboard {...routerProps
    }
      dishes={
        dishData.dishes
      }
    />;
  };

  renderHome = routerProps => {
    const sliderData = [{
      imgUrl: "https://www.slavorum.org/wp-content/uploads/2016/07/bulgarinafood-758x504.jpg",
      name: "Bulgarian Food"
    },
    {
      imgUrl: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/ca/77/28/shutterstock-406008751.jpg",
      name: "Cheese & Wine"
    },
    {
      imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/05/1f/89/08/mana-fast-slow-food.jpg",
      name: "Slow Food"
    }
    ];
    return <Home {...routerProps
    }
      sliderData={
        sliderData
      }
    />;
  };

  loadDishData = dishPermalink => {
    const {
      dispatch
    } = this.props;
    dispatch(dishActions.getDishByPermalink(dishPermalink));
  };
}

const mapStateToProps = ({
  dishReducer,
  uiReducer,
  shoppingListReducer
}) => ({
  dishData: dishReducer,
  ui: uiReducer,
  shoppingList: shoppingListReducer
});

export default connect(mapStateToProps)(App);