import "./App.css";

import React from "react";

export default class App extends React.Component {
  state = {
    Items: [
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "HongKong"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Singpore"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Amritsar"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Bangalore"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Chennai"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Poducherry"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Bidar"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "London"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Paris"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Rome"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Japan"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Maharastra"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Australia"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Sydney"
      },
      {
        ImagesLink:
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.webp",
        ImageName: "Las Vegas"
      }
    ],
    ToggleClass: true
  };

  handleClick=()=>
  {
    this.setState({
      ToggleClass:!this.state.ToggleClass
    })
  }


  render() {
    const MainList1 = this.state.Items.slice(0, 8).map(Item => {
      return (
        <div className="grid-container-inside">
          <div className="Coloums-Configure">
            <div className="Coloums-Configure-Image">
              <img
                src={Item.ImagesLink}
                className=""
                height="100%"
                width="100%"
                alt="images"
              />
            </div>
            <div className="Coloums-Configure-Text">{Item.ImageName}</div>
          </div>
        </div>
      );
    });

    const MainList2 = this.state.Items.slice(7, 16).map(Item => {
      return (
        <div className="grid-container-inside">
          <div className="Coloums-Configure">
            <div className="Coloums-Configure-Image">
              <img
                
                src={Item.ImagesLink}
                height="100%"
                width="100%"
                alt="images"
              />
            </div>
            <div className="Coloums-Configure-Text">{Item.ImageName}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="Main-Slider">
        <div className="Crousel-Container">
          <div className="leftSide">
            <div hidden={this.state.ToggleClass} onClick={this.handleClick} className="leftSideButton">
              <i className="fas fa-chevron-left fa-2x" />
            </div>
          </div>
          <div className="middleSide">
            <div className={this.state.ToggleClass?"innermiddleSide":"innermiddleSideLeft"}>
              <div className="grid-container">{MainList1}</div>
            </div>
            <div className={this.state.ToggleClass?"innermiddleSideRight":"innermiddleSide"}>
              <div className="grid-container">{MainList2}</div>
            </div>
          </div>
          <div className="rightSide">
            <div hidden={!this.state.ToggleClass} onClick={this.handleClick} className="rightSideButton">
              <i className="fas fa-chevron-right fa-2x" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
