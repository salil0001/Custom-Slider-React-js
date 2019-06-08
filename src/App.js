import "./App.css";

import React from "react";

export default class App extends React.Component {
  state = {
    Items: [
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "HongKong"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Singpore"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Amritsar"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Bangalore"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Chennai"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Poducherry"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Bidar"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "London"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Paris"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Rome"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Japan"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Maharastra"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Australia"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Sydney"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
        ImageName: "Las Vegas"
      }
    ],
    ToggleClass: true
  };

  handleClick = () => {
    this.setState({
      ToggleClass: !this.state.ToggleClass
    });
  };

  render() {
    const MainList1 = this.state.Items.slice(0, 8).map(Item => {
      return (
        <div className="grid-container-inside">
          <div
            style={{
              background: `url(${Item.ImagesLink})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "brightness(80%)",
              height: "100%",
              width: "100%"
            }}
          />

          <div className="CountryImage">{Item.ImageName}</div>
        </div>
      );
    });

    const MainList2 = this.state.Items.slice(7, 16).map(Item => {
      return (
        <div className="grid-container-inside">
          <div
            style={{
              background: `url(${Item.ImagesLink})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "brightness(80%)",
              height: "100%",
              width: "100%"
            }}
          />

          <div className="CountryImage">{Item.ImageName}</div>
        </div>
      );
    });

    return (
      <div className="Main-Slider">
        <div className="Crousel-Container">
          <div className="leftSide">
            <div
              hidden={this.state.ToggleClass}
              onClick={this.handleClick}
              className="leftSideButton"
            >
              <i className="fas fa-chevron-left fa-2x" />
            </div>
          </div>
          <div className="middleSide">
            <div
              className={
                this.state.ToggleClass
                  ? "innermiddleSide"
                  : "innermiddleSideLeft"
              }
            >
              <div className="grid-container">{MainList1}</div>
            </div>
            <div
              className={
                this.state.ToggleClass
                  ? "innermiddleSideRight"
                  : "innermiddleSide"
              }
            >
              <div className="grid-container">{MainList2}</div>
            </div>
          </div>
          <div className="rightSide">
            <div
              hidden={!this.state.ToggleClass}
              onClick={this.handleClick}
              className="rightSideButton"
            >
              <i className="fas fa-chevron-right fa-2x" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
