import React, { Component } from "react";

class Home extends Component {
  render() {
    const { sliderData } = this.props;

    const sliderItemsRendered = sliderData
      ? sliderData.map((item, index) => {
        const itemClasses =
          index === 0 ? "carousel-item active" : "carousel-item";

        return (
          <div key={item.name} className={itemClasses}>
            <img
              className="d-block w-100"
              width="500px"
              src={item.imgUrl}
              alt={item.name}
            />
          </div>
        );
      })
      : "";

    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-50"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">{sliderItemsRendered}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Home;
