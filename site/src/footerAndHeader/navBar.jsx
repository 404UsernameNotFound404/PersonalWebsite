import React, { Component } from "react";
import "./NavBarStyle.css";
import {
  withRouter,
  Route,
  Redirect,
  Switch,
  BrowserRouter,
  Link,
  NavLink
} from "react-router-dom";
import { Button, Responsive } from "semantic-ui-react";

class navBar extends Component {
  state = {
    value: true
  };
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="forNavBar">
            <div className="forMyNameContainer">
              <h1 className="ui header medium forMyName">Henry Morris</h1>
            </div>
            <div className="forNavBarButtonsContainer">
              <button
                className="ui button forNavBarButtons"
                onClick={this.toHome}
              >
                About Me
              </button>
              <button
                className="ui button forNavBarButtons"
                onClick={this.toContact}
              >
                Contact
              </button>
              <button
                className="ui button forNavBarButtons"
                onClick={this.toCodingProgects}
              >
                Coding Progects
              </button>
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className="forNavBar">
            <div className="forMyNameContainer">
              <h1 className="ui header tiny forMyNameMobile">Henry Morris</h1>
            </div>
            <div className="forNavBarButtonsContainer">
              <button
                className="ui button forNavBarButtons"
                onClick={this.toHome}
              >
                About Me
              </button>
              <button
                className="ui button forNavBarButtons"
                onClick={this.toContact}
              >
                Contact
              </button>
              <button
                className="ui button forNavBarButtons"
                onClick={this.toCodingProgects}
              >
                Coding Progects
              </button>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
  toContact = () => {
    console.log("Hi");
    window.location.href = "/Contact";
  };
  toHome = () => {
    console.log("Hi");
    window.location.href = "/AboutMe";
  };
  toCodingProgects = () => {
    console.log("Hi");
    window.location.href = "/CodingProgects";
  };
}

export default navBar;
